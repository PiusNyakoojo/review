/*
	semantic-release-cli should have setup our travis CI build if everything is working. So we can go to

	https://travis-ci.org

	Run

		git push

	to push our commits to master

	Go ahead and add

		"test:single": "mocha src/index.test.js"

	in our scripts object. Notice that we've removed -w so we can run the test once rather than watching for file changes.

	In our travis instead of running test we'll run test:single
*/