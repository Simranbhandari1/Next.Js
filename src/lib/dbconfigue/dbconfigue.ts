import mongoose from "mongoose";
export async function Connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on("Connected" , ()=>{
            console.log('MongoDb Connected Successfully');
        });

        connection.on("error", (err)=>{
            console.log('MongovConnection error Please make sure MonngoDb is running'+ err);
            process.exit();
        });
    }
     catch(error){
        console.log('Something goes wrong!');
        console.log(error);
     }
}


// 1. import mongoose from "mongoose";

// import → a keyword in ES6 JavaScript/TypeScript used to bring in external modules or libraries.

// mongoose → an ODM (Object Data Modeling) library for MongoDB in Node.js.

// Think of it as a “translator” between MongoDB (a NoSQL database) and JavaScript objects.

// Instead of writing raw MongoDB queries, Mongoose lets you define schemas (blueprints of data) and use models (classes) to interact with your DB.

// So here, we’re pulling in the Mongoose library to use its functions.

// 2. export async function Connect() { ... }

// export → makes the function available outside this file. If you import { Connect } in another file, you can call it there.

// async → makes the function asynchronous, meaning it can use await inside. This is important because connecting to a database takes time (it doesn’t happen instantly).

// function Connect() → defines a function called Connect.

// The purpose: set up and manage a MongoDB connection.

// 3. try { ... } catch(error) { ... }

// try { } → A block of code where you “try” running some logic that might fail.

// catch (error) { } → If the code inside try throws an error (for example, MongoDB is offline), then the program jumps into catch and executes that block.

// This prevents your whole app from crashing on errors. Instead, you can handle errors gracefully.

// 4. mongoose.connect(process.env.MONGO_URI!);

// mongoose.connect() → A function provided by Mongoose to actually connect your Node.js app to MongoDB.

// process.env.MONGO_URI

// process → a global object in Node.js that represents the current running process.

// env → a property inside process that contains environment variables.

// MONGO_URI → a custom environment variable you set, which contains your MongoDB connection string. Example:

// MONGO_URI=mongodb://localhost:27017/pingalwada


// ! → TypeScript “non-null assertion” operator. It tells the compiler “I am sure this value is not null or undefined.”

// ⚠️ Ideally, this should be await mongoose.connect(...) because connecting is asynchronous.

// 5. const connection = mongoose.connection;

// const → declares a constant variable (its reference cannot be reassigned).

// mongoose.connection → an object representing the actual database connection created by Mongoose.

// This connection object is like a live socket — you can listen to its events (connected, error, disconnected, etc.).

// 6. connection.on("Connected", () => { ... });

// .on(event, callback) → sets up an event listener.

// Whenever the given event happens, it runs the callback function.

// "Connected" → the event name.

// ⚠️ Problem: In Mongoose, it’s actually lowercase "connected".

// () => { console.log(...) } → Arrow function. Executes when event happens.

// Purpose: log "MongoDb Connected Successfully" when a connection is established.

// 7. connection.on("error", (err) => { ... });

// Listens for error events on the connection.

// (err) => { ... } → callback function, receives the error object.

// console.log("MongoDb Connection error ..." + err) → logs the error message to the console.

// process.exit(); → forcefully stops the Node.js application.

// Because if the DB isn’t connected, usually your app cannot work.

// 8. catch (error) { ... }

// Runs if something in the try block fails (like invalid URI).

// console.log("Something goes wrong!"); → prints a friendly message.

// console.log(error); → prints the actual error for debugging.

// ✅ Meaning in Plain English

// This code is like a “DB connection manager”:

// Import Mongoose (tool to connect to MongoDB).

// Define an async function Connect.

// Inside it, try to connect to MongoDB using your connection string (MONGO_URI).

// Get the connection object and listen for:

// "connected" event → print success message.

// "error" event → print error and shut down the app.

// If anything unexpected happens, catch the error and log it.