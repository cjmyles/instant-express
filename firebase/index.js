const admin = require('firebase-admin');
const config = require('config');

let db;

try {
  admin.initializeApp({
    credential: admin.credential.cert(config.get('firebase.serviceAccountKey')),
  });

  db = admin.firestore();
  db.settings({ /* your settings... */ timestampsInSnapshots: true });
} catch (error) {
  console.error(error);
  throw error;
}

module.exports = { db };
