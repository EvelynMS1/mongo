const {Schema} = require('mongoose');
//defining the properties values, types (blueprint) defining the structure and properties
//of a document 
//will need o be converted to a model in order to be used
const reactionSchema = new Schema(
    {
        reactionId:{
            type: Schema.Types.ObjectId,
            default: Schema.Types.ObjectId
        },
        reactionBody:{
            type:String,
            required:true,
            maxLength:280,
        },
        username:{
            type:String,
            required:true,

        },
        createdAt:{
            type:Date,
            default:Date.now,
            get: (timestamp) => moment(timestamp).format('YYYY-MM-DD HH:mm'),

        }
    }
);

// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;