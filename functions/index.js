process.env.FIREBASE_CONFIG = JSON.stringify({
   // databaseURL: 'https://databaseName.firebaseio.com',
   // storageBucket: 'projectId.appspot.com',
   projectId: 'francetv-tennis'
});

const functions = require('firebase-functions');
const {dialogflow, ImmersiveResponse} = require('actions-on-google');

// const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// console.log(firebaseConfig);
const app = dialogflow({debug: true});

app.intent('color', (conv) => {
   conv.ask(new ImmersiveResponse({
      url: 'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4',
   }));
   const ssml = '<speak>' +
      'Une couleur rouge, verte, rose, marron, gris' +
      '</speak>';
   conv.ask(ssml);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);