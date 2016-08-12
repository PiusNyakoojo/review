/*
	Now we've setup our automatic releases with travis CI that tests library before releasing. That's great. It would also be great if we
	tested our library before sending it off to travis CI. One awesome feature about git is something called git hooks which allows us to
	hook into a git process before or after it starts running that process. By hooking into it, we can run custom scripts to ensure that
	how library is indeed doing what we want it to do.

	We want to run our tests before pushing of code.
	
		npm i -D ghooks

	To configure ghooks we'll add

		"config": {
			"ghooks": {
				"pre-commit": "npm run test:single"
			}
		}

	in our package.json
*/