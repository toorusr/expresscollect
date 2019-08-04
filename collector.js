// MIT license
// @toorusr, https://max.berlin
// Express Collector

// require express, fs and tebot
var express = require('express')
var router = express.Router()
var fs = require('fs');
var tb = require('./tebot');

// load tebot config
var tb_config = require('./tebot.json')
tb.load(tb_config.token, tb_config.id)

// return message and save request body + query to data/$timestamp
router.all('/', (req, res) => {
    // check if the requester gives me cookies
    if (req.query["cookies"] == "chocolate") {
        // if there is a cookies attribut containing chocolate in the query
        res.send("Thank you for your chocolate cookie. Have a nice day, you're now my friend.")
    } else {
        // normally, if anything else got submitted
        res.send("Next time chocolate cookies and not data please, got your data.")
    }
    // write req.query and req.body as stringified json objects to ./data/$timestamp
    fs.writeFile("./data/" + Date.now(), JSON.stringify(req.body)  + "\n" + JSON.stringify(req.query), function(err) {
        if(err) {
            // check if something somehow happened
            return console.log(err);
        }
        // log the reqest data that we saved to the console
        console.log(Date() + " => " + JSON.stringify(req.body) + "\t" + JSON.stringify(req.query));

        // send to telegram chat
        tb_data = "Time:\n" + Date() + "\nName:\n" + req.body.name + "\nEmail:\n" + req.body.email + "\nReason:\n" + req.body.reason + "\nMessage:\n" + req.body.message
        tb.sendMessage(tb_data)
    });
})

// export this express router
module.exports = router
