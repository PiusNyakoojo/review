/*
	To add coverage to our code, we'll use a tool called Istanbul. Istanbul instruments our code for coverage reporting and recording.
	We'll use this to make sure that as our library gets new features, we keep track of our coverage and can find places to improve it.
	
		"test:single": "istanbul cover -x *.test.js _mocha -- -R spec src/index.test.js"

	We don't want to report coverage stats on anything that ends in .test.js.. so we exclude those files

	Everything after that -- will be passed as an argument to the _mocha binary that we're using to run our test.

	Now when we run 

		npm run test:single

	We get our summary from mocha as well as a coverage summary
	

	In coverage/lcoveragereport we can open the index.html in our browser and view the report with a nice GUI.

	We can browse our source code and see how many times our files were hit during our test.

	Also add coverage to our .gitignore so we're not tracking it in our publications
		
*/