FORMAT: 1A
HOST: http://moments.mycloud.ch/

# Moments

The API for ordering coupons and digitalization services.

## Products [/api/products]

### List All Products [GET]

+ Response 200 (application/json)

        [
          {
            "id": 1507328,
            "type": "DIG_P_ALB",
            "price": 2.0,
          },
          {
            "id": 1507329,
            "type": "DIG_P_NEG",
            "price": 0.9,
          },
          {
            "id": 1507330,
            "type": "DIG_P_SLD",
            "price": 0.9,
          },
          {
            "id": 1507331,
            "type": "DIG_P_PAP",
            "price": 0.9,
          },
          {
            "id": 1507332,
            "type": "DIG_V",
            "price": 19.0,
          },
          {
            "id": 1507333,
            "type": "DIG_F_S",
            "price": 16.0,
          },
          {
            "id": 1507334,
            "type": "DIG_F_M",
            "price": 48.0,
          },
          {
            "id": 1507335,
            "type": "DIG_F_L",
            "price": 84.0,
          }
        ]

## Coupon [/api/coupon/{code}]

### Validate coupon [GET]

+ Parameters

    + code: DISCOUNT20 (string) - An unique identifier of a coupon.

+ Response 200

## Calculate [/api/calculate]

### Check price and get total amount [POST]

+ Request (application/json)

        {
          "products": [
            {
              "id": "DIG_F_S",
              "amount": 7
            },
            {
              "id": "DIG_V",
              "amount": 1
            },
            {
              "id": "DIG_P_SLD",
              "amount": 2
            },
            {
              "id": "DIG_P_NEG",
              "amount": 1
            }
          ],
          "couponCode": "DISCOUNT20"
        }

+ Response 200 (application/json)

        {
          "products" : [ {
            "id" : "DIG_F_S",
            "amount" : 7
          }, {
            "id" : "DIG_V",
            "amount" : 1
          }, {
            "id" : "DIG_P_SLD",
            "amount" : 2
          }, {
            "id" : "DIG_P_NEG",
            "amount" : 1
          } ],
          "couponCode" : "DISCOUNT20",
          "totalPrice" : 133.7,
          "brutoPrice" : 133.7,
          "discountPrice" : 20.0
        }

## Order [/api/order/{id}]

### Place an product order [POST]

+ Request (application/json)

        {
          "id": "",
          "firstname" : "Name",
          "name" : "Webdev",
          "street" : "Lane street 42",
          "zip" : 1337,
          "city" : "Zurich",
          "mail" : "test@ngti.nl",
          "coupon" : "DISCOUNT20",
          "products": [
            {
              "id": "DIG_F_S",
              "amount": 7
            },
            {
              "id": "DIG_V",
              "amount": 1
            },
            {
              "id": "DIG_P_SLD",
              "amount": 2
            },
            {
              "id": "DIG_P_NEG",
              "amount": 1
            }
          ]
        }

+ Response 200 (application/json)

        {
          "id" : 8716294,
          "firstname" : "Name",
          "name" : "Webdev",
          "street" : "Lane street 42",
          "zip" : 1337,
          "city" : "Zurich",
          "mail" : "test@ngti.nl",
          "coupon" : "DISCOUNT20",
          "orderTotal" : 133.7,
          "products" : [ 
            {
              "id" : "DIG_F_S",
              "amount" : 7
            }, 
            {
              "id" : "DIG_V",
              "amount" : 1
            },
            {
              "id" : "DIG_P_SLD",
              "amount" : 2
            }, 
            {
              "id" : "DIG_P_NEG",
              "amount" : 1
            } 
          ]
        }

### Retrieve an order [GET]

+ Parameters

    + id: 1 (number) - An unique identifier of the message.

+ Response 200 (application/json)
    
        {
          "id" : 8716294,
          "firstname" : "Name",
          "name" : "Webdev",
          "street" : "Lane street 42",
          "zip" : 1337,
          "city" : "Zurich",
          "mail" : "test@ngti.nl",
          "coupon" : "DISCOUNT20",
          "orderTotal" : 133.7,
          "products" : [ 
            {
              "id" : "DIG_F_S",
              "amount" : 7
            }, 
            {
              "id" : "DIG_V",
              "amount" : 1
            },
            {
              "id" : "DIG_P_SLD",
              "amount" : 2
            }, 
            {
              "id" : "DIG_P_NEG",
              "amount" : 1
            } 
          ],
          "transferStatus" : null
        }


## Coupons [/api/coupons]

### List All Coupons [GET]

+ Response 200 (application/json)

        {
          "prices": [ 80, 100, 150, 200 ],
          "types": [ "BLUE", "RED", "GREEN"]
        }

## Order coupons [/api/coupons/order/{id}]

### Create an coupon order [POST]

+ Request (application/json)

        {
          "id": "",
          "firstname" : "Name",
          "name" : "Webdev",
          "mail" : "test@ngti.nl",
          "message": "Test",
          "coupon": {
              "price": "80",
              "type": "blue"
            }
        }

+ Response 200 (application/json)

        {
          "id" : 8716294,
          "firstname" : "Name",
          "name" : "Webdev",
          "mail" : "test@ngti.nl",
          "orderTotal" : 80,
          "message": "Test",
          "coupon": {
              "price": "80",
              "type": "blue"
            }
        }

### Retreive an coupon order [GET]

+ Parameters

    + id: 1 (number) - An unique identifier of the message.

+ Response 200 (application/json)

        {
          "id" : 8716294,
          "firstname" : "Name",
          "name" : "Webdev",
          "mail" : "test@ngti.nl",
          "orderTotal" : 80,
          "message": "Test",
          "coupon": {
              "price": "80",
              "type": "blue"
            }
        }
