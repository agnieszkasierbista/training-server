const http = require('http');
const fs = require('fs');
const qs = require('querystring');


const url = 'http://jsonplaceholder.typicode.com/posts';

function handleGetRequest(req, res) {
    const path = req.url;

    if (path === '/data?') {

        const request = http.request(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', (chunk) => {
                res.end(data);
            });
        });

        request.on('error', (err) => {
            console.log(err)
            res.statusCode = 404;
            return res.end('Requested resource does not exist');
        })

        request.end()
    } else {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();

        })

    }

}


function handlePostRequest(req, res) {

    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {

        console.log(data); // 'Buy the milk'
        const json = qs.parse(data);
        console.log(json);
        res.end(JSON.stringify(json));

    });


}

function handleDeleteRequest(req, res) {
}

function handlePutRequest(req, res) {
}

function handlePatchRequest(req, res) {
}

module.exports = {
    handleGetRequest,
    handlePostRequest,
    handleDeleteRequest,
    handlePutRequest,
    handlePatchRequest
}