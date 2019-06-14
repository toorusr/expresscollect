var express = require('express')
var router = express.Router()
const fs = require('fs');

// return router info on root call and save everything
router.all('/', (req, res) => {
    if (req.query["cookies"] == "chocolate") {
        res.send("Thank you for your chocolate cookie. Have a nice day, you're now my friend.")
    } else {
        res.send("Next time chocolate cookies and not data please, got your data.")
    }

    fs.writeFile("./data/" + Date.now(), JSON.stringify(req.body + "\n" + req.query), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(Date.now() + " => " + JSON.stringify(req.body) + "\t" + JSON.stringify(req.query));
    });
})

module.exports = router
