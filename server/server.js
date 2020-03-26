const http = require("http");
const app  = require("../app");


app.set("port",process.env.PORT || 7000);


const server = http.createServer(app);


server.on("Listening",()=>{
    console.log("Ok, Server is running");
})



server.listen(process.env.PORT || 7000);