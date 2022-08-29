const http = require('http');
const {handlePutRequest} = require("./handlers");
const {handleDeleteRequest} = require("./handlers");
const {handlePostRequest} = require("./handlers");
const {handleGetRequest} = require('./handlers');

const server = http.createServer((req, res) => {
    const {method} = req;

    switch (method) {
        case 'GET':
            return handleGetRequest(req, res);
        case 'POST':
            return handlePostRequest(req, res);
        case 'DELETE':
            return handleDeleteRequest(req, res);
        case 'PUT':
            return handlePutRequest(req, res);
        default:
            throw new Error(`Unsupported request method: ${method}`);
    }
});


server.listen(3001,  () => {
    const { address, port } = server.address();
    console.log(`Server is listening on: http://${address}:${port}`);
});