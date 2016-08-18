/*
    Packages and Package Managers

    Package
        - Code..
        - Managed and maintained with a package management system.

    Package management system
        - Software that automates installing and updating packages.
        - Deals with what version you have or need, and manages dependencies.

    Dependency:
        - Code that another set of code depends on to function.
        - If you use that code in your app, it is a dependecy. Your app depends on it.
*/

/*
    Semantic Versioning (semver)
        - example: version 1.7.2
            - breaking_change.new_feature.bug_fixes
            - num1.num2.num3
        - This is versioning based on a standard. We are conveying that the number of the version of our Software
        actually means something.
        - When you deal with all these dependencies and packages with a package manager, you run across the issue
        of whether or not you should upgrade to a new version of some package.
        - Semantic versioning is an endeavor that suggests that looking at a version number should tell us a lot
        about the software changes.
        - If you agree to use the semantic versioning standard, you're just agreeing to follow a certain set of rules
        when determining the current version number of the code you're writing.
        - If we make a change in the code, we should change the version number in this way.

    Versioning
        - Sepcifying what version of a set of code this is..
        - so others can track if a new version has come out. This allows to watch for new features, or to watch
        for 'breaking changes'.
        - The word 'semantic' implies that something conveys meaning.

    Major Changes . Minor Changes . Patches

    Increment the patch number if
        - some bugs were fixed. Your code will work fine.

    Increment the minor changes if
        - Some new features were added. Your code will work fine.
    
    Increment the major changes if
        - Big changes. Your code will break (maybe).

    For more information: http://semver.org

    v2.0.0-rc.2

    v1.0.0-beta
*/

/*
    NPM and the NPM Registry: Other people's code :O

        npm install <package-name>

*/

/*
    Init, Nodemon and package.json

        npm init // create package.json
    
        npm install moment --save // saves moment in package.json

    ~2.10.6 // only update patches if they're available
    ^2.10.6 // only update if a minor release is out.

    When requiring a node package, Node will first check to see if it's a core module. If not it will
    check to see if it's in the node_modules folder in the __dirname
*/

/*
    Development dependencies:

    Jasmine
        - A tool to help us write tests for our software as we build it.

        npm install jasmine-node --save-dev

        or

        npm i -D jasmine-node

    Nodemon
        - Stands for node monitor. It watches the files for changes and reloads the application when a change is made.

        npm i -g nodemon


        npm update // will update to the latest version of all the dependecies we use
    
*/