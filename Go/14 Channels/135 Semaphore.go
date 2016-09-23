/*
    A trivial Semaphore is a plain variable that is changed (for example, incremented or decremented, 
    or toggled) depending on programmer-defined conditions. The variable is then used as a condition 
    to control access to some system resource. 

    Rather than using wg.Wait(), we can use semaphores to signal that a process is completed, or that
    we can move on to some other part of the function. 
*/