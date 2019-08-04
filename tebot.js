// MIT license
// @toorusr, https://max.berlin
// Telegram API handler

// packages
const https = require('https');

// load credentials and data
exports.load = function (token, id) {
    global.token = token;
    global.id = id;
}

// send text with data to chat
exports.sendMessage = function (data) {
    https.get('https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + id + '&text=' + data)
}
