const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User', {
    name: {
        type : String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Invalid email')
            }
        }
    },

    password : {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if (value === 'password' || value.length < 6){
                throw new Error('Wrong Password')
            }
        }
    }

})

module.exports = User;