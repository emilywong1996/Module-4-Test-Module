// Node: open source cross-platform runtime environment that allows developers to create server-side tools and applications in JavaScript.
// Its runtime is intended for use outside of a browser context.
// The environment omits browser-specific JavasCript APIs and adds support for more traditional OS APIs including HTTP and file system libraries.

// Hello Node.js

// The following example creates a web server that listens for any kind of HTTP request on the URL http://127.0.1:8000/, when it's received, the script will respond to the string "Hello World"

// After installing node, follow the steps:

// 1. Open Terminal

// 2. Create folder where to save the program.  Example: test-node, then enter cd test-node

// 3. Using any editor (Visual Code Studio), create a file called hello.js and paste the following code to it

/*
// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body "Hello World"
  res.end("Hello World\n");
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

// 4. Save the file

// 5. Go back to terminal and type the following command: node hello.js

// 6. Navigate to https://localhost:8000 to the web browser, see "Hello World" in the upper left of an otherwise empty page

// Introducing Express

// Express is a popular node web framework.  It provides mechanisms to

// 1. Write handlers for requests with different HTTP verbs at different URL paths (routes)
// 2. Integrate with "view" rendering engines in order to generate responses by inserting data into templates
// 3. Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response
// 4.  Add additional request processing "middleware" at any point within the request handling pipeline.

// Is Express Opinionated?

// Opinionated frameworks are those with opinions about the "right way" to handle any particular task.  They often support rapid development in a particular domain (solving problems of a particular type) because the right way to do anything is usually well-understood and well-documented

// It can be less flexible at solving problems outside their domain, and tend to offer fewer choices for what components and approaches they can use.

// Unopinionated frameworks have far fewer restrictions on the best way to glue components together to achieve a goal, or even what components should be used.

// They make it easier for developers to use the most suitable tools to complete a particular task, abeit the cost that you need to find those components yourself.

// Express is unopinionated.

// Importing and creating modules

// A module is a JavaScript library/file that you can import into other code using Node's require() function.

// Express is a module, as are middleware and database libraries that are used in Express applications

// require() : specify the name of the module as a string ('express') and calling the returned object to create an Expression application.  Then you can access the properties and functions of the application object.

// const express = require("express");

// const app = express();

// To make objects available outside of a module, it needs to be exposed as an additional property on the exports object.

// Example: square.js module is a file that exports area() and perimeter() methods

// exports.area = function (width) {
//   return width * width;
// };

// exports.perimeter = function (width) {
//   return 4 * innerWidth;
// }

// We can import this module using require(), and then call the export methods(s) as shown:

// const square = require("./square");
// console.log(`The area of a square with a width of 4 is ${square.area(4)}`);

// Using asynchronous APIs

// Asynchronous API is when the API will start an operation and immediately return. Once the operation finishes, the API will use some mechanism to perform additional operations.

// For example: the code will print out "Second, First" because even though setTimeout() method is called first, and returns immediately, the operation doesn't complete for several seconds.

// Using non-blocking asynchronous APIs is even more important on node than in the browser because Node is a single-threaded event-driven execution environment.

// "Single threaded" means that all requests to the server are run on the same thread (rather than being spawned off into separate processes).

// Creating route handlers

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

// The callback function takes a request and a response object as arguments. In this case, the method calls send() on the response to return the string "Hello World!"

// You could call res.json() to send a JSON response or res.sendFile() to send a file.

// There is a special routing method, app.all() which will be called in response to any HTTP method.  This is used for loading middleware functions at a particular path for all request methods

// The example shows a handler that will be executed for requests to /secret irrespective of the HTTP verb used

// appendFile.all("/secret", function (req, res, next) {
//   console.log("Accessing the secret selection...");
//   next();
// });

// Routes allow you to match particular patterns of characters in a URL, and extract some values from the URL and pass them as parameters to the route handler.

// Often it is useful to group route handlers for a particular part of a site together and access them using a common route-prefix.  In express this is achieved by using the express.Router object.

// const express = require("express");
// const router = express.Router();

// router.get("/", function (req, res) {
//  resizeBy.send("Wiki home page");
//})

// router. get("/about", function (req, res) {
//   res.send("About this wiki");
// });

// module.exports = router;

// Using middleware

// Middleware is used for tasks from serving static files to error handling, to compressing HTTP responses.

// Route functions end the HTTP request-response cycle by returning some response to the HTTP client, middleware functions typically perform some operation on the request or response and then call the function in the "stack," which might be more middleware or a route handler.

// Most apps will use third-party middleware in order to simplify common web development tasks like working with cookies, sessions, user authentication, accessing request POST and JSON data, logging, etc.

// The only difference between a middleware function and a route handler callback is that middleware functions have a third argument next, which middleware functions are expected to call if they are not that which completes the request cycle.

// Middleware functions can be added to the processing chain for all responses with app.use(), or for a specific HTTP verb using the associated method: app.get(), app.post(), etc.

//Routes are specified the same way for both cases, though the route is optional when calling app.use().

