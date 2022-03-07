# VouchDigitalTask
## About The Project

#### Frameworks, tools and libraries used 

- Node Js - runtime environment
- Express - backend library
- Mongodb- dbms
- Mongoose- ORM library for mongodb 
- Nodemon- dev dependency for auto run incase of changes
- JsonWebToken- for authentication and authorization on the api routes 
- Dotenv- putting all your environmental variables in a .env file
- Chai and mocha - program testing.

### Getting started 
#### To get a local copy up and running follow these simple example steps
#### Installation

- Clone the repo
- npm install
- Your config file are alright, given that they have default values. The only setback is that you have to create a mongo db collection
- There will not be a problem If you have mongo db atlas installed. A collection would be created automatically by default. You can create a collection online via the mongodb -  atlas [Web site](https://cloud.mongodb.com/) if you don't have it installed.

### Map 
###### This would entail every file/folder and it's uses 
- Index.js - the main js page. It imports everything's then runs the app. 
- Config- both config and db js inside the config are for configurations and secret variables like the port, mongoose connection, token functionalities.
- Requests.res - for testing the apis(install restcient extension on your vscode to make use of it )
- Middleware - containing the token passing, verifies if the user is an admin so as to give him the authorization to make api calls
- Module- contains the 2 folders to be used for the application (user, class). each contain the model and service file
- Module/../service.js- holds all the api functionalities.  
- Module/../model.js- The mongoose database schema for the model
- Routes/api- this is where all the api endpoints are

### API routes
#### There were 5 middlewares used for authorization in the routes with json web token being used. There were:-
- requiresInstructor- for instructor routes only
- requiresAuth- for users only
- requiresCurrentUser- for only the user that is authenticated
- requireGuest- for non authenticated users only.
- requireClassInstructor- for the admin/instructor of that particular class

### API routes
#### http://localhost:400/api/contact/add - post call to add user 
##### This will not be authorised as you have to add the admin user to the database first. Req.body should be like 
```javascript
{
  first_name, last_name, email, phone, country,
  isAdmin (default to false, change to true if it is admin), job_title, company_name, birthday_day, birthday_month
}
There were applied below-
User routes- 
post /api/user/add- for adding user(gO) 
post /api/user/add/admin- for adding admin
post /api/user/login- for login(gO)
get /api/user/logout- for logout(rAu)
get /api/user/:id - get user by id as request params (rC)
get /api/user/all/users- get users. it returns everything by default but you can set the query with condition e.g /?name=victorogbonna.(rA)
put /api/user/:id- update user info (rC)
delete /api/user/:id- delete user (rC)

Product route
post /api/product/add- for adding product (rA)
get /api/product/:id - get product by id as request params
get /api/product/all/products- get products. it returns everything by default but you can set the query with condition e.g /?color=red.

Order route
post /api/order/add- for adding order (rC) 
get /api/order/:id - get order by id as request params (rC)
get /api/order/all/orders- get orders (rAu)
get /api/user/all/orders/user/:id- get orders by user id as request params.(rC)
get /api/user/all/orders/product/:id- get orders by product id as request params.(rAu)
### Contact 
- Email- victorgbonna@gmail.com
- Whatsapp - +234 8102603301
- Linkedln - [https://www.linkedin.com/in/victor-ogbonna-5a3113230](https://www.linkedin.com/in/victor-ogbonna-5a3113230)
-  Project Link: https://github.com/victorgbonna/VouchDigitalTask
