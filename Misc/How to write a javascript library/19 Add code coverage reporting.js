/*
	Now that we've added code coverage checking, we can send these reports to a third-party service to get cool badges!

	https://codecov.io

	https://codecov.io/github/piusnyakoojo/good-games

	Copy the upload token

		npm install -D codecov.io

	Go to package.json and add this to the scripts:

		"report-coverage": "cat ./coverage/lcov.info | codecov"

	Then go to the travis file and add

		after_success:
			- npm run report-coverage // report to codecov
			- npm run semantic-release

	
	git status
	git add .

	npm run commit // auto commit with semantic-release-cli

		// fill in the things

	git push

*/