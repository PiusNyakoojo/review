/*
    http://wiki.ros.org/catkin
*/

/*
    Catkin is the official build system for ROS and the successor to the original ROS build system, rosbuild. 
        - combines CMake macros and Python scripts to provide some functionality on top of CMake's normal
        workflow.
        - Was designed to be more conventional than rosbuild, allowing for better distribution of packages,
        better corss-compiling support, and better portability.
        - The workflow is very similar to CMake's but adds support for automatic 'find package' infrastructure
        and building multiple, dependent projects at the same time. 
        - The name catkin comes from the tail-shaped flower cluster found on willow tress -- a reference to 
        Willow Garage where catkin was created. 

    In CMake, the build system configuration file is usually called "CMakeLists.txt". With GNU Make it is 
    within a file typically called "Makefile".

    A build system utilizes configuration information to process and build source code in the appropriate
    order to generate targets. 

    ROS uses a custom build system, catkin, that extends CMake to manage dependencies between packages. 
    Efficiently sharing ROS-based code would be more difficult without catkin or rosbuild. 

*/

/*
    2. Why catkin? Motivation to move away from rosbuild 

    2.1 Portability through Python and Pure CMake

    One of the biggest problems with rosbuild is that it is not [easily] protable to all operating systems, 
    especially Microsoft Windows. This is because rosbuild utilizes a mixture of Bash scripts, GNU Make, 
    and CMake to build code. 

    Catkin is implemetnted as custom CMake macros along with some Python code. As CMake and Python are portable, 
    catkin is easily portable to any system that supports both Python and CMake.

    2.2 Decoupling from ROS

    One of the philosophies behind ROS is to minimize the number of ROS-specific tools needed to create, manage, 
    and utilize ROS packages and to always try to defer to well-established, widely-used, third-party, open-source
    tools (e.g. using libtinyxml instead of writing a custom XML parser) instead. 

    Catkin is independent of the ROS ecosystem and can even be used on non-ROS projects.

*/

/*
    Catkin has the following dependencies:
        - CMake
            - a cross-platform, open-source build system
        - Python
            - Python is a general-purpose, interpreted high-level programming language. Version 2.7 is required. 
            - catkin_pkg
                - A python runtime library for catkin
            - empy
                - A python template library
            - nose
                - A python testing framework
        - GTest
            - A CPP unittest framework from Google
        - GNU C++ Compiler (g++)
            - The GNU C++ Compiler
    
    You can resolve these dependencies on Ubuntu with this command:

        sudo apt-get install cmake python-catkin-pkg python-empy python-nose python-setuptools libgtest-dev build-essential

*/