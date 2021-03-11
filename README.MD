# THIS IS A STUDENT'S NOTE FROM LEARNING NODE.JS w/ YT'S THE NET NINJA.

## NODE JS REFRESHER

### What is NodeJS?

- It is JavaScript runtime built on Chrome's V8 JS engine. It is uses an event-driven, non-blocking model that makes it lightweight and efficient... In layman's term it allows you the developer to use JavaScript in the backend or server.

### Why use NodeJS?

- It allows you to write JavaScript in the backend.
- Very fast ( runs on V8 engine and uses non-blocking code ).
- Has huge ecosystem of open source packages ( npm ).
- Great for real-time services ( like chats ).

### The V8 engine

- Computers doesn't understand JavaScript. V8 engine can receive JS code and convert it into machine readable code.
- V8 is created by Google and is written in C++.

### At the heart of NodeJS

- Node.js is written in C++ (by Ryah Dahl).
- At the heart of Node.js is the V8 engine.
- V8 engine converts JS code into machine code.

## The Global Object

- Node.js doesn't have a window object.
- Node's global object is called Global object.

### Commonly used global objects:

- to get current file location:

```
 ___dirname
```

- to access the directory and file

```
__filename
```

- to import a MODULE into your code:

```
 require('')
```

### Modules

- Are codes split into different files or components for manageability purposes.

### Functions

- Normal function statement

```
function hello(){
    console.log('hello world')
}

hello() // hello world
```

- Function Expression ES6

```
const hey = () => {
    console.log('heya!')
}

hey() // heya!
```

- Callback functions

```
const hey = () => {
    console.log('heya!')
}

const fun = (callbackFunc) => {
    callbackFunc()
}

fun(hey) // heya!

```

### Exporting your JS module

```
const count = ( arr ) => {
    const str = `${arr.length} has been passed`
    return str
}

module.exports = count

```

### Importing your JS module into another JS file/module

```
// assuming your module is in the same folder
// NOTE: JS file extension is not required since node assumes that your file is JS file

const count = require('./count')

const arr = [ 'dog', 'cat', 'code' ]

console.log(count(arr)) //

```

### Module patterns

- Normal module export

```
const hello = () => {
    return 'hello world!'
}

const add = (n1, n2) => {
    let sum = n1 + n2
    return `the sume of ${n1} and ${n2} is ${sum}.`
}

const count = ( arr ) => {
    const str = `${arr.length} elements has been passed`
    return str
}


module.exports = hello
module.exports = add
module.exports = count

```

- implicit module import

```
module.exports.hello = () => {
    return 'hello world!'
}

module.exports.add = (n1, n2) => {
    let sum = n1 + n2
    return `the sume of ${n1} and ${n2} is ${sum}.`
}

moudule.exports.count = ( arr ) => {
    const str = `${arr.length} elements has been passed`
    return str
}


```

- module export using Object Literal Notation

```
const hello = () => {
    return 'hello world!'
}

const add = (n1, n2) => {
    let sum = n1 + n2
    return `the sume of ${n1} and ${n2} is ${sum}.`
}

const count = ( arr ) => {
    const str = `${arr.length} elements has been passed`
    return str
}


module.exports = {
    hello,
    add,
    count
}

```

#### Either methods above can be imported to another JS module with the same method

```
const stuff = require('./stuff')

console.log(stuff.hello()) // hello world
console.log(stuff.add(1, 1)) // the sume of 1 and 1 is 2.
console.log(stuff.count([1, 2, 3])) // 3 elements has been passed

```

## Node Core modules

- EventEmitter

```
const events = require('events')

const myEmitter = new events.EventEmitter()

myEmitter.on( 'anEvent', (msg) => {
    console.log(msg)
})

myEmitter.event( 'anEvent', 'the event is emitted!' )

```

- util - allows you to enherit methods or properties from other node.js objects

```
const events = require('events')
const util = require('util')

const Person = function(name){
    this.name = name
}

const james = new Person('james')
const mary = new Person('Mary')
const dean = new Person('Dean')
const people = [ james, mary, dean ]

util.inherits( Person, events.EventEmitter )

people.forEach( person => {
    person.on( 'speak', (msg)=>{
        console.log(`${person.name} said: ${msg}.`)
    })
})


james.emit( 'speak', 'hey guys?!') // james said: hey guys?!

```

### Node Core Modules: Reading and writng files

- Reading a file synchronously ( blocking code )

  Syntax:

  fs.readFileSync( 'directory + file name', 'charcter encoding' )

```
// directory sample

    +-- backend
    |   +-- app.js
    |   +-- readMe.txt

reaMe.txt
--------------------------

Hello! this is an amazing text!

--------------------------

```

