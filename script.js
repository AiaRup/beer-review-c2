// PROJECT EXERCISE 1, 2, 3, 4
var beers = [];

var addBeer = function(name, category, rate) {
  var newBeer = {
    beerName: name,
    beerCategory: category,
    beerRate: rate
  };
  beers.push(newBeer);
};

var renderBeers = function() {
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

$('.post-beer').on('click', function() {
  var name = $('#beer-name').val();
  var category = $('#beer-category').val();
  var rate = $('.custom-select').val();
  addBeer(name, category, rate);
  renderBeers();
});

// PROJECT EXERCISE 5 - sort button
var clicks = 0;
$('.sort').on('click', function() {
  $('li').remove();
  if(clicks % 2 == 0) {
    beers.sort(sortASE);
    renderBeers();
  }
  else {
    beers.sort(sortDES);
    renderBeers();
  }
  clicks++;
});

// sort in ascending order
function sortASE(a,b) {
  return (a.beerName > b.beerName) ? 1 : ((b.beerName > a.beerName) ? -1 : 0);
} 

// sort in descending order
function sortDES(a,b) {
  return (a.beerName > b.beerName) ? -1 : ((b.beerName > a.beerName) ? 1 : 0);
} 




