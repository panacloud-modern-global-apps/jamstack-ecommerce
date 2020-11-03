// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async event => {
  console.log("Data = ", JSON.parse(event.body));
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello World` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
