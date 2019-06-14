// MIT license
// @toorusr, https://max.berlin
// Express Collector

// require express and fs
var express = require('express')
var router = express.Router()
var fs = require('fs');

// return message and save request body + query to data/$timestamp
router.all('/', (req, res) => {
    // check if the requester gives me cookies
    if (req.query["cookies"] == "chocolate") {
        res.send("Thank you for your chocolate cookie. Have a nice day, you're now my friend.")
    } else {
        res.send("Next time chocolate cookies and not data please, got your data.")
    }
    // write req.query and req.body as stringified json objects to ./data/$timestamp
    fs.writeFile("./data/" + Date.now(), JSON.stringify(req.body)  + "\n" + JSON.stringify(req.query), function(err) {
        if(err) {
            // check if something somehow happened
            return console.log(err);
        }
        // log the reqest data that we saved to the console
        console.log(Date.now() + " => " + JSON.stringify(req.body) + "\t" + JSON.stringify(req.query));
    });
})

// export this express router
module.exports = router
