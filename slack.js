let request = require('request')
let fs = require('fs')

const config = JSON.parse(fs.readFileSync('config/config.json', 'utf8'));

function PostToSlack(TEXT){
    request.post(config.URL, { json: {'text':TEXT}},
        function(error, response, body){
        if (!error && response.statusCode == 200){
            console.log(body)
        }
        }   
    );
}