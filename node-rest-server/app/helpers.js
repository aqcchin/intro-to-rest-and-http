var headers = {
  'Content-Type': 'application/json',
};

var cityProperties = ['name', 'country', 'population'];
var restaurantProperties = ['name', 'city', 'price_level', 'type_of_food', 'rating'];

var sendResponse = function(response, data, statusCode = 200) {
  console.log(data);
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

var collectData = function(request, callback) {
  var data = '';
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    callback(JSON.parse(data));
  });
};

var isValidRequest = function(validator, data) {

};

var createActionHandler = function(actionMap) {
  return function(request, response) {
    var action = actionMap[request.method];
    if (action) {
      action(request, response);
    } else {
      sendResponse(response, '', 404);
    }
  };
};

module.exports = {
  sendResponse: sendResponse,
  collectData: collectData,
  createActionHandler: createActionHandler,
};