```
const fs = require( 'fs')


const readMe = fs.readFileSync( 'readMe.txt', 'utf8' )

console.log( readMe ) // Hello! this is an amazing text!


```

- Writing a file synchronously ( blocking code )

  Syntax:

  fs.writeFileSync( 'directory + file name', 'data to be written into the file' )

```
const fs = require('fs')

const readMe = fs.readFileSync( 'readme.txt', 'utf8' )

fs.writeFileSync('newFile.txt', readMe)

```

new file is created in the same directory:

```
// directory sample

    +-- backend
    |   +-- app.js
    |   +-- readMe.txt
    |   +-- newFile.txt

newFile.txt
--------------------------

Hello! this is an amazing text!

--------------------------

```

```
// directory sample

    +-- backend
    |   +-- app.js
    |   +-- readMe.txt

readMe.txt
--------------------------

Hello! this is an amazing text!

--------------------------

```

```

const fs = require( 'fs')

fs.readFile( 'readMe.txt', 'utf8', ( err, data) => {
    console.log( data ) // Hello! this is an amazing text!
})

```

- Writing a file synchronously ( blocking code )

  Syntax:

  fs.writeFile( 'directory + file name', 'data to be written into the file' )

```
const fs = require('fs')

fs.readFile( 'readMe.txt', 'utf8', ( err, data ) => {
    fs.writeFile( 'newText.txt', data)
} )

```

New file is created in the same folder

```
+-- backend
    |   +-- app.js
    |   +-- readMe.txt
    |   +-- newText.txt


newText.txt
--------------------------

Hello! this is an amazing text!

--------------------------
```

- Deleting a file

  SYNTAX:

  fs.unlink('directory path + filename')

```
+-- backend
    |   +-- app.js
    |   +-- readMe.txt
    |   +-- newText.txt
```

```
 const fs = require('fs')

 fs.unlink(newText.txt)

```

```
+-- backend
    |   +-- app.js
    |   +-- readMe.txt

```

## Node Core Modules: Creating and Removing Directories

- Creating a file sychronously ( blocking code )

  SYNTAX:

  fs.mkdirSync('path | string')

- Removing file sychronously ( blocking code )

  SYNTAX:

  fs.rmdirSync('path | string')

- Creating file asychronously ( non-blocking code ) - recommended

  SYNTAX:

  fs.mkdir( 'path | string', callback function)

```
PSUEDO DIRECTORY

+-- NodeIsAwesome
|   +-- backend
|   |   +-- app.js
|   |   +-- readMe.txt

```

Ex: Create a directory in the same root directory

```
const fs = require('fs')

fs.mkdir( '../newFolder', ()=>{
    fs.readFile( 'readme.txt', 'utf8', (err, data)=>{
        fs.writeFileSync( '../newFolder/newText.txt', data)
    })
})

```

```
PSUEDO DIRECTORY UPDATED THROUGH NODE

+-- NodeIsAwesome
|   +-- newFolder
|   |   +--newText.txt
|   +-- backend
|   |   +-- app.js
|   |   +-- readMe.txt

```

- Removing a directory Asynchronously

  SYNTAX

  fs.rmdir( 'path | string' )

BEFORE:

```
PSUEDO DIRECTORY

+-- NodeIsAwesome
|   +-- newFolder
|   |   +--newText.txt
|   +-- backend
|   |   +-- app.js
|   |   +-- readMe.txt

```

REMOVING DIR:

```

const fs = require('fs')

// remove file/s in dir before you can remove a dir

fs.unlink( '../newFolder/newText.txt', ()=>{
    fs.rmdir( '../newFolder' )
})

```

AFTER:

```
PSUEDO DIRECTORY UPDATED THROUGH NODE

+-- NodeIsAwesome
|   +-- backend
|   |   +-- app.js
|   |   +-- readMe.txt

```

## Client and Servers

- Protocols - is a set of communication rules used by the client and the server to request( client ) and send/respond( server ) data.

### Communication between two computers - client and servers

- Each computer has it's own IP address. If a client wants to communicate to a server, first it will need to connect the server's IP address.
- If the connection is successful it will open a channel in where the data/information can flow. This channel is called a socket.
- Each data/information can be sent using different Protocols( eg. HTTP or FTP ).
- When the data/information structure or protocol to be used has been decided the information is then send via a protocol called TCP.
- TCP transfers data into the socket by spliting data into small sections called Packets.

\*\*\* TCP - Transmission Control Protocol.

\*\*\* HTTP - Hyper Text Transfer Protocol (Used for browsers)

