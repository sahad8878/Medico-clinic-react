const mongoose=require('mongoose')

const clientSchema= new mongoose.Schema({
name:{
type:String,
required:[true,"name is required"]
},
email:{
    type:String,
    required:[true,"email is required"]
},
password:{
    type:String,
    required:[true,"password is required"]
},
isAdmin:{
    type:Boolean,
    default:false,
}
},{
    timestamps:true  
   })

const clientModel=mongoose.model("clients",clientSchema)
 module.exports=clientModel