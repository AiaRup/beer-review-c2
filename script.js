// MODULAR DESIGN
var BeerReviewApp = function() {
  var beers = [];

  var addBeer = function(name, category, rate) {
    var newBeer = {
      beerName: name,
      beerCategory: category,
      beerRate: rate
    };
    beers.push(newBeer);
  };

  var updateBeers = function() {
    $('li').remove();
    for (var i = 0; i < beers.length; i++) {
      $('.beers-list').append(
        '<li>Name: ' +
          beers[i].beerName +
          ' , Category:' +
          beers[i].beerCategory +
          ' , Rate: ' +
          beers[i].beerRate +
          '</li>'
      );
    }
  };

  return {
    addBeer: addBeer,
    updateBeers: updateBeers
  };
};

var beerReviewApp = BeerReviewApp();

// Eventhandler for post button - no sorting
$('.post-beer').on('click', function() {
  var name = $('#beer-name').val();
  var category = $('#beer-category').val();
  var rate = $('.custom-select').val();
  beerReviewApp.addBeer(name, category, rate);
  beerReviewApp.updateBeers();
});