\*\*\* FTP - File Transfer Protocol (Used for file transfers)

## Node Core Module: Creating a server

- Ports - a program running on a computer can listen for request sent to a particular port.

- Headers - are information about data type being requested or sent between the client and the server.

Response Headers:

- Content-Type
- Status

```
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead( 200, { 'Content-Type' : 'text/plain' } )
    res.end('Hello from node') // this will be printed in the browser
})
server.listen(3000, '127.0.0.1') // 127.0.0.1 = localhost

console.log(`listening to port 3000`)

```

## Buffers and Streams

### What is a Buffer?

- Tempory storage sport for chunk of data that is being transferred from place to another.
- The buffer is filled w/ data, then passed along.
- Transfers small chunks of data at a time.

### What is a Stream?

- A Stream is a flow or stream of data from the main data source into the buffer and then to the client.

### Streams in Node.js

- Can create streams in Node.js to transfer data.
- Increases performance of the app data since a chunk of data transferred can already be consumed by client instead of waiting for the whole data to be loaded before the client can start consuming data.

### Types of Streams:

- Writable streams - allows node to write data to a stream.
- Readable streams - allows node to read data from a stream.
- Duplex - can read and write to a stream.

### Creating a Stream

- Readable stream

  SYNTAX:

  - fs.createReadStream('data source')

```
const fs = require('fs')

// Reads data from local directory and temporarily stores it in a buffer until buffer is full
// Passes data to variable in chunks

const readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')

// createReadStream inherits from eventEmitter so it has an event method
// event is fired everytime a buffer/data is received

readStream.on( 'data', (chunk) => {
    console.log(chunk)
})

```

- Writable stream

  SYNTAX:

  - fs.createWriteStream('filepath')

```

const fs = require('fs')


const readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')


const writeStream = fs.createWriteStream(__dirname + '/writeme.txt')

// createReadStream inherits from eventEmitter so it has an event method

readStream.on( 'data', (chunk) => {
    console.log('new chunk received')
    writeStream.write(chunk)
})

```

- Pipe (.pipe) - will automatically transfer/pipe data from readable streams into writable streams. Can only be used on readable streams since your piping data from readable streams into writable streams.

```
const fs = require('fs')

const readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')
const writeStream = fs.createWriteStream(__dirname + '/writeme.txt')

readStream.pipe(writeStream)

```

```

const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    // logs url the request was made from
    console.log('request was made: ' + req.url)

    //writes the header
    //header type is plain text
    res.writeHead( 200, { 'Content-Type' : 'text/plain' } )

    // reads data from local directory
    // returns a stream of data and then stores to var
    const readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')

    // response object is a writable stream
    // automaticaly pipes data from readable stream into response object which is to client
    readStream.pipe(res)
})

server.listen( 3000, '127.0.0.1')

console.log(`listening to port 3000`)


```

- Serving HTML page

```

const http = require('http')
const fs = require('fs')


const server = http.createServer( (req, res) => {

    const readStream = fs.createReadStream( __dirname + '/index.html', 'utf8')

    res.writeHead( 200, { 'Content-Type' : 'text/html'})
    readStream.pipe(res)

})


server.listen( 3000, '127.0.0.1')
console.log('listenng to port 3000')

```

- Serving JSON
  - res.end() expects either a string or a buffer

```

const http = require('http')
const fs = require('fs')

const Obj = {

    name: "Cris Acosta",
    job: "The most amazing Sowftware engineer in the world!",
    age: 37
}


const server = http.createServer( ( req, res ) => {

    res.writeHead( 200, { 'Content-Type' : 'application/json' })
    res.end(JSON.stringify(Obj))
})

server.listen( 3000, '127.0.0.1')
console.log('listening to port 3000')

```

## Basic Routing

```
PSUEDO DIRECTORY:

+---nodeisawesome
|   +-- myNodeApp
|   |   +-- app.js
|   |   +-- error.html
|   |   +-- index.html
|   |   +-- obj.json

```

```

const http = require('http')
const fs = require('fs')


const server = http.createServer( ( req, res ) => {
    console.log('a request has been made:' + req.url)

    if( req.url === '/' || req.url === '/home'){
        const readStream = fs.createReadStream( __dirname + '/index.html', 'utf8')
        res.writeHead( 200, { 'Content-Type' : 'text/html' })
        readStream.pipe(res)
    }else if( req.url === '/api'){
        const readStream = fs.createReadStream( __dirname + '/obj.json', 'utf8')
        res.writeHead( 200, { 'Content-Type' : 'applicatiOn/json' })
        readStream.pipe(res)
    } else {
        res.writeHead( 404, { 'Content-Type' : 'text/html' })
        fs.createReadStream( __dirname + '/error.html', 'utf8').pipe(res)
    }

})

const port = process.env.PORT || 3000

server.listen(port)
```

