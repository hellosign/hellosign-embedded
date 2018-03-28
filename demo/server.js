var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var hellosign  = require('hellosign-sdk');

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
    var hs = hellosign(keys);
    createSignatureRequest({}, hs)
    .then(function(data){
      var signatureId = data.signature_request.signatures[0].signature_id;
      return hs.embedded.getSignUrl(signatureId)
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

function createSignatureRequest(params, hs){

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

    return hs.signatureRequest.createEmbedded(options)
}
