# JWT TOKEN USING EXPRESS

A small sample demo using NPM packages and express server to handle authentication using JWT token and accessing role from maxAge cookie token.


# Steps to install

## Packages

* Node.JS
* NPM

## Running app
```
Clone a repository.
npm install
npm start
```


## API

#### Generate a token

```
POST http://localhost:3007/auth/login
Content-Type: text/json
{
	"email": "test@email.com",
	"password": "abc"
}
```
Response will be on Set-Cookie header. Just copy and paste into header of /api/users.

#### Accessing using token
```
GET http://localhost:3007/api/users
Cookie: access_token=<your-token>; Max-Age=3; Path=/; Expires=Thu, 22 Nov 2029 10:08:11 GMT; HttpOnly
```
Response will return with JSON with status code 200 OK.
On unauthorized user will be 401 status code.

### NPM packages used

Not needle to install, NPM packages uses:

```
npm add express
npm add nodemon
npm add jsonwebtoken
npm add cookie-parser
npm add cors
```

### Init npm package

touch index.js
npm init -y

Then a package will crate a package repository.


### Usage

Free to use without license for learning purpouse.