## Commonly used HTTP Methods

- GET - get/request data from server or database.
- POST - post/add data to database.
- DELETE - delete/remove data from database.

## Express.js

- Installing Express

```
npm install --save express
```

- Getting started w/ Express

```
const express = require('express')
const app = express()
```

- Listening to a port

```
const port = process.env.PORT || 5000

app.listent(port)
```

## Responding to requests with Express

- GET - app.get( 'route', fn )
- POST - app.post( 'route', fn )
- DELETE - app.delete( 'route', fn )

```
app.get( '/', (req, res) => {
    res.send('hello from node)
})

app.get( '/contact', (req, res) => {
    res.send('this is the contact page')
})

// localhost:5000
// hello from node

// localhost:5000/contact
// this is the contact page

```

### Express Route Parameters

- Used for creating dynamic routes

  SYNTAX

  app.get( 'url/:{paramsName}, ( req, res ) => {

  res.send( req.params.paramsName })

  })

```
    const express = require('express')
    const app = express()

    app.get( '/profile/:name', (req, res) => {

        res.send(`this is ${req.params.name}'s profile`)
    })


```

### Serving HTML pages w/ Express

```
    const express = require('express')
    const app = express()

    app.get( '/', ( req, res) => {
        res.send( __dirname + '/index.html')
    })

    app.get( '/contact', ( req, res ) =>{
        res.send( __dirname + 'contact.html' )
    })
```

## JavaScript Templating or View Engines

- NPM packages that will render html pages w/ dynamic contents.
- Injects data and JS code into HTML files.

### Setting up a view engine w/ EJS Template engine

```
npm i --save ejs
```

By default when Node requests for views or templates it looks for templates in '/views' folder.

```
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
```

### Rendering dynamic data

- .render method is used to render template views
  - SYNTAX:
    res.render( 'string | view name', { object | data })

```
|   psuedoDirectory
|   +-- views
|   |   +-- profile.ejs
|   +-- app.js
```

### Simple data

Ejs:

```
<!--   ejs files or template views will have the html content   -->

<!DOCTYPE html>
<html>
<head></head>
<body>
    <p>
        Hello from EJS! This is <%= person %>'s profile
    </p>
</body>
</html>

```

Node:

```
const app = express()

app.set( 'view engine', 'ejs' )

app.get( '/profile/:name, ( req, res )=> {

    // res.render is used for rendering views/template engines
    res.render( 'profile', { profile: req.params.name })
})

```

output:

localhost:5000/profile/naruto

---

Hello from EJS! This is naruto's profile

---

### Multiple data

Ejs:

```
<!--   ejs files or template views will have the html content   -->

<!DOCTYPE html>
<html>
<head></head>
<body>
    <h1>Hello from EJS ma dooooods! This is <%= person.name %>'s profile</h1>
    <h2>More info</h2>
    <table>
        <tr>
            <td>
                Age: <%= person.age %>
            </td>
        </tr>
        <tr>
            <td>
                Job: <%= person.job %>
            </td>
        </tr>

    </table>
</body>
</html>

```

Node:

```
const app = express()

app.set( 'view engine', 'ejs' )

app.get( '/profile/:name, ( req, res )=> {

    const person = {
        name: req.params.name,
        job: 'ninja',
        age: 17
    }
    res.render( 'profile', { person : person })
})

```

OUTPUT:

---

localhost:5000/profile/naruto

---

## This is naruto's profile

Age: 17

Job: ninja

---

### Rendering Multiple data w/ JS statements or expressions

Ejs:

```
<!--   ejs files or template views will have the html content   -->

<!DOCTYPE html>
<html>
<head></head>
<body>
    <h1>Hello from EJS ma dooooods! This is <%= person.name %>'s profile</h1>
    <h2>More info</h2>
    <p>
        Age: <%= person.age %>
    </p>
    <p>
        Job: <%= person.job %>
    </p>
    <p>
    Likes:
        <ul>
            <% data.likes.map( (like, index) => { %>
                <li><%= like %></li>
            <% }) %>
        </ul>
    </p>
    </body>
</html>

```

Node:

```
const app = express()

app.set( 'view engine', 'ejs' )

app.get( '/profile/:name, ( req, res )=> {

    const person = {
        name: req.params.name,
        job: 'ninja',
        age: 17,
        likes: [ ramen noodle cups, missions, hinata ]
    }
    res.render( 'profile', { person : person })
})

