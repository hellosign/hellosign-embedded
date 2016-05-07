var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var hellosign_sdk  = require('hellosign-sdk');
var webpack = require('webpack')(require('./webpack.dev-build.js'));

/** Settings **/
var PORT = 8080;

/** Configure App **/
var app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

/** Routing **/
app.post('/api/createSignatureRequest', processSignatureRequestPost);
app.listen(PORT, function(){
    console.log('Listening on port ' + PORT);
});

/** Rebuild DEV embedded file **/
webpack.watch({
    aggregateTimeout: 300,
    poll: true
}, webpackLogger);


/*
 * Helpers
 */

function processSignatureRequestPost(req, res){

    console.log(req.body);

    var api_key = req.body.api_key;
    var client_id = req.body.client_id;

    var keys = {
        key    :  req.body.api_key,
        client_id  :  req.body.client_id
    }

    // Send request and retrieve response
    var hellosign = hellosign_sdk(keys);
    createSignatureRequest({}, hellosign)
    .then(function(data){
      var signatureId = data.signature_request.signatures[0].signature_id;
      return hellosign.embedded.getSignUrl(signatureId)
    })
    .then(function(data){
        console.log(data);
        var signUrl = data.embedded.sign_url;
        return res.json({"sign_url": signUrl, "success": true});
    })
    .catch(function(err){
        console.log(err);
        return res.json({"error": err, "success": false});
    });
}

function createSignatureRequest(params, hellosign){

    var options = {
          test_mode : 1,
          title : 'NDA with Acme Co.',
          subject : 'The NDA we talked about',
          message : 'Please sign this NDA and then we can discuss more. Let me know if you have any questions.',
          signers : [
            {
              email_address : 'jack@example.com',
              name : 'Jack',
              order : 0,
            },{
              email_address : 'jill@example.com',
              name : 'Jill',
              order : 1,
            }
          ],
          cc_email_addresses : ['lawyer@example.com', 'lawyer@example2.com'],
          files : [__dirname + '/public/nda.docx']
        };

    return hellosign.signatureRequest.createEmbedded(options)
}

function webpackLogger(err, stats) {
    if (err) {
        console.log("Webpack compiler error: ", err);
    } else {
        console.log("Webpack build: ", stats.hash);
    }
}
