const express = require('express')
const myapp = express()
var bodyParser = require('body-parser')
myapp.use(bodyParser.urlencoded())
myapp.use(bodyParser.json())

myapp.get('/hello', function (req, res) {
    res.send('Hello')
})

myapp.get('/world', function (req, res) {
    res.send('World')
})
myapp.get('/', function (req, res) {
    res.send("Nick's World. Navigate to /hello or /world or see how I'm /feeling.")
})

myapp.get('/feeling', function (req, res) {
    var myInfo = {
        "myname" : "Nick",
        "feeling" : "dopey"
    }
    res.send(myInfo)
})

myapp.post('/newfeeling', function (req, res) {
    console.log(req.body)
    if(!req.body.myname || !req.body.feeling) {
        return res.send("Error: Missing key information.")
    }
    else {
        return res.send(req.body)
    }
})


myapp.listen(3000, function () {
    console.log("Listening on 3000.")
})
