var helpers = require('./helpers');

var cityId = 1;
var restaurantId = 1;

var cities = [];
var restaurants = [];

var cityActions = {
  'GET': function(request, response) {
    console.log('in here');
    helpers.sendResponse(response, { data: cities });
  },
  'POST': function(request, response) {
    helpers.collectData(request, function(city) {
      cityId += 1;
      city.id = cityId;
      cities.push(city);
      helpers.sendResponse(response, { id: city.id }, 201);
    });
  },
};

var restaurantActions = {
  'GET': function(request, response) {
    helpers.sendResponse(response, { data: restaurants });
  },
  'POST': function(request, response) {
    helpers.collectData(request, function(restaurant) {
      restaurantId += 1;
      restaurant.id = restaurantId;
      restaurants.push(restaurant);
      helpers.sendResponse(response, { id: restaurant.id }, 201);
    });
  },
};

module.exports = {
  cities: helpers.createActionHandler(cityActions),
  restaurants: helpers.createActionHandler(restaurantActions),
};
