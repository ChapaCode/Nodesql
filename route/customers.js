const express = require('express');
const router = express.Router();
const db = require("../db/db_connect");


router.get('/customer', async(req, res) => {

    try {
        const results = await db.query("SELECT * FROM customer");
    res.setHeader("content-type","application/json");
    res.status(200).send(JSON.stringify(results.rows));
    console.log("were are good")
   

    } catch (error) {
        res.send(error);
    }
 

});




module.exports = router;


