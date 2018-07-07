const express=require('express')
const mongoose=require('mongoose')
const response=require('../libs/responseLib')
const check=require('./../libs/checkLib.js')
const logger=require('./../libs/loggerLib.js')
const ProductModel=mongoose.model('Product')
const CartModel=mongoose.model('Cart')

let createCart = (req, res) => {
    let CartCreationFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.email)) {
                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
                reject(apiResponse)
            } else {
                var today = Date.now()
                let newCart = new CartModel({
                    Products:[],
                    email:req.body.email,
                    lastsModified:today,
                }) // end new cart model

                newCart.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log(`Cart Created Successfully for ${req.body.email}`)
                        resolve(result)
                    }
                }) // end new cart save
            }
        }) // end new cart promise
    } // end create cart function

    // making promise call.
    CartCreationFunction().then((result) => {
            let apiResponse = response.generate(false, `Cart Created successfully for ${req.body.email}`, 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}

let addItemToCart = (req, res) => {
    let UpdateCartFunction = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.product) && check.isEmpty(req.body.email)) {
                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
                reject(apiResponse)
            } else {
                let product=req.body.product;
                ProductModel.update(
                    {'productBaseInfoV1.productId':product.productId,'quantity':{$gt:product.quantity}},
                    {$inc:{'quantity':-product.quantity}})
                    .exec((err,result)=>{
                    if(err){
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    }
                    else if(check.isEmpty(result)){
                        console.log(' Product Not Found.')
                        let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                        reject(apiResponse)
                    }
                    else {
                   
                        CartModel.findOne({'email':req.body.email,"Products.productId":product.productId},
                        (err,result)=>{
                            if(err){
                                console.log('Error Occured.')
                                logger.error(`Error Occured : ${err}`, 'Database', 10)
                                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                                reject(apiResponse)
                            }
                            else if(check.isEmpty(result)){
                                CartModel.update(
                                    { 'email': req.body.email},
                                    {$addToSet:{Products:req.body.product},lastModified:Date.now()},
                                    )
                                    .exec((err, result) => {
                                        if (err) {
                                            console.log('Error Occured.')
                                            logger.error(`Error Occured : ${err}`, 'Database', 10)
                                            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                                            reject(apiResponse)
                                        } else if (check.isEmpty(result)) {
                                            console.log(' Not Found.')
                                            let apiResponse = response.generate(true, 'Cart Not Found', 404, null)
                                            reject(apiResponse)
                                        } else {
                                            console.log('Cart Updated Successfully')
                                            resolve(result)
                                        }
                                    }) //end of CartModel.update to push new Product in the Cart
                            }
                            else{
                                CartModel.update(
                                    { 'email': req.body.email,"Products.productId":product.productId},
                                    {$inc:{"Products.$[elem].quantity":+product.quantity},'lastModified':Date.now()},
                                    {arrayFilters:[{"elem.productId":product.productId}]})
                                    .exec((err, result) => {
                                        if (err) {
                                            console.log('Error Occured.')
                                            logger.error(`Error Occured : ${err}`, 'Database', 10)
                                            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                                            reject(apiResponse)
                                        } else if (check.isEmpty(result)) {
                                            console.log(' Not Found.')
                                            let apiResponse = response.generate(true, 'Cart Not Found', 404, null)
                                            reject(apiResponse)
                                        } else {
                                            console.log('Cart Updated Successfully')
                                            resolve(result)
                                        }
                                    }) //end of CartModel.update to increase existing Product's quantity in the Cart
                            }
                        }) //end of CartModel.findOne to find that product in the Cart
                                                                                                                                                       
                    }
                }) //end of ProductModel.update to decrease Product's quantity in its Model
            }
        }) //end of Promise
    } //end of UpdateCartFunction
    UpdateCartFunction().then((result) => {
        let apiResponse = response.generate(false, `Cart Updated successfully for ${req.body.email}`, 200, result)
        res.send(apiResponse)
    })
    .catch((error) => {
        console.log(error)
        res.send(error)
    })
} //end of addItemToCart

