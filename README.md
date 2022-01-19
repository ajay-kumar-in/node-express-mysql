# node-express-mysql

<<<<<<< HEAD
=======
# node-express-mysql

>>>>>>> 8d614975d60bed8581070fc3911599ab30a3f510
# Apis List-

## Create User
### POST - http://localhost:3000/api/signup
{
    "firstName": "first name",
    "lastName": "last name",
    "mobile": 3524354635,
    "email": "email@email.com",
    "password": "password",
    "address": "your address"
}


## Login user
### POST - http://localhost:3000/api/login
{
    "email": "email@email.com",
    "password": "pass"
}


## Add product
### POST - http://localhost:3000/api/product  (form data)
{
    "name": "prpduct name",
    "description": "description",
    "originalPrice": 12,
    "discount": 2,
    "category":"Body Care",
    "productImage": "browse image file"
    "status": true
}


## Update product
### PUT - http://localhost:3000/api/product/<productID>  (form data)
{
    "name": "prpduct name",
    "description": "description",
    "originalPrice": 12,
    "discount": 2,
    "category":"Body Care",
    "productImage": "browse image file"
    "status": true
}

## Get products list (size=<number of items, max 100 per page>, page=<page number>)
### GET - http://localhost:3000/api/products?size=3&page=3

## Get product by id
### GET - http://localhost:3000/api/product/<productId>

## Delete product by id
### GET - http://localhost:3000/api/product/<productId>
<<<<<<< HEAD

=======
>>>>>>> 8d614975d60bed8581070fc3911599ab30a3f510
