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

