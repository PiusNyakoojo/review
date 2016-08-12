/*
	So there are a few repeated steps when releasing an updated version of your library.

	First we have to add the updates them commit them and tag the commit then publish, then push it to github..

	There's a tool called semantic release that makes releasing new updates of your software super easy!

		npm install -g semantic-release-cli

	Then we run

		semantic-release-cli setup

	Go ahead and change the version to

		0.0.0-semantically-released

	The reason we're doing this is because npm install will give us a warning if there is no version specified in the package.json

	Semantic-release will take care of version control for our library so we don't need to mess with that.. we just follow a few
	standard release guidelines and it will take care of the versioning of our library.

	So we'll use Travis CI to manage our continuous integration. We want to make sure that all our tests are working before travis
	releases an updated version of our library so we'll add

	(place this before after_success)
	
		script:
			- npm run test

	After our test runs, if it succeeds, after_success will be called and we will release our version through semantic-release.
	However, if it fails, after_success won't be called. Semantic-release will figure out what version our library should be
	based on our git commits
*/