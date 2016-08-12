/*
	Another import aspect of releasing a package onto npm is to associate the version you have on npm with the one
	on your github repository.
	
	You can accomplish this by adding a version tag to your github repository. A tag in git is something that points
	to a particular commit. So you can go back to any commit which will signify a certain version of your library.

	Run the following command to set a tag

		git tag <tag-value>

		(e.g.) git tag 1.0.0
	
	So now and forever, this tag will be associated with the current release on github. Github will also consider that tag
	as a release and there are a bunch of tools to help manage how that looks.

	git push --tags
*/