const express  = require('express');
const http = require('http');
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT } = process.env;

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}?authSource=admin`;
// all the method on this "methos file"
var methodInstance = require("./methods")
// connect url
MongoClient.connect(url, methodInstance.mongoDbConnect)
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3010;
app.use(express.json());
app.get("/getData", (req, res) => {
       res.send("Lokesh")
});

app.post("/setData", methodInstance.submitData);

server.listen(PORT, () => {
    console.log("server started", PORT)
})