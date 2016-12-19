/*
    Real Time Go 
        - Andreas Krennmair
*/
/*
    Garbage collected languages like Go don't usually have a good application
    for real-time performance. 
*/
/*
    Real-Time 
        - A real-time system is one that must process information and produce
        a response within a specified time, else risk severe consequences,
        including failure.
        - Any information processing activity or system which has to respond to
        externally generated input stimuli within a finite and specified period.
        (e.g. a deadline)
    
    Hard Real-time 
        - Missing the deadline can be catastrophic.
        - e.g. heart-rate monitors 

    Firm Real-time 
        - Occasional deadline misses are tolerable, but degrade 
        overall service quality, and the result is not useful 
        - e.g. telephony systems, real-time bidding, 
            robot assembly lines (bordering on hard real-time)
    
    Soft Real-time 
        - The usefulness of a result degrades after the deadline, 
        thereby degrading overall service quality 
        - e.g. computer games, video streaming, climate control systems 

    Real-Time Bidding 
        - Fully automated second-price auctions for individual ad impressions 
        with strict deadlines of typically 100 to 120 ms 
*/
/*
    
*/