const mongoose=require('mongoose')
const Schema=mongoose.Schema;

let CartSchema=new Schema({
    Products:[{
        productId:{type:String,unique:true},
        quantity:{type:Number,default:0},
    }],
    email:{type:String,default:''},
    lastModified:{type:Date,default:null}
})
mongoose.model('Cart',CartSchema)