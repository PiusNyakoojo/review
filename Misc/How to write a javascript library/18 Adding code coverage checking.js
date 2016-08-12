/*
	We want to make sure our coverage doesn't run below a certain value or %

		npm run test:single

	It's easy to get 100% coverage in small libraries. However, with larger libraries, its a bit more difficult to get 100% coverage.
	So having a standard that we can't drop below is a really good thing.

	As we add features to the library, we want to make sure that we don't drop below a certain coverage.

		"pre-commit": "npm run test:single && npm run check-coverage"

	Then add in our scripts:

		"check-coverage": "istanbul check-coverage --statements 100 --branches 100 --functions 100 --lines 100"

	Now we can run

		npm run check-coverage

	This will succeed if our coverage isn't dropped.

	If we add a random function:
*/

function doSomething() {
	console.log('hi');
}

/*
	Our tests aren't running this function, our code isn't running this, so this function isn't covered. Now if we run

		npm run test:single

	We'll see that our coverage is down 50% and statements drops by 1 and lines drop by 1. If we run

		npm run check-coverage

	We get an error!!

	So because this is part of our pre-commit githook, we won't be able to commit anything that is below our coverage standard.

	That is how we add coverage checking to our library. Now we'll make sure that travis knows as well so that we ensure a certain
	coverage standard

		script:
			- npm run test:single
			- npm run check-coverage

*/