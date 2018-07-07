const mongoose=require('mongoose')

const Schema=mongoose.Schema;

let ProductSchema= new Schema(
    {
    productBaseInfoV1: {
        productId: {type: String, unique:true},
        title: {type: String, default: '' },
        productDescription: {type: String, default: '' },
        imageUrls: {
            '400x400': {type: String, default: '' },
            '200x200': {type: String, default: '' },
            unknown: {type: String, default: '' },
            '800x800': {type: String, default: '' }
        },
        productFamily: [],
        maximumRetailPrice: {
            amount: {type: Number, default: 0 },
            currency: {type: String, default: 'INR' }
        },
        sellingPrice: {
            amount:{type: Number, default: 0 } ,
            currency: {type: String, default: 'INR' }
        },
        specialPrice: {
            amount:{type: Number, default: 0 } ,
            currency: {type: String, default: 'INR' }
        },
        productUrl:{type: String, default: '' },
        productBrand: {type: String, default: '' },
        inStock: {type: Boolean, default: null },
        codAvailable: {type: Boolean, default:null },
        discountPercentage:{type: Number, default: 0 },
        offer:{
            offerPerccentage:{type:Number,default:0},
            validTill:{type:Date,default:null}
        },
        categoryPath:[{type:String,default:''}],
        quantity:{type:Number,default:0}
    },
    productShippingInfoV1: {
        shippingCharges: {
            amount: {type: Number, default: 0 },
            currency: {type: String, default: 'INR' }
        },
        sellerName: {type: String, default: '' },
        sellerAverageRating: {type: Number, default: 0 },
        sellerNoOfRatings:{type: Number, default: 0 },
        sellerNoOfReviews: {type: Number, default: 0 }
    },
    categorySpecificInfoV1: { 
        keySpecs: [
            { key: {type: String, default: '' },
              values: []
            }
        ],
        detailedSpecs: [
            { key: {type: String, default: '' },
              values: []
            }
        ],
        specificationList: [
            { key: {type: String, default: '' },
              values: []
            }
        ]
    }
    }
)
mongoose.model('Product',ProductSchema)