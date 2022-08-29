const http = require('http');

function handleGetRequest(req, res) {

    const url = 'http://jsonplaceholder.typicode.com/posts/1';


    // const options = {
    //     hostname: 'jsonplaceholder.typicode.com',
    //     path: '/posts/1',
    //     method: 'GET',
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     }
    // }

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




}

function handlePostRequest(req, res) {

}

function handleDeleteRequest(req, res) {

}

function handlePutRequest(req, res) {

}

module.exports = {
    handleGetRequest,
    handlePostRequest,
    handleDeleteRequest,
    handlePutRequest
}