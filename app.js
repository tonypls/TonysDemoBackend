/*-----------------------------------------------------------------------------
A simple Language Understanding (LUIS) bot for the Microsoft Bot Framework.
-----------------------------------------------------------------------------*/

var restify = require('restify');
var builder = require('botbuilder');
var botbuilder_azure = require("botbuilder-azure");
var dbtools = require('./dbtools.js');
var path = require('path');
var names = require("./db.json");

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
    openIdMetadata: process.env.BotOpenIdMetadata
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot.
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

var tableName = 'botdata';
var azureTableClient = new botbuilder_azure.AzureTableClient(tableName, process.env['AzureWebJobsStorage']);
var tableStorage = new botbuilder_azure.AzureBotStorage({ gzipData: false }, azureTableClient);

// Create your bot with a function to receive messages from the user
// This default message handler is invoked if the user's utterance doesn't
// match any intents handled by other dialogs.
var bot = new builder.UniversalBot(connector, function (session, args) {
    session.send('Sorry I can\'t help you there');
});

bot.set('storage', tableStorage);

// Make sure you add code to validate these fields
var luisAppId = process.env.LuisAppId;
var luisAPIKey = process.env.LuisAPIKey;
var luisAPIHostName = process.env.LuisAPIHostName || 'westus.api.cognitive.microsoft.com';

const LuisModelUrl = 'https://' + luisAPIHostName + '/luis/v2.0/apps/' + luisAppId + '?subscription-key=' + luisAPIKey;

// Create a recognizer that gets intents from LUIS, and add it to the bot
var recognizer = new builder.LuisRecognizer(LuisModelUrl);
bot.recognizer(recognizer);

// Add a dialog for each intent that the LUIS app recognizes.
// See https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-recognize-intent-luis
bot.dialog('GreetingDialog',
    (session) => {
        session.send('Kia Ora, these are my friends: '+ dbtools.getNames());
        session.endDialog();
    }
).triggerAction({
    matches: 'Greeting'
})

bot.dialog('getFemales',
    (session) => {
        session.send('Here are the females: '+ dbtools.getFemales());
        session.endDialog();
    }
).triggerAction({
    matches: 'getFemales'
})

bot.dialog('getMales',
    (session) => {
        session.send('These are the males: '+ dbtools.getMales());
        session.endDialog();
    }
).triggerAction({
    matches: 'getMales'
})

bot.dialog('getOverAge', [
    function (session, args, next) {
        var intent = args.intent;
        var age = builder.EntityRecognizer.findEntity(intent.entities, 'age1');
        if(age != null){
          session.send(dbtools.getOverAge(age.entity));
      }
        session.endDialog();
    }
]).triggerAction({
    matches: 'getOverAge'
})

bot.dialog('getUnderAge', [
    function (session, args, next) {
        var intent = args.intent;
        var age = builder.EntityRecognizer.findEntity(intent.entities, 'age1');
        if(age != null){
          session.send(dbtools.getUnderAge(age.entity));
      }
        session.endDialog();
    }
]).triggerAction({
    matches: 'getUnderAge'
})


var openString = "Hey there these are my friends: ";
var followString = "Ask me if they are male, female, above or below a certain age";

bot.on('conversationUpdate', function (activity) {
  // when user joins conversation, send instructions
  if (activity.membersAdded) {
    activity.membersAdded.forEach(function (identity) {
      if (identity.id === activity.address.bot.id) {
        var openMessage = new builder.Message()
        .address(activity.address)
        .text(openString + dbtools.getNames() + "<br/>" + hintString);
        bot.send(openMessage);
      }
    });
  }
});
