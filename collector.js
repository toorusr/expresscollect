var express = require('express')
var router = express.Router()
const fs = require('fs');

// return router info on root call and save everything
router.all('/', (req, res) => {
    res.send("Next time chocolate cookies and not data please, got your data.")
    fs.writeFile("./data/" + Date.now(), JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(Date.now() + " => " + JSON.stringify(req.body));
    });
})

module.exports = router
