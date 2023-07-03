const {Schema} = require('moongose');
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
            timestamp:true,
            default:timestamp,
            get: placeholder text,
           // getter method for formating the timestamp on query
        }
    }
);

// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;