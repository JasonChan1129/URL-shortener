# URL shortener

A URL shortener built with Node.js and Express

![demo](/public/image/demo.gif)

## Prerequisites

-  Node.js
-  Register an account for [MongoDB Altas](https://www.mongodb.com/atlas/database)

## Installation and execution

1. Clone this project with your terminal

```
git clone https://github.com/JasonChan1129/URL-shortener.git
```

2. Install all the required dependencies

```
npm install
```

3. Install nodemon if you don't already have

```
npm i nodemon
```

4. Create a .env file for storing environment variables

5. Copy the connection string from [MongoDB Altas](https://www.mongodb.com/atlas/database) and place it in .env file

```
MONGODB_URI=<your connection string>
```

6. Start the server

```
npm run dev
```

7. Server runs successfully if the following message is printed.

```
Server is listening on localhost:3000
db connected!
```

## Features

-  generate a specific shortened URL for any valid URL
-  use the shortened URL to visit the inputted URL
-  copy the shortened URL to clipboard for further usage

## Development tools

-  bootstrap @ 5.1
-  dotenv @ 16.0.0
-  express @ 4.17.3
-  express-handlebars @ 4.0.2
-  mongoose @ 6.3.0
-  node.js @ 16.14.2
