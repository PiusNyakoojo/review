/*
	In this section, we'll discuss what we should do when we update our library.

	After adding an update.. in our case we added another name to the good-games.json.. 

	we need to consider the version we'll call our library: 1.0.0

		The first number indicates a MAJOR version.. there may be a branking change of some kind.
		For example, if we change 'all' to 'getAll'

		The second number indicates new features but without a breaking change. So our API remains the same

		The last number is a patch release or bug fix. 

	So we'll run the following commands to update the changes to github and npm

	git add -A
	git commit -m "Added change. <change description>"
	git tag 1.1.0
	git push
	git push --tags

	npm publish
	// npm info <library-name>

*/