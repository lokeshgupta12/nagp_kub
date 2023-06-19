const express  = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3010;
app.use(express.json());
app.get("/getData", (req, res) => {
       res.send("Lokesh")
});

app.post("/setData", (req, res) => {
    res.send("Lokesh")
});

server.listen(PORT, () => {
    console.log("server started", PORT)
})