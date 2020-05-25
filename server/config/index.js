import dotenv from 'dotenv'

dotenv.config()

export default {
  databaseUri:
    process.env.MEVN_DATABASE_URL || 'mongodb://localhost:12345/mevn',
  serverPort: process.env.MEVN_SERVER_PORT || 7000
}
