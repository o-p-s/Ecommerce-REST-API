const expres=require('express')
const listingsController=require('./../controllers/listingsController.js')
const cartController=require('./../controllers/cartController.js')
const appConfig=require('./../config/appConfig.js');
const auth=require('./../middlewares/auth.js')

module.exports.setRouter=function(app){
    let baseUrl=appConfig.apiVersion;
    app.post(baseUrl+'/product/add',auth.isAuthenticated,listingsController.addListings);
    /**
	 * @api {post} /api/v1/product/add Create Product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header).For testing use test.
	 * @apiParam {String} title title of the product passed as a body parameter
	 * @apiParam {String} productDescription description of the product passed as a body parameter
	 * @apiParam {Object} maximumRetailPrice maximumRetailPrice of the product passed as a body parameter
     * @apiParam {Number} maximumRetailPrice.amount Amount of the Product in passed as a body parameter
     * @apiParam {String} maximumRetailPrice.currency currency of the product passed as a body parameter
     * @apiParam {Boolean} inStock Product is in stock, passed as a body parameter
     * @apiParam {Number} quantity quantity of the product passed as a body parameter
     * @apiParam {String[]} [productFamily] Product Family of the product passed as a body parameter
     * @apiParam {Boolean} [codAvailable] COD available of the product passed as a body parameter
	 * @apiParam {String} categoryPath of the product passed as a body parameter
     * @apiParam {Object} [offer] of the product passed as a body parameter
     * @apiParam {Number} offer.offerPercentage Amount of the Product in passed as a body parameter
     * @apiParam {Date} offer.validTill currency of the product passed as a body parameter
     * @apiParam {Object} imageUrls Image Urls of the product passed as a body parameter
     * @apiParam {String} [imageUrls['800x800']] 800x800 size of the Product's image in passed as a body parameter
     * @apiParam {String} imageUrls['400x400'] 400x400 size of the Product's image in passed as a body parameter
     * @apiParam {String} [imageUrls['200x200']] 200x200 size of the Product's image in passed as a body parameter
     * @apiParam {String} [imageUrls.unknown] Any size of the Product's image in passed as a body parameter
     * @apiParam {String} sellersName of the product passed as a body parameter
     * @apiParam {Object[]} keySpecs Key Specifications of the product passed as a body parameter
     * @apiParam {key} keySpecs.key Key of any Speccification of the Product in passed as a body parameter
     * @apiParam {values[]} keySpecs.values Values of that Specification of the Product passed as a body parameter
     * @apiParam {Object[]} [detailedSpecs] Detailed Specifications of the product passed as a body parameter
     * @apiParam {key} detailedSpecs.key Key of any Speccification of the Product in passed as a body parameter
     * @apiParam {values[]} detailedSpecs.values Values of that Specification of the Product passed as a body parameter
     * @apiParam {Object[]} [specificationList] Specifications List of the product passed as a body parameter
     * @apiParam {key} specificationList.key Key of any Speccification of the Product in passed as a body parameter
     * @apiParam {values[]} specificationList.values Values of that Specification of the Product passed as a body parameter
     *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Added Successfully",
            "status": 200,
            "data": {
                "productBaseInfoV1": {
                    "imageUrls": {
                        "400x400": "Url/"
                    },
                    "maximumRetailPrice": {
                        "amount": 70000,
                        "currency": "INR"
                    },
                    "sellingPrice": {
                        "amount": 66500,
                        "currency": "INR"
                    },
                    "specialPrice": {
                        "amount": 0,
                        "currency": "INR"
                    },
                    "offer": {
                        "offerPerccentage": 0,
                        "validTill": null
                    },
                    "title": "Dell Latitude EXXXX",
                    "productDescription": "Versatile Business Laptop",
                    "productUrl": "/api/v1/product/SkMDmg0G7",
                    "inStock": true,
                    "discountPercentage": 5,
                    "categoryPath": [
                        "Electronics",
                        "Laptops"
                    ],
                    "quantity": 20,
                    "productId": "SkMDmg0G7"
                },
                "productShippingInfoV1": {
                    "shippingCharges": {
                        "amount": 0,
                        "currency": "INR"
                    },
                    "sellerName": "",
                    "sellerAverageRating": 0,
                    "sellerNoOfRatings": 0,
                    "sellerNoOfReviews": 0
                },
                "categorySpecificInfoV1": {
                    "specificationList": [],
                    "detailedSpecs": [],
                    "keySpecs": [
                        {
                            "key": "Screen Size",
                            "values": [
                                "15.6inches"
                            ],
                            "_id": "5b40735a1683b42fa411842d"
                        },
                        {
                            "key": "Storage",
                            "values": [
                                {
                                    "key": "SSD",
                                    "values": [
                                        "256Gb"
                                    ]
                                },
                                {
                                    "key": "HDD",
                                    "values": [
                                        "2TB"
                                    ]
                                }
                            ],
                            "_id": "5b40735a1683b42fa411842c"
                        }
                    ]
                },
                "_id": "5b40735a1683b42fa411842b",
                "__v": 0
            }
        
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	}
	 */
    app.post(baseUrl+'/product/remove/:productId',auth.isAuthenticated,listingsController.removeListings);
       /**
	 * @api {post} /api/v1/product/remove/:productId Delete Product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header).For testing use test.
	 * @apiParam {String} productId productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Deleted Successfully",
            "status": 200,
            "data": {
                "n": 1,
                "ok": 1
            }
        
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	}
	 */
    app.get(baseUrl+'/product/:productId',auth.isAuthenticated,listingsController.viewListings);
    /**
	 * @api {get} /api/v1/product/:productId Get a single Product
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header).For testing use test.
	 * @apiParam {String} productId The productId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Found Successfully.",
            "status": 200,
            "data": {
                "productBaseInfoV1": {
                    "imageUrls": {
                        "400x400": "Url/"
                    },
                    "maximumRetailPrice": {
                        "amount": 70000,
                        "currency": "INR"
                    },
                    "sellingPrice": {
                        "amount": 66500,
                        "currency": "INR"
                    },
                    "specialPrice": {
                        "amount": 0,
                        "currency": "INR"
                    },
                    "offer": {
                        "offerPerccentage": 0,
                        "validTill": null
                    },
                    "title": "Dell Latitude EXXXX",
                    "productDescription": "Versatile Business Laptop",
                    "productUrl": "/api/v1/product/SkMDmg0G7",
                    "inStock": true,
                    "discountPercentage": 5,
                    "categoryPath": [
                        "Electronics",
                        "Laptops"
                    ],
                    "quantity": 20,
                    "productId": "SkMDmg0G7"
                },
                "productShippingInfoV1": {
                    "shippingCharges": {
                        "amount": 0,
                        "currency": "INR"
                    },
                    "sellerName": "",
                    "sellerAverageRating": 0,
                    "sellerNoOfRatings": 0,
                    "sellerNoOfReviews": 0
                },
                "categorySpecificInfoV1": {
                    "specificationList": [],
                    "detailedSpecs": [],
                    "keySpecs": [
                        {
                            "key": "Screen Size",
                            "values": [
                                "15.6inches"
                            ],
                            "_id": "5b40735a1683b42fa411842d"
                        },
                        {
                            "key": "Storage",
                            "values": [
                                {
                                    "key": "SSD",
                                    "values": [
                                        "256Gb"
                                    ]
                                },
                                {
                                    "key": "HDD",
                                    "values": [
                                        "2TB"
                                    ]
                                }
                            ],
                            "_id": "5b40735a1683b42fa411842c"
                        }
                    ]
                }
            }
    
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	}
	 */
    app.post(baseUrl+'/product/edit/:productId',auth.isAuthenticated,listingsController.editListings);
    /**
	 * @api {put} /api/v1/product/edit/:productId Edit Product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header).For testing use test.
	 * @apiParam {String} productId productId of the blog passed as the URL parameter
	 * @apiParam {Object} [productBaseInfoV1] Contains Base Information of the product passed as the body parameter
	 * @apiParam {Number} productBaseInfoV1.quantity Updates Quantity of the product passed as the body parameter
     * @apiParam {Object} [productShippingInfoV1] Contains Sellers Information of the product passed as the body parameter
	 * @apiParam {Number} productShippingInfoV1.sellersName Updates Name of the product's seller passed as the body parameter
     * @apiParam {Object} [categorySpecificInfoV1] Updates category of different Specifications of the product passed as the body parameter
	 * @apiParam {Number} categorySpecificInfoV1.keySpecs Updates key Specifications of the product passed as the body parameter
     *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Added Successfully",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	}
	 */
    app.get(baseUrl+'/listings/:category/:subCategory',auth.isAuthenticated,listingsController.categoryListings);
     /**
	 * @api {get} /api/v1/listings/:category/:subCategory Get blogs by category and subCategory
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header).For testing use test.
	 * @apiParam {String} category category of the blog passed as the URL parameter
	 * @apiParam {String} subCategory subCategory of the blog passed as the URL parameter
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "All Products in this Category found",
            "status": 200,
            "data": [
                {
                    "productBaseInfoV1": {
                        "imageUrls": {
                            "400x400": "Url/"
                        },
                        "maximumRetailPrice": {
                            "amount": 70000,
                            "currency": "INR"
                        },
                        "sellingPrice": {
                            "amount": 66500,
                            "currency": "INR"
                        },
                        "specialPrice": {
                            "amount": 0,
                            "currency": "INR"
                        },
                        "offer": {
                            "offerPerccentage": 0,
                            "validTill": null
                        },
                        "title": "Dell Latitude EXXXX",
                        "productDescription": "Versatile Business Laptop",
                        "productUrl": "/api/v1/product/r1vSGx0M7",
                        "inStock": true,
                        "discountPercentage": 5,
                        "categoryPath": [
                            "Electronics",
                            "Laptops"
                        ],
                        "quantity": 20,
                        "productId": "r1vSGx0M7"
                    },
                    "productShippingInfoV1": {
                        "shippingCharges": {
                            "amount": 0,
                            "currency": "INR"
                        },
                        "sellerName": "",
                        "sellerAverageRating": 0,
                        "sellerNoOfRatings": 0,
                        "sellerNoOfReviews": 0
                    },
                    "categorySpecificInfoV1": {
                        "specificationList": [],
                        "keySpecs": [],
                        "detailedSpecs": []
                    }
                },
                {
                    "productBaseInfoV1": {
                        "imageUrls": {
                            "400x400": "Url/"
                        },
                        "maximumRetailPrice": {
                            "amount": 70000,
                            "currency": "INR"
                        },
                        "sellingPrice": {
                            "amount": 66500,
                            "currency": "INR"
                        },
                        "specialPrice": {
                            "amount": 0,
                            "currency": "INR"
                        },
                        "offer": {
                            "offerPerccentage": 0,
                            "validTill": null
                        },
                        "title": "Dell Latitude EXXXX",
                        "productDescription": "Versatile Business Laptop",
                        "productUrl": "/api/v1/product/SkMDmg0G7",
                        "inStock": true,
                        "discountPercentage": 5,
                        "categoryPath": [
                            "Electronics",
                            "Laptops"
                        ],
                        "quantity": 10,
                        "productId": "SkMDmg0G7",
                        "codAvailable": true
                    },
                    "productShippingInfoV1": {
                        "shippingCharges": {
                            "amount": 0,
                            "currency": "INR"
                        },
                        "sellerName": "",
                        "sellerAverageRating": 0,
                        "sellerNoOfRatings": 0,
                        "sellerNoOfReviews": 0
                    },
                    "categorySpecificInfoV1": {
                        "specificationList": [],
                        "detailedSpecs": [],
                        "keySpecs": [
                            {
                                "key": "Screen Size",
                                "values": [
                                    "15.6inches"
                                ],
                                "_id": "5b40735a1683b42fa411842d"
                            },
                            {
                                "key": "Storage",
                                "values": [
                                    {
                                        "key": "SSD",
                                        "values": [
                                            "256Gb"
                                        ]
                                    },
                                    {
                                        "key": "HDD",
                                        "values": [
                                            "2TB"
                                        ]
                                    }
                                ],
                                "_id": "5b40735a1683b42fa411842c"
                            }
                        ]
                    }
                }
            ]
        
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	}
	 */
    app.post(baseUrl+'/cart/create',auth.isAuthenticated,cartController.createCart);
    /**
	 * @api {post} /api/v1/cart/create Create Cart
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header).For testing use test.
	 * @apiParam {String} email email of the user to be passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Cart Created successfully for \"abc@zzz.com\"",
            "status": 200,
            "data": {
                "email": "abc@zzz.com",
                "lastModified": null,
                "_id": "5b40801dd321d026ac8b21d3",
                "Products": [],
                "__v": 0
            }
        
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	}
	 */
    app.post(baseUrl+'/cart/add',auth.isAuthenticated,cartController.addItemToCart);
    /**
	 * @api {put} /api/v1/cart/add Add/Increase Products in Cart
	 * @apiVersion 0.0.1
	 * @apiGroup update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header). For testing use test.
	 * @apiParam {String} email email of the user to be passed as a body parameter
     * @apiParam {Object} product Product to be added to the cart and passed as a body parameter
	 * @apiParam {String} product.productId productId of the product to be passed as a body parameter
     * @apiParam {Nunber} product.quantity of the product to be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Cart Updated successfully for abc@zzz.com",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	}
	 */
    app.post(baseUrl+'/cart/view',auth.isAuthenticated,cartController.viewCart);
    /**
	 * @api {post} /api/v1/cart/view View User's Cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header). For testing use test.
     * @apiParam {String} email email of the user to be passed as a body parameter	
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Cart Updated successfully for abc@zzz.com",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	}
	 */
    app.post(baseUrl+'/cart/remove',auth.isAuthenticated,cartController.removeItemFromCart);
       /**
	 * @api {put} /api/v1/cart/remove Remove/Pull Product from Cart
	 * @apiVersion 0.0.1
	 * @apiGroup update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header). For testing use test.
     * @apiParam {String} email email of the user to be passed as a body parameter
     * @apiParam {Object} product Product to be added to the cart and passed as a body parameter
	 * @apiParam {String} product.productId productId of the product to be passed as a body parameter
     * @apiParam {Nunber} product.quantity of the product to be decreased and be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Cart Updated successfully for abc@zzz.com",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	}
	 */
    app.post(baseUrl+'/cart/quantity',auth.isAuthenticated,cartController.decreaseQuantityInCart);
        /**
	 * @api {put} /api/v1/cart/quantity Decrease Product's quantity in Cart
	 * @apiVersion 0.0.1
	 * @apiGroup update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header). For testing use test.
     * @apiParam {String} email email of the user to be passed as a body parameter
     * @apiParam {Object} product Product to be added to the cart and passed as a body parameter
	 * @apiParam {String} product.productId productId of the product to be passed as a body parameter
     * @apiParam {Nunber} product.quantity of the product to be decreased and be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Cart Updated successfully for abc@zzz.com",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	}
	 */
}