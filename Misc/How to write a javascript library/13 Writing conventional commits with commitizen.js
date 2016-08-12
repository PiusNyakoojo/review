/*
	In the angular repo on github
	https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit

	There are some guidelines on commiting to their git repo.

	Commit Message Format:
		- each commit message consists of a header, a body and a footer. The header has a special format that includes a type,
			a scope and a subject.

		<type>(<scope>): <subject>
		<BLANK LINE>
		<body>
		<BLANK LINE>
		<footer>

	The header is mandatory and the scope of the header is optional.
	
	To make writing these commit logs easier, we use another tool called commitizen

		npm install -D commitizen cz-conventional-changelog
	
	Commitizen contains a binary in node_modules/.bin called git-cz and we'll add that in our scripts in our package.json

		scripts: {
			"commit": "git-cz", ...
		}
	
	Then we need to tell git-cz to use cz-conventional-changelog so after our devDependencies we can write:

		devDependencies: {
			//...
		},
		"czConfig": {
			"path": "node_modules/cz-conventional-changelog"
		}

	Go ahead and add everything with git add -A .

	Then run our commit script

		npm run commit

	We will get a prompt to setup our commit message
		- The type?? perf, chore, feat, fix ??
		- the scope?? browser, compiler, location?
		- short desc
		- long desc
		- breaking changes??
*/