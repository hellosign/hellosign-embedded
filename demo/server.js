var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var hellosign_sdk  = require('hellosign-sdk');

/** CONSTANTS **/
var PORT = 8080;

var app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('it works');
});

app.post('/api/createSignatureRequest', function(req, res){

    var api_key = req.body.api_key;
    var client_id = req.body.client_id;

    var keys = {
        key    :  req.body.api_key,
        client_id  :  req.body.client_id
    }

    console.log(req.body);
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
});

app.listen(PORT, function(){
    console.log('Listening on port ' + PORT);
});


/*
*/

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
          files : ['public/nda.docx']
        };

    return hellosign.signatureRequest.createEmbedded(options)
}
