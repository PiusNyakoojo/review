/*
  How to test your website in the local development environment??
    - Remember: use webpagetest to answer the question: "How do I make this page faster?"
    - Using ngrok introduces more latency, but that is a development version of your site. You're concerned with getting it faster,
    not how fast it is. If your Real User Metrics data is telling you the page is slow, you can use Webpagetest to determine how
    to get it faster.
*/
/*
  There are lots of reasons to setup your own private tests:
    - Access local network (without exposing your website to the internet)
    - No API usage limits
    - Full control of the test agent infrastructure
    - Full control of the test resuls and keep them around as long as you like
    - Integrate with log processing tools
      - like splunk
    - Several features not available on public instance
*/
/*
  To setup a private instance of Webpagetest you'll need:
    - A web server
      - Can run on any OS and a web server that supports PHP
    - One or more testing agents (that will be configured)
      - Must be setup to run Microsoft windows

  The easiest way to get an instance up and running is with Amazon's Web services
    - We'll run an EC2 instance which will run the web server's virtual machine.
    - We only need to create the server. Webpagetest itself will automatically spin up test agents when we need them.
      and even stops them when they're idle.
    - To store test results for an extended period of time, we'll create a bucket in Amazon's S3 (file storage service)
    - To access our local network from amazon we'll setup the virtual private cloud service with a VPN connection to securely join
      our infrastructure with Amazon's
*/
/*
  All confirugation for Amazon's web services begins at:
    https://aws.amazon.com/console

  
*/
