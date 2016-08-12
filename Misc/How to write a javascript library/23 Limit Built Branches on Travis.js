/*
	If we look at our build badge on github, we may see that our build failed.

	In the travis.yml file add

	after the cache..

		cache:
			directories:
				- node_modules
		branches:
			only:
				- master

	Thus we're only going to build the master branch.

	This is a whitelist, we could also do a blacklist with

		branches:
			exclude:
				- master


	npm add .
	npm run commit
	.. fill out commitizen prompt
	git push

	
	Now we can verify this by creating a branch

		git checkout -b lesson/23-limit-travis-builds

		git push -u origin lesson/23-limit-travis-builds

	Then that will get pushed as a new branch to our repo. And if we look at our travis-ci, we'll notice that no longer will branches
	be built with the master branch.

	Our build should now pass on the github repo.


*/