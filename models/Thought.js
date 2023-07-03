const {Schema,model} = require('mongoose');
const reactionSchema = require('./Reaction')
const thoughtSchema = new Schema(
    {
        thoughttext:{
        type:String,
        required:true,
        minLength:1,
        maxLength:280,
        },
        createdAt:{
            type:Date,
            default:Date.now,
            //anonymous function in order to formatted date 
            //(Date)=> format Date object
            // get(
            //     function(){ 
            //        return 
            //     }
            // )
           
           
        },
        username:{
            type:String,
            required:true,
            
        },
        //will be schema of reaction
        reactions:[reactionSchema],
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
     
      }
);

//Create virtual property 
thoughtSchema
.virtual('reactionCount')
.get(
    function(){
        //get length of array reaction
       return this.reactions.length;
    }
)

//initializing thoughts model
const Thought = model('Thought',thoughtSchema);

module.exports = Thought;