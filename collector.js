var express = require('express')
var router = express.Router()
const fs = require('fs');

// return router info on root call and save everything
router.all('/', (req, res) => {
    res.send("OK\n" + JSON.stringify(req.params))
    fs.writeFile("./data/" + Date.now(), JSON.stringify(req.query), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(Date.now() + " => " + JSON.stringify(req.query));
    });
})

module.exports = router
