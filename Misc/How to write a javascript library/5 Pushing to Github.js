/*
	// To view our file changes in our git repo

	git status

	It's not advisable to commit your node_modules directory for several reasons::
		- collaborating with other users
		- messing up the git history with a lot of unnecessary changes

	We will make sure that we upload the proper files and that we gitignore our node_modules

	Create a new file called ".gitignore" and this will be responsible for telling git to igrnore certain files
	or folders in our repo.
	
	However, pushing to github isn't enough. We want to make it easier for developers to use our library so we'll publish
	it to npm rather than forcing them to come to the src/index.js of our library and copying the code
*/