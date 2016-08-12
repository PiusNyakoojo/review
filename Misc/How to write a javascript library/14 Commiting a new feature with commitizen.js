/*
	Now let's see what happens when we commit a new feature with commitizen

	We'll add a feature that allows us to specify how many random names we want.

*/

// inside the random describe we will add

it('should return an array of random items if passed a number', function() {
	var randomItems = goodGames.random(3);
	expect(randomItems).to.have.length(3);
	randomItems.forEach(function(item) {
		expect(goodGames.all).to.include(item);
	});
});