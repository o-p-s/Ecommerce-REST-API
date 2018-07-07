const express=require('express')
const mongoose=require('mongoose')
const response=require('../libs/responseLib')
const check=require('./../libs/checkLib.js')
const logger=require('./../libs/loggerLib.js')
const validOffer=require('./../libs/validOfferLib.js')
const shortid=require('shortid')
const appConfig=require('./../config/appConfig.js')
const ProductModel=mongoose.model('Product')

let categoryListings=(req,res)=>{
    if (check.isEmpty(req.params.category)&& check.isEmpty(req.params.subCategory)) {
        logger.error(err.message, 'ListingsController: Category & SubCategory should be passed in Route', 10)
        let apiResponse = response.generate(true, 'Category or SubCategory is missing', 403, null)
        res.send(apiResponse)
    } else {
        ProductModel.find({'productBaseInfoV1.categoryPath':{$all:[req.params.category,req.params.subCategory]}})
        .select('-__v -_id')
        .lean()
        .exec((err,result)=>{ 
            if(err){
                logger.error(err.message, 'ListingsController: categoryListings', 10)
                let apiResponse=response.generate(true,'Failed to find Products',500, null);
                res.send(apiResponse);
            }else if(check.isEmpty(result)){
                logger.info('No Products Found', 'ListingsController: categoryListings')
                let apiResponse=response.generate(true,`No Products available in ${req.params.category}/${req.params.subCategory}`,404,null);
                res.send(apiResponse);
            }
            else{
                logger.info("Products in this category found successfully","ListingsController:categoryListings",5)
                let apiResponse=response.generate(false,'All Products in this Category found',200,result);
                res.send(apiResponse);
            }
        })//end of ProductModel.find to find products in requested /category/subCategory
    }
}//end of CategoryListings
let addListings=(req,res)=>{
    let addProductFunction=()=>{
        return new Promise((resolve,reject)=>{
            console.log(req.body)
            if ( check.isEmpty(req.body.title) && check.isEmpty(req.body.productDescription) && check.isEmpty(req.body.inStock) && check.isEmpty(req.body.maximumRetailPrice) 
            && check.isEmpty(req.body.categoryPath) && check.isEmpty(req.body.quantity) && check.isEmpty(req.body.keySpecs)) {
                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {
                let productId = shortid.generate()

                let newProduct = new ProductModel({
                    productBaseInfoV1: {
                        productId: productId,
                        title: req.body.title,
                        productDescription: req.body.productDescription,
                        maximumRetailPrice:{amount: req.body.maximumRetailPrice.amount,currency:req.body.maximumRetailPrice.currency},
                        sellingPrice:{currency:req.body.maximumRetailPrice.currency},
                        specialPrice:{currency:req.body.maximumRetailPrice.currency},
                        inStock: req.body.inStock,
                        quantity:req.body.quantity,
                        productUrl: appConfig.apiVersion+'/product/'+productId,
                        productFamily: req.body.productFamily,
                        productBrand:req.body.productBrand,
                        codAvailable: req.body.codAvailable,
                        discountPercentage:req.body.discountPercentage,  
                        imageUrls:{
                        '400x400': req.body.imgUrls['400x400'],
                        '200x200': req.body.imgUrls['200x200'],
                        '800x800': req.body.imgUrls['800x800'],
                        unknown: req.body.imgUrls.unknown,
                        },     
                        categoryPath: req.body.categoryPath.split('/')         
                    },
                    productShippingInfoV1: {
                        sellersName:req.body.sellersName
                    },
                    categorySpecificInfoV1:{
                        specificationList:req.body.specificationList,
                        detailedSpecs:req.body.detailedSpecs,
                        keySpecs:req.body.keySpecs
                    }
                }) // end new Product model
                newProduct.productBaseInfoV1.sellingPrice.amount=req.body.maximumRetailPrice.amount-((req.body.maximumRetailPrice.amount*newProduct.productBaseInfoV1.discountPercentage)/100);
                
                if(req.body.offer!=null && req.body.offer!=undefined && req.body.offer!=''){
                if(validOffer(req.body.offer.offerPercentage,req.body.offer.validTill)){
                    newProduct.productBaseInfoV1.offer.offerPercentage=req.body.offer.offerPercentage;
                    newProduct.productBaseInfoV1.offer.validTill=req.body.offer.validTill;
                    newProduct.productBaseInfoV1.specialPrice.amount=newProduct.productBaseInfoV1.maximumRetailPrice.amount-((newProduct.productBaseInfoV1.maximumRetailPrice.amount*newProduct.productBaseInfoV1.offer.offerPercentage)/100);
                }else{
                    logger.info('Offer Expired', 'ListingsController: addListings');
                    newProduct.productBaseInfoV1.offer=null;
                }
                }
                newProduct.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Product Successfully Added.')
                        resolve(result)
                    }
                }) // End New Product Save
            } //End Else Statement
        }) //End New Product Promise
    }//End addProduct Function

    addProductFunction().then((result)=>{
        let apiResponse=response.generate(false,'Product Added Successfully',200,result)
        res.send(apiResponse)
    }).catch((error)=>{
        console.log(error)
        res.send(error)
    })
}//End addListings

let removeListings = (req, res) => {

    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductModel.remove( { 'productBaseInfoV1.productId': req.params.productId }, (err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Removal Successfull')
                let apiResponse = response.generate(false, 'Product Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        }) //end of ProductModel.Remove to remove any product
    }
 }//end of removeListings


let viewListings = (req, res) => {

    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductModel.findOne({'productBaseInfoV1.productId': req.params.productId})
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully","ListingsController:ViewListings",5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        }) //end of ProductModel.findOne for viewing Product
    }
}   //end of ViewListings

let editListings = (req, res) => {
    let editProductFunction=()=>{
        return new Promise((resolve,reject)=>{
            if (check.isEmpty(req.params.productId)) {

                console.log('productId should be passed')
                let apiResponse = response.generate(true, 'productId is missing', 403, null)
                reject(apiResponse)
            } else { 
                let convertObject=(obj)=> {
                    var res = {};
                    (function iterate(obj, parent) {
                    for (var prop in obj) {
                        if (obj.hasOwnProperty(prop)) {
                        if (typeof obj[prop] === 'string' 
                            || typeof obj[prop] === 'number' 
                            || typeof obj[prop] === 'boolean' 
                            || Object.prototype.toString.call(obj[prop]) === '[object Array]' ) {
                            if (parent) res[parent + '.' + prop] = obj[prop];
                            else res[prop] = obj[prop];
                        } else {
                            if (parent) iterate(obj[prop], parent + '.' + prop);
                            else iterate(obj[prop], prop);
                        }
                        }
                    }
                    })(obj)
                    return res;
                } //end of convertObject function
                ProductModel.update({'productBaseInfoV1.productId': req.params.productId},
                {$set:convertObject(req.body)}).select('-__v -_id').lean()
                .exec((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(result)) {

                        console.log('Product Not Found.')
                        let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        logger.info("Product Updated successfully","ListingsController:ViewListings",5)
                        resolve(result)
                    }
                }) //end of ProductModel.update for updating requested info in product
            }
        }) //end of new Promise
    }//end of edit Product Function
    editProductFunction().then((result)=>{
        let apiResponse=response.generate(false,'Product Updated Successfully',200,result)
        res.send(apiResponse)
    }).catch((error)=>{
        console.log(error)
        res.send(error)
    })
}//end of editListings

module.exports={
    categoryListings:categoryListings,
    addListings:addListings,
    removeListings:removeListings,
    viewListings:viewListings,
    editListings:editListings
}