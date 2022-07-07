const aligners = require("../utils/aligners.json")
module.exports = async function (context, req) {

    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + `. This HTTP triggered function executed successfully. Aligner 1 : ${aligners.aligner1}`
        : `This HTTP triggered function executed almost. Pass a name in the query string or in the request body for a personalized response. Aligner 1 : ${aligners.aligner1}`;

    context.res = {
        status: 200,
        body: responseMessage
    };
}