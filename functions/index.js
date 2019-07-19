process.env.FIREBASE_CONFIG = JSON.stringify({
   // databaseURL: 'https://databaseName.firebaseio.com',
   // storageBucket: 'projectId.appspot.com',
   projectId: 'francetv-uhccgd'
});

const functions = require('firebase-functions');
const {dialogflow, ImmersiveResponse} = require('actions-on-google');

// const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// console.log(firebaseConfig);
const app = dialogflow({debug: true});

app.intent('welcome', (conv) => {
   conv.ask(new ImmersiveResponse({
      url: 'https://francetv-uhccgd.firebaseapp.com',
      state: {
         welcome: true,
      }
   }));
   const ssml = '<speak>' +
      'Bonjour Vincent' +
      '</speak>';
   conv.ask(ssml);

});

app.intent('getAnswerVideo', (conv) => {
   conv.ask(new ImmersiveResponse({
      state: {
         getAnswerVideo: true,
      }
   }));
   const ssml = '<speak>' +
      'Lancement de la vidéo' +
      '</speak>';
   conv.ask(ssml);

});

app.intent('commentVideo', (conv) => {
   conv.ask(new ImmersiveResponse({
      state: {
         commentVideo: true,
      },
   }));
   const ssml = '<speak>' +
      'Quel commentaire voulez-vous laisser ?' +
      '</speak>';
   conv.ask(ssml);

});

app.intent('getComment', (conv, params) => {
   conv.ask(new ImmersiveResponse({
      state: {
         getComment: params,
      },
   }));
   const ssml = '<speak>' +
      'Êtes vous sûr de vouloir poster ce commentaire ?' +
      '</speak>';
   conv.ask(ssml);
});

app.intent('getConfirmation', (conv) => {
   conv.ask(new ImmersiveResponse({
      state: {
         getConfirmation: true,
      },
   }));
   const ssml = '<speak>' +
      'Votre commentaire a été ajouter à la vidéo' +
      '</speak>';
   conv.ask(ssml);

});

app.intent('showStats', (conv) => {
   conv.ask(new ImmersiveResponse({
      state: {
         displayStats: true,
      },
   }));
   const ssml = '<speak>' +
      'Voici plus de statistiques sur le match' +
      '</speak>';
   conv.ask(ssml);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);