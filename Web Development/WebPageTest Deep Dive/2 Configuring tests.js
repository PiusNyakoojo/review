/*
  What should you be testings? How do you configure your tests for the best results?
*/
/*
  Testing without a meaningful understanding of your testing tools can lead you to have a false sense of security.
*/
/*
  Test based on real user metrics and analytics
*/
/*
  Basic Test Configuration:

    - URL
      - It is most important to test the parts of your site with the most usage!
      - Use a test URL based on the popularity of that particular page (which you'd know through your analytics)
    - Location
      - Latency is the single largest performance challenge on the internet.
      - The users location in relation to your servers affects this the most.
    - Browser
      - The type of browsers
    - Test Count
      - 9 max tests usually
      - Odd number of runs
      - Performance of 1st view and repeat view can be dramatically different
*/
/*
  <!-- IE Only --> Tells IE which rendering engine to use.
  <meta http equiv="X-UA-Compatible" content="IE=7">
*/
/*
  Summary
    - Base inputs on web analytics & R.U.M. (Real user monitoring data)
    - Advanced browser & device specific configuration
    - Up next: Analyzing & comparing results
*/
