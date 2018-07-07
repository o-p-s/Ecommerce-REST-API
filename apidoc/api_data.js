define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/cart/create",
    "title": "Create Cart",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header).For testing use test.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user to be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Cart Created successfully for \\\"abc@zzz.com\\\"\",\n            \"status\": 200,\n            \"data\": {\n                \"email\": \"abc@zzz.com\",\n                \"lastModified\": null,\n                \"_id\": \"5b40801dd321d026ac8b21d3\",\n                \"Products\": [],\n                \"__v\": 0\n            }\n        \n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "create",
    "name": "PostApiV1CartCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/product/add",
    "title": "Create Product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header).For testing use test.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productDescription",
            "description": "<p>description of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "maximumRetailPrice",
            "description": "<p>maximumRetailPrice of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maximumRetailPrice.amount",
            "description": "<p>Amount of the Product in passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maximumRetailPrice.currency",
            "description": "<p>currency of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inStock",
            "description": "<p>Product is in stock, passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "productFamily",
            "description": "<p>Product Family of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "codAvailable",
            "description": "<p>COD available of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryPath",
            "description": "<p>of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "offer",
            "description": "<p>of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offer.offerPercentage",
            "description": "<p>Amount of the Product in passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "offer.validTill",
            "description": "<p>currency of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "imageUrls",
            "description": "<p>Image Urls of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imageUrls.unknown",
            "description": "<p>Any size of the Product's image in passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sellersName",
            "description": "<p>of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "keySpecs",
            "description": "<p>Key Specifications of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "key",
            "optional": false,
            "field": "keySpecs.key",
            "description": "<p>Key of any Speccification of the Product in passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "values[]",
            "optional": false,
            "field": "keySpecs.values",
            "description": "<p>Values of that Specification of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "detailedSpecs",
            "description": "<p>Detailed Specifications of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "key",
            "optional": false,
            "field": "detailedSpecs.key",
            "description": "<p>Key of any Speccification of the Product in passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "values[]",
            "optional": false,
            "field": "detailedSpecs.values",
            "description": "<p>Values of that Specification of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "specificationList",
            "description": "<p>Specifications List of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "key",
            "optional": false,
            "field": "specificationList.key",
            "description": "<p>Key of any Speccification of the Product in passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "values[]",
            "optional": false,
            "field": "specificationList.values",
            "description": "<p>Values of that Specification of the Product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Product Added Successfully\",\n            \"status\": 200,\n            \"data\": {\n                \"productBaseInfoV1\": {\n                    \"imageUrls\": {\n                        \"400x400\": \"Url/\"\n                    },\n                    \"maximumRetailPrice\": {\n                        \"amount\": 70000,\n                        \"currency\": \"INR\"\n                    },\n                    \"sellingPrice\": {\n                        \"amount\": 66500,\n                        \"currency\": \"INR\"\n                    },\n                    \"specialPrice\": {\n                        \"amount\": 0,\n                        \"currency\": \"INR\"\n                    },\n                    \"offer\": {\n                        \"offerPerccentage\": 0,\n                        \"validTill\": null\n                    },\n                    \"title\": \"Dell Latitude EXXXX\",\n                    \"productDescription\": \"Versatile Business Laptop\",\n                    \"productUrl\": \"/api/v1/product/SkMDmg0G7\",\n                    \"inStock\": true,\n                    \"discountPercentage\": 5,\n                    \"categoryPath\": [\n                        \"Electronics\",\n                        \"Laptops\"\n                    ],\n                    \"quantity\": 20,\n                    \"productId\": \"SkMDmg0G7\"\n                },\n                \"productShippingInfoV1\": {\n                    \"shippingCharges\": {\n                        \"amount\": 0,\n                        \"currency\": \"INR\"\n                    },\n                    \"sellerName\": \"\",\n                    \"sellerAverageRating\": 0,\n                    \"sellerNoOfRatings\": 0,\n                    \"sellerNoOfReviews\": 0\n                },\n                \"categorySpecificInfoV1\": {\n                    \"specificationList\": [],\n                    \"detailedSpecs\": [],\n                    \"keySpecs\": [\n                        {\n                            \"key\": \"Screen Size\",\n                            \"values\": [\n                                \"15.6inches\"\n                            ],\n                            \"_id\": \"5b40735a1683b42fa411842d\"\n                        },\n                        {\n                            \"key\": \"Storage\",\n                            \"values\": [\n                                {\n                                    \"key\": \"SSD\",\n                                    \"values\": [\n                                        \"256Gb\"\n                                    ]\n                                },\n                                {\n                                    \"key\": \"HDD\",\n                                    \"values\": [\n                                        \"2TB\"\n                                    ]\n                                }\n                            ],\n                            \"_id\": \"5b40735a1683b42fa411842c\"\n                        }\n                    ]\n                },\n                \"_id\": \"5b40735a1683b42fa411842b\",\n                \"__v\": 0\n            }\n        \n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductAdd"
  },
  {
    "type": "post",
    "url": "/api/v1/product/remove/:productId",
    "title": "Delete Product by productId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header).For testing use test.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Product Deleted Successfully\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"ok\": 1\n            }\n        \n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductRemoveProductid"
  },
  {
    "type": "put",
    "url": "/api/v1/product/edit/:productId",
    "title": "Edit Product by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header).For testing use test.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the blog passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "productBaseInfoV1",
            "description": "<p>Contains Base Information of the product passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productBaseInfoV1.quantity",
            "description": "<p>Updates Quantity of the product passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "productShippingInfoV1",
            "description": "<p>Contains Sellers Information of the product passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productShippingInfoV1.sellersName",
            "description": "<p>Updates Name of the product's seller passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "categorySpecificInfoV1",
            "description": "<p>Updates category of different Specifications of the product passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categorySpecificInfoV1.keySpecs",
            "description": "<p>Updates key Specifications of the product passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Product Added Successfully\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"nModified\": 1,\n                \"ok\": 1\n            }\n        \n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "edit",
    "name": "PutApiV1ProductEditProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/listings/:category/:subCategory",
    "title": "Get blogs by category and subCategory",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header).For testing use test.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the blog passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subCategory",
            "description": "<p>subCategory of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"All Products in this Category found\",\n            \"status\": 200,\n            \"data\": [\n                {\n                    \"productBaseInfoV1\": {\n                        \"imageUrls\": {\n                            \"400x400\": \"Url/\"\n                        },\n                        \"maximumRetailPrice\": {\n                            \"amount\": 70000,\n                            \"currency\": \"INR\"\n                        },\n                        \"sellingPrice\": {\n                            \"amount\": 66500,\n                            \"currency\": \"INR\"\n                        },\n                        \"specialPrice\": {\n                            \"amount\": 0,\n                            \"currency\": \"INR\"\n                        },\n                        \"offer\": {\n                            \"offerPerccentage\": 0,\n                            \"validTill\": null\n                        },\n                        \"title\": \"Dell Latitude EXXXX\",\n                        \"productDescription\": \"Versatile Business Laptop\",\n                        \"productUrl\": \"/api/v1/product/r1vSGx0M7\",\n                        \"inStock\": true,\n                        \"discountPercentage\": 5,\n                        \"categoryPath\": [\n                            \"Electronics\",\n                            \"Laptops\"\n                        ],\n                        \"quantity\": 20,\n                        \"productId\": \"r1vSGx0M7\"\n                    },\n                    \"productShippingInfoV1\": {\n                        \"shippingCharges\": {\n                            \"amount\": 0,\n                            \"currency\": \"INR\"\n                        },\n                        \"sellerName\": \"\",\n                        \"sellerAverageRating\": 0,\n                        \"sellerNoOfRatings\": 0,\n                        \"sellerNoOfReviews\": 0\n                    },\n                    \"categorySpecificInfoV1\": {\n                        \"specificationList\": [],\n                        \"keySpecs\": [],\n                        \"detailedSpecs\": []\n                    }\n                },\n                {\n                    \"productBaseInfoV1\": {\n                        \"imageUrls\": {\n                            \"400x400\": \"Url/\"\n                        },\n                        \"maximumRetailPrice\": {\n                            \"amount\": 70000,\n                            \"currency\": \"INR\"\n                        },\n                        \"sellingPrice\": {\n                            \"amount\": 66500,\n                            \"currency\": \"INR\"\n                        },\n                        \"specialPrice\": {\n                            \"amount\": 0,\n                            \"currency\": \"INR\"\n                        },\n                        \"offer\": {\n                            \"offerPerccentage\": 0,\n                            \"validTill\": null\n                        },\n                        \"title\": \"Dell Latitude EXXXX\",\n                        \"productDescription\": \"Versatile Business Laptop\",\n                        \"productUrl\": \"/api/v1/product/SkMDmg0G7\",\n                        \"inStock\": true,\n                        \"discountPercentage\": 5,\n                        \"categoryPath\": [\n                            \"Electronics\",\n                            \"Laptops\"\n                        ],\n                        \"quantity\": 10,\n                        \"productId\": \"SkMDmg0G7\",\n                        \"codAvailable\": true\n                    },\n                    \"productShippingInfoV1\": {\n                        \"shippingCharges\": {\n                            \"amount\": 0,\n                            \"currency\": \"INR\"\n                        },\n                        \"sellerName\": \"\",\n                        \"sellerAverageRating\": 0,\n                        \"sellerNoOfRatings\": 0,\n                        \"sellerNoOfReviews\": 0\n                    },\n                    \"categorySpecificInfoV1\": {\n                        \"specificationList\": [],\n                        \"detailedSpecs\": [],\n                        \"keySpecs\": [\n                            {\n                                \"key\": \"Screen Size\",\n                                \"values\": [\n                                    \"15.6inches\"\n                                ],\n                                \"_id\": \"5b40735a1683b42fa411842d\"\n                            },\n                            {\n                                \"key\": \"Storage\",\n                                \"values\": [\n                                    {\n                                        \"key\": \"SSD\",\n                                        \"values\": [\n                                            \"256Gb\"\n                                        ]\n                                    },\n                                    {\n                                        \"key\": \"HDD\",\n                                        \"values\": [\n                                            \"2TB\"\n                                        ]\n                                    }\n                                ],\n                                \"_id\": \"5b40735a1683b42fa411842c\"\n                            }\n                        ]\n                    }\n                }\n            ]\n        \n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "read",
    "name": "GetApiV1ListingsCategorySubcategory"
  },
  {
    "type": "get",
    "url": "/api/v1/product/:productId",
    "title": "Get a single Product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header).For testing use test.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Product Found Successfully.\",\n            \"status\": 200,\n            \"data\": {\n                \"productBaseInfoV1\": {\n                    \"imageUrls\": {\n                        \"400x400\": \"Url/\"\n                    },\n                    \"maximumRetailPrice\": {\n                        \"amount\": 70000,\n                        \"currency\": \"INR\"\n                    },\n                    \"sellingPrice\": {\n                        \"amount\": 66500,\n                        \"currency\": \"INR\"\n                    },\n                    \"specialPrice\": {\n                        \"amount\": 0,\n                        \"currency\": \"INR\"\n                    },\n                    \"offer\": {\n                        \"offerPerccentage\": 0,\n                        \"validTill\": null\n                    },\n                    \"title\": \"Dell Latitude EXXXX\",\n                    \"productDescription\": \"Versatile Business Laptop\",\n                    \"productUrl\": \"/api/v1/product/SkMDmg0G7\",\n                    \"inStock\": true,\n                    \"discountPercentage\": 5,\n                    \"categoryPath\": [\n                        \"Electronics\",\n                        \"Laptops\"\n                    ],\n                    \"quantity\": 20,\n                    \"productId\": \"SkMDmg0G7\"\n                },\n                \"productShippingInfoV1\": {\n                    \"shippingCharges\": {\n                        \"amount\": 0,\n                        \"currency\": \"INR\"\n                    },\n                    \"sellerName\": \"\",\n                    \"sellerAverageRating\": 0,\n                    \"sellerNoOfRatings\": 0,\n                    \"sellerNoOfReviews\": 0\n                },\n                \"categorySpecificInfoV1\": {\n                    \"specificationList\": [],\n                    \"detailedSpecs\": [],\n                    \"keySpecs\": [\n                        {\n                            \"key\": \"Screen Size\",\n                            \"values\": [\n                                \"15.6inches\"\n                            ],\n                            \"_id\": \"5b40735a1683b42fa411842d\"\n                        },\n                        {\n                            \"key\": \"Storage\",\n                            \"values\": [\n                                {\n                                    \"key\": \"SSD\",\n                                    \"values\": [\n                                        \"256Gb\"\n                                    ]\n                                },\n                                {\n                                    \"key\": \"HDD\",\n                                    \"values\": [\n                                        \"2TB\"\n                                    ]\n                                }\n                            ],\n                            \"_id\": \"5b40735a1683b42fa411842c\"\n                        }\n                    ]\n                }\n            }\n    \n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductProductid"
  },
  {
    "type": "post",
    "url": "/api/v1/cart/view",
    "title": "View User's Cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header). For testing use test.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user to be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Cart Updated successfully for abc@zzz.com\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"nModified\": 1,\n                \"ok\": 1\n            }\n        \n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "read",
    "name": "PostApiV1CartView"
  },
  {
    "type": "put",
    "url": "/api/v1/cart/add",
    "title": "Add/Increase Products in Cart",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header). For testing use test.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user to be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "product",
            "description": "<p>Product to be added to the cart and passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product.productId",
            "description": "<p>productId of the product to be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Nunber",
            "optional": false,
            "field": "product.quantity",
            "description": "<p>of the product to be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Cart Updated successfully for abc@zzz.com\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"nModified\": 1,\n                \"ok\": 1\n            }\n        \n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "update",
    "name": "PutApiV1CartAdd"
  },
  {
    "type": "put",
    "url": "/api/v1/cart/quantity",
    "title": "Decrease Product's quantity in Cart",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header). For testing use test.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user to be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "product",
            "description": "<p>Product to be added to the cart and passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product.productId",
            "description": "<p>productId of the product to be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Nunber",
            "optional": false,
            "field": "product.quantity",
            "description": "<p>of the product to be decreased and be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Cart Updated successfully for abc@zzz.com\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"nModified\": 1,\n                \"ok\": 1\n            }\n        \n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "update",
    "name": "PutApiV1CartQuantity"
  },
  {
    "type": "put",
    "url": "/api/v1/cart/remove",
    "title": "Remove/Pull Product from Cart",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header). For testing use test.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user to be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "product",
            "description": "<p>Product to be added to the cart and passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product.productId",
            "description": "<p>productId of the product to be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Nunber",
            "optional": false,
            "field": "product.quantity",
            "description": "<p>of the product to be decreased and be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Cart Updated successfully for abc@zzz.com\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"nModified\": 1,\n                \"ok\": 1\n            }\n        \n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "update",
    "name": "PutApiV1CartRemove"
  }
] });