```

HTML OUTPUT:

---

localhost:5000/profile/naruto

---

## This is naruto's profile

Age: 17

Job: ninja

Likes:

- ramen noodle cups
- missions
- hinata

---

### Template views - Partial Views

- Let's you create a component element that is common to each template views (ex. nav).

  EJS SYNTAX:
  <%- include('string | path+filename w/o ext name') %>

```
|   psuedoDirectory
|   +-- views
|   |   +-- partials
|   |   |   +-- nav.ejs
|   |   +-- contact.ejs
|   |   +-- index.ejs
|   +-- app.js
```

node

```
const express = require('express')
const app = express()

app.set( 'view engine', 'ejs' )

app.get( '/', ( req, res ) => {
    res.render('index')
})


app.get( '/contact', ( req, res ) => {
    res.render('contact')
})

```

ejs:

```
<!-- this is nav.ejs -->

<nav>
    <ul>
        <li>
            <a href='/'>
                Home
            </a>
         </li>
        <li>
            <a href='/contact'>
                Contact
            </a>
         </li>
    </ul>
</nav>

```

```
<!DOCTYPE html>
<html>
<head></head>
<body>
    <%- includes('partials/ejs') %>
    <h1>
        This is a an awesome site!
    </h1>
</body>
</html>
```

```
<!DOCTYPE html>
<html>
<head></head>
<body>
    <%- includes('partials/ejs') %>
    <h1>
        Contact us!
    </h1>
</body>
</html>
```

HTML OUTPUT:

---

localhost:5000/

---

- Home
- Contact

## This is a an awesome site!

it is the best!

---

---

localhost:5000/contact

---

- Home
- Contact

## Contact us!

---

## Middleware & Static Files

- Middleware - is the code the runs between the request and the response.

### Creating a middleware

```

app.use( 'string | routing', (req, res, next) => {
    next()//this will tell node to run the next middleware
})

```

### express.static('string | path/static folder name')

is a built-in middleware function in express that is used for handling static files.

```
app.use( '/someroute', express.static('style'))
```

## Query Strings

- Is an additional data added on http requests in a form of name-value pairs.
- Starts w/ '?' right after the http url.
- More than 1 query string is separated by &.
- Parses and pulls data.

Query Strings:

```
mysite.com/blog?title=covid%20and%20the%20travel%20industry&page=1
```

### Handing Query Strings w/ req.query

- `.query` is a built-in express property the parses query strings and returns an object.

node

```
const express = require('express')
const app = express()

app.get( '/blog', ( req, res ) => {
    console.log(req.query) // { title: 'covid and the travel industry', page: 1 }
    res.render( 'blog', { blog: req.query })
})
```

ejs

```
<!DOCTYPE html>
<html>
<head></head>
<body>
    <%- includes('partials/ejs') %>
    <h1>
        <%= blog.title %>
    </h1>

    <footer>
       <span>
        page <%= blog.page %>
       </span>
    </footer>
</body>
</html>
```

HTML OUTPUT:

---

mysite.com/blog?title=covid\%20and%20the%20travel%20industry&page=1

---

Home Contact Blog

## covid and the travel industry

page 1

---

## POST Requests

- requests or asks the server to accept/store data which is enclosed in the body of the request
- often used when submitting forms.

### POST request in action: Creating a contact form.

```
npm i body-parser --save
```

- bodyParser.urlencoded - returns a new body object containing the parsed data which is populated to the request object after the middleware(i.e. req.body).

node

```
const express = express('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set( 'view engine', 'ejs' )

app.get( '/contact', urlencodedParser, ( req, res ) =>{
    res.render('contact', { data: req.body })
})

app.post( '/contact', urlencodedParser, ( req, res ) => {

    //renders the contact-success message
    res.render( 'contact-sucess', { data: req.body })
})

```

contact.ejs

```
<!DOCTYPE html>
<html>
<head></head>
<body>
    <%- include('partials/nav') %>
    <h1>Contact us!</h1>
    <form id='contact-form' method="POST" action='/contact'>
        <label for="person">Who do wish to contact?</label>
        <input type="text" name="person" value="<%= data.person %>">
        <label for="department?">Which department?</label>
        <input type="text" name="department" value="<%= data.department %>">
        <label for="email">Your email</label>
        <input type="email" name="email">
        <input type="submit" value="submit">
    </form>
</body>
</html>
```

contact-sucess.ejs

```
<!DOCTYPE html>
<html>
<head></head>
<body>
    <%- include('partials/nav') %>
    <h2>Thank you for reaching out</h2>
</body>
</html>
```
