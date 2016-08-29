/*
    We need to setup a go workspace to write all our go programs in. Some people use multiple folders..
    this is not recommended. You can start off with creating a folder in Documents called 'go_workspace'

    Within that folder, you will have 3 more folders
        - bin
        - pkg
        - src
            - github.com
                - <github.com username>
                    - folder with code for project / repo
                    - folder with code for project / repo
                    - etc..
    
    The reason we use github is because it allows for easy package management and namespacing
        - even if the package has the same name, the path to the package is completely different

    
    To download and install packages and dependencies

        go get <package-name>

        go get github.com/nu7hatch/gouuid

    To import the package in our code

        import "github.com/nu7hatch/gouuid"

    bin
        - contains binary code that we can execute.

    pkg 
        - when you build a package you want to use, that perhaps isn't a standalone executable, but
        is something you want to include, go creates an 'a' file, which is an archive file.
        - The 'a' file is a precompiled package that's ready to be used.
*/