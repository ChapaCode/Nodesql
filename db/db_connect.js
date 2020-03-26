const { Client }= require("pg");
const env = require("../config");

const client = new Client (
   {
    "user":env.user,
    "password":env.password,
    "host":env.host,
    "port":env.port,
    "database":env.database
   }
);

const con = connect();
async function connect ()
{
      try {
        console.log("Data base have successfully connected");
          await client.connect();
      } catch (error) {
        console.log("Database failed to connected because of "+ error)
          
      }
}



module.exports = client;




