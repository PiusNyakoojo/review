/*
    Aerospike is a NoSQL database solution that's recommended.

    SSH
        - a crytographic (encrypted) network protocol to allow remote login and other network services
        to operate securely over an unsecured network.
        - SSH provides a secure channel over an unsecured network in a client-server architecture, connecting
        an SSH client application with an SSH server.
        - Common applications include remote command-line login and remote command execution, but any network
        service can be secured with SSH.
        - The ptotocol specification distinguishes between two major versions, referred to as SSH-1 and
        SSH-2
    
    In 2015, microsoft announce that they would include native support for SSH in a future release. SSH was
    designed as a replacement for Telnet and for unsecured remote shell protocols such as the Berkeley rlogin,
    rsh, and rexec protocols. Those protocols send information, notably passwords, in plaintext, rendering
    them susceptible to interception and disclosure using packet analysis. 

    The encryption used by SSH is intended to provide confidentiality and integrity of data over an unsecured
    network, such as the internet, although files leaked by Edward Snowden indicate that the National Security
    Agency can sometimes decrypt SSH, allowing them to read the content of SSH sessions.
*/

/*
    DigitalOcean
        - They rent linux machines
        - The more GB of ram our machine has, the more data it'll be able to Cache (for example)
        - Aerospike (our NoSQL DB solution wants at least 2GB of RAM from our machine)
        - Select a location where you expect most of your customers to come from so the server will
        be closer to the clients (and thus information transfer will be quicker)
        - Aerospike requires a 64-bit machine
*/

/*
    To connect to your linux machine 

        ssh root@<IP-address>

        ssh root@198.199.101.234

    root is the admin user. You usually don't want to be logged in as admin. Usually, you want to be logged
    in with another account that has stricter privileges. So we'll create a new user.

        adduser <username>
    
    Make sure to put in a good passwords. You can leave the other settings blank, just keep pressing enter.

    Now give the user sudo access:

        gpasswrd -a <username> sudo // now this use can use the sudo command

    To switch user:

        su <username>

    To go to root directory we can do: (these are equivalent)

        cd ~
        cd $HOME
        cd /home/<username>

    drwxrwxr-x
        - these specify permissions
        - the d stands for directory
        - the first rwx means you have read, write and execute permissions
        - the second rwx means there is read, write and execute permissions for anyone in the group
        - r-x means that is read and execute permissions for everyone else.

    SSH keys are kind of sensitive, so you don't want to have everyone looking at that so we'll change
    the permissions with chmod

    With change mod you give permissions with OCTAL permissions:

        3 different permissions: read, write, execute
        3 different people: the current user (owner), the group, or everyone else

    The numbers mean something as well

        4 : read
        2 : write
        1 : execute

    So to set read, write and execute permissions for us (the owner) we write:

        chmod 7

    We just add up the permissions: 4 (read) + 3 (write) + 1 (execute) = 7.
    Since we won't want anyone in the group or anyone else to rwx, we will use 0 to set their
    permissions.

        chmod 700 <folder-name>

        chmod 700 .ssh
    
    (by the way, use mkdir <folder-name> to create a folder)

    To view file permissions again:

        ls -lA
*/

/*
    nano is the text editor in the terminal. to open a file with nano

        nano <file-name>

*/

/*
    To leave our switched user we use the exit command

        exit
*/