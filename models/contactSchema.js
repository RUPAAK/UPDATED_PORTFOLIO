const mongoose= require('mongoose')

const connectSchema= mongoose.Schema({
    username: {type: String},
    number: {type: Number},
    email: {type: String},
    message: {type: String}
})

const Connect= mongoose.model("Connect", connectSchema)

module.exports= Connect