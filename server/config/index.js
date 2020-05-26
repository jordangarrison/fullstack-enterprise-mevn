import dotenv from 'dotenv'

dotenv.config()
const databaseUri =
  process.env.MEVN_DATABASE_URL || 'mongodb://localhost:12345/mevn'
const serverPort = process.env.MEVN_SERVER_PORT || 7000
const appUrl = process.env.MEVN_APP_URL || `http://localhost:${serverPort}`
export default {
  databaseUri: databaseUri,
  serverPort: serverPort,
  appUrl: appUrl
}
