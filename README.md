# Node REST Server

Have a question? Ask on Gitter:

 [![Gitter](https://badges.gitter.im/Luidog/Node-Express-API-Server.svg)](https://gitter.im/Luidog/Node-Express-API-Server?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is an example Node REST server. It is my intention that this helps others explore and learn.
We use:
  -  Express.JS for routing
  - Mongoose to interact with our MongoDB instance
  - Winston for logging
  - Bluebird for creating promises
  - Lodash and body-parser minimally for interacting with our endpoint
  - PMX to monitor our server

### Installation

You need Node.js and MongoDB installed:

* [node.js] - evented I/O for the backend
* [MongoDB] - an amazing NoSQL database

```sh
$ git clone [git-repo-url] node-rest-server
$ cd node-rest-server
$ npm install
$ node hero-server
```
Optionally also install the development packages
```sh
$ npm install -dev
$ gulp
```
Make a change in your file and instantanously see your updates!

### Development

Want to contribute? Great!
