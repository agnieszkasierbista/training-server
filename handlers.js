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
    let stringifiedJson = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {

        // console.log(data);
        const json = qs.parse(data);
        // console.log(json);
        stringifiedJson = JSON.stringify(json);
        console.log(stringifiedJson);



    });

    const parsedURL = new URL(url);
    const options = {
        url: url,
        hostname: parsedURL.hostname,
        path: parsedURL.pathname,
        body: stringifiedJson,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST'

    }

    console.log(options.path)

    const request = http.request(options, (response) => {

        let dataRes = '';
        response.on('data', (chunk) => {
            dataRes += chunk;
        });

        response.on('end', (chunk) => {
            res.end(dataRes);
        });

        console.log('dataRes', dataRes);
    })

    request.on('error', (err) => {
        console.log(err)
        res.statusCode = 404;
        return res.end('Requested resource does not exist');
    })

    request.end()



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