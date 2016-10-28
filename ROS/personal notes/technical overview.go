/*
    http://wiki.ros.org/ROS/Technical%20Overview
*/

/*
    This technical overview goes into greater detail about the implementation of ROS. Most ROS users do not need 
    to know these details, but they are important for those wishing to write their own ROS client libraries or 
    those wishing to integrate other systems with ROS. 

    The technical overview assumes that you are already familiar with the ROS system and its concepts. For example, 
    the http://wiki.ros.org/ROS/Concepts provides an overview of the Computation Graph architecture, including 
    the role of the ROS Master and nodes. 
*/

/*
    1. Master

    The Master is implemented via XMLRPC, which is a stateless, HTTP-based protocol. XMLRPC was chosen primarily
    because it is relatively lightweight, does not require a stateful connection, and has wide availability 
    in a variety of programming languages. For example, in Python, you can start any Python interpreter and 
    begin interacting with the ROS Master

    // python

    from xmlrpclib import ServerProxy
    import os 
    master = ServerProxy(os.environ['ROS_MASTER_URI'])
    master.getSystemState('/')

    [1, 'current system state', [[['/rosout_agg', ['/rosout']]], [['/time', ['/rosout']], 
    ['/rosout', ['/rosout']], ['/clock', ['/rosout']]], [['/rosout/set_logger_level', 
    ['/rosout']], ['/rosout/get_loggers', ['/rosout']]]]]

    The Master has registration APIs, which allow nodes to register as publishers, subscribers, and service 
    providers. The Master has a URI and is stored in the ROS_MASTER_URI environment variable. This URI 
    corresponds to the host:port of the XML-RPC server it is running. By default, the Master will bind to 
    port 11311.
*/
/*
    7. Establishing a service connection

        1. Service registers with Master
        2. Service client looks up service on the Master
        3. Service client creates TCP/IP to the service
        4. Service client and service exchange a Connection Header
        5. Service client sends serialized request message
        6. Service replies with serialized response message
*/
