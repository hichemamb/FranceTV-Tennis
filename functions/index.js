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

app.intent('playVideo', (conv) => {
   conv.ask(new ImmersiveResponse({
      url: 'https://francetv-uhccgd.firebaseapp.com',
   }));
   const ssml = '<speak>' +
      'Très bien, je lance la vidéo' +
      '</speak>';
   conv.ask(ssml);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);