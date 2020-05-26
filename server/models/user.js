import config from '@config'
import mongoose from 'mongoose'
import Bcrypt from 'bcryptjs'
import randomstring from 'randomstring'
import Mail from '@fullstackjs/mail'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  password: String,
  emailConfirmedAt: Date,
  emailConfirmCode: String
})

UserSchema.pre('save', function () {
  this.password = Bcrypt.hashSync(this.password)
  this.emailConfirmCode = randomstring.generate(72)

  this.createdAt = new Date()
})

UserSchema.post('save', function () {
  new Mail('confirm-account')
    .to(this.email, this.name)
    .subject('From MEVN Team: Please confirm your account')
    .data({
      name: this.name,
      url: `${config.appUrl}/auth/emails/confirm/${this.emailConfirmCode}`
    })
    .send()
})

export default mongoose.model('User', UserSchema)
