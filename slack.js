let request = require('request')
let fs = require('fs')

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

function PostToSlack(TEXT){
    request.post(URL, { json: {'text':TEXT}},
        function(error, response, body){
        if (!error && response.statusCode == 200){
            console.log(body)
        }
        }   
    );
}

PostToSlack("sorry, test")