let removeItemFromCart = (req, res) => {
    let UpdateCartFunction = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.product) && check.isEmpty(req.body.email)) {
                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
                reject(apiResponse)
            } else {
                let product=req.body.product;

                ProductModel.update(
                    {'productBaseInfoV1.productId':product.productId},
                    {$inc:{quantity:+product.quantity}})
                    .exec((err,result)=>{
                    if(err){
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    }
                    else if(check.isEmpty(result)){
                        console.log(' Product Not Found.')
                        let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                        reject(apiResponse)
                    }
                    else {
                        let options = {$pull:{Products:{productId:product.productId}},lastModified:Date.now()};                
                        console.log(options);
                        CartModel.update({ 'email': req.body.email }, options).exec((err, result) => {
                            if (err) {
                                console.log('Error Occured.')
                                logger.error(`Error Occured : ${err}`, 'Database', 10)
                                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                                reject(apiResponse)
                            } else if (check.isEmpty(result)) {
                                console.log(' Not Found.')
                                let apiResponse = response.generate(true, 'Cart Not Found', 404, null)
                                reject(apiResponse)
                            } else {
                                console.log('Cart Updated Successfully')
                                resolve(result)
                            }
                        }) // end of CartModel.update to pull that Product from Cart  
                                                    
                    }
                }) //end of ProductModel.update to update Product's quantity in its Model
            }
        }) //end of Promise
    } //end of UpdateCartFucntion
    UpdateCartFunction().then((result) => {
        let apiResponse = response.generate(false, `Cart Updated successfully for ${req.body.email}`, 200, result)
        res.send(apiResponse)
    })
    .catch((error) => {
        console.log(error)
        res.send(error)
    })
} //end of removeItemFromCart

let decreaseQuantityInCart = (req, res) => {
    let UpdateCartFunction = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.product) && check.isEmpty(req.body.email)) {
                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
                reject(apiResponse)
            } else {
                let product=req.body.product;
                ProductModel.update(
                    {'productBaseInfoV1.productId':product.productId},
                    {$inc:{quantity:+product.quantity}})
                    .exec((err,result)=>{
                    if(err){
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    }
                    else if(check.isEmpty(result)){
                        console.log(' Product Not Found.')
                        let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                        reject(apiResponse)
                    }
                    else {
                        CartModel.update(
                            { 'email': req.body.email,"Products.productId":product.productId},
                            {$inc:{"Products.$[elem].quantity":-product.quantity},'lastModified':Date.now()},
                            {arrayFilters:[{"elem.productId":product.productId}]})
                        .exec((err, result) => {
                            if (err) {
                                console.log('Error Occured.')
                                logger.error(`Error Occured : ${err}`, 'Database', 10)
                                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                                reject(apiResponse)
                            } else if (check.isEmpty(result)) {
                                console.log(' Not Found.')
                                let apiResponse = response.generate(true, 'Cart Not Found', 404, null)
                                reject(apiResponse)
                            } else {
                                console.log('Cart Updated Successfully')
                                resolve(result)
                            }
                        }) // end of CartModel.update to decrease Product's quantity in Cart    
                                                    
                    }
                }) //end of ProductModel.update to increase Product's quantity in its Model
            }
        }) //end of Promise
    } //end of UpdateCartFunction 
    UpdateCartFunction().then((result) => {
        let apiResponse = response.generate(false, `Cart Updated successfully for ${req.body.email}`, 200, result)
        res.send(apiResponse)
    })
    .catch((error) => {
        console.log(error)
        res.send(error)
    })
} // end of decreaseQuantityInCart

let viewCart=(req,res)=>{
    if (check.isEmpty(req.body.email)) {
        console.log('email should be passed')
        let apiResponse = response.generate(true, 'email is missing', 403, null)
        res.send(apiResponse)
    } else {
        CartModel.findOne({'email': req.body.email}).select('-__v -_id').lean()
        .exec( (err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Cart Not Found.')
                let apiResponse = response.generate(true, 'Cart Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Cart found successfully","ListingsController:ViewCart",5)
                let apiResponse = response.generate(false, 'Cart Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

module.exports={
    createCart:createCart,
    addItemToCart:addItemToCart,
    removeItemFromCart:removeItemFromCart,
    decreaseQuantityInCart:decreaseQuantityInCart,
    viewCart:viewCart
}