/*
	Using Webpack with a Front End Framework

	Agenda:
		- React
			- Learn how to use webpack with React
			- If you join a team using React, they'll probably be using Webpack as their build tool
		- Angularjs 1
*/

/*
	Using webpack with React

	Add react as a dependency

		npm i react

	Add devDependency for using babel with react

		npm i -D babel-preset-react

	React uses JSX which is html embedded right in your javascript. We have to tell babel to process that separately.
	Additionally, we need to add "react" to the .babelrc file
*/

{
	"presets": ["es2015", "react"]
}

/*
	


*/