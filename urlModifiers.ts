const url = "https://www.example.com/somewhere/something?param1=abc&param2=zxy&param3=poi";

const querystring = require("querystring");

const queryToParse = url.split('?')[1];

const parsedQuery = querystring.parse(queryToParse);

const modifiedQuery = {...parsedQuery, param4: 'fgh'};

const modifiedQueryString = querystring.stringify(modifiedQuery);

