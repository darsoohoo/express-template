# Express App Initialization

$ git init

$ npm init
entry point: (src/server.js)
test command: export NODE_ENV=test&& jasmine

$ mkdir src test

$ touch src/server

$ touch src/app.js


# Install Test Tools

$ npm i --save-dev jasmine@3.0.0 request@2.83.0

# Install Express App
$ npm i --save express@4.16.2



# Initialize Jasmine
$ ./node_modules/.bin/jasmine init

Open spec/suppport/jasmin.json
Change 
```
"random":true
```
to 
```
"random": false
```
This will prevent the default behavior of having our test run randomly


# Add to app.js
```
const express = require("express"); //require the express module
const app = express(); // initialize the app

module.exports = app; // export the app so we can pass it to our Node server in src/server.js

```


# Add to server.js
```
const app = require("./app");
const http = require("http");
const server = http.createServer(app);

server.listen(3000);

server.on("listening", () => {
    console.log("server is listening for requests on port 3000")
});
```

# Add the command script in package.json
```
"start": "node src/server.js"
```

# Create a spec/integration directory for TDD to define a route
```
const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

//#1
  describe("GET /", () => {

//#2
    it("should return status code 200", (done) => {

//#3
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);

//#4
        done();
      });
    });

  });
});
```

# define the first route
 ```
 const app = express();

 app.use("/", (req, res, next) => {
   res.send("Welcome to Bloccit")
 });
 ```

# move route definition to static.js
```
$ mkdir src/routes
$ touch src/routes/static.js
```


# src/routes/static.js
```
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Welcome to Bloccit");
});

module.exports = router;
```

# src/config/route-config.js
```
$ mkdir src/config
$ touch src/config/route-config.js
```



