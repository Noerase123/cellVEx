import fs from 'firebase-admin'
const serviceAccount = require('./cell-f1b03-firebase-adminsdk-yzes8-fa8bc7c543.json')

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount)
})

const db = fs.firestore()

export default db