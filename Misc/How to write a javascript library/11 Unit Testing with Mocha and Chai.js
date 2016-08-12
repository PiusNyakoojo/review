/*
	So if we look at the public API for our module we have 'all' and 'random'.

	So to test this, we want to validate that all is an array of strings and maybe there's a specific name that
	we want to validate.

	And finally, we want to make sure that random does indeed return a random item from that array
*/

var expect = require('chai').expect;
var goodGames = require('./index');

describe('good-games', function() {


	// describe what the all API point should return
	describe('all', function() {

		// assertion 1: it should be an array of strings
		it('should be an array of strings', function() {
			expect(goodGames.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string'; // check if the item is of type string
				});
			}
		});


		// assertion 2: it should contain World of Warcraft because that is a good game!
		it('should contain `World of Warcraft`', function() {
			expect(goodGames.all).to.include('World of Warcraft');
		});


	});


	describe('random', function() {
		it('should return a random item from the goodGames.all', function() {
			var randomItem = goodGames.random();
			expect(goodGames.all).to.include(randomItem);
		});
	});



});