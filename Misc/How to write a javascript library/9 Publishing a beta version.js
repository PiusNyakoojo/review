/*
	Beta versions are useful to release if you're not sure if the people using your library will view the changes as a positive
	thing for the library. Releasing a beta version allows people to test the new feature before making an official, production-ready
	release.

	In the package.json change the version to:

		1.2.0-beta.0

	-beta.0 indicates that this is the 0th beta release.

	git add -A
	git commit -m "Added some feature"
	git tag 1.2.0-beta.0
	git push
	git push --tags

	npm publish --tag beta

	if we want to install the beta version of a module::

	npm install <library-name>@beta

	When we're finished with the beta. We publish the new version without the -beta.0 and we're good to go!!
*/