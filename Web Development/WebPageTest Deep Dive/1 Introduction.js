/*
  https://webpagetest.org

  WebPageTest is a rich diagnostics tool that we can use to analyze our webpages.

  1. Introduce webpagetest
  2. Configuring tests
  3. ANalayze results
  4. Network Management
  5. Customize webpagetest
    - Gather custom metrics
  5. Webpagetest in the enterprise
*/
/*
  WebPageTest development started in 2005. It was made publicly available under the BSD license in 2008. In 2010, Google hired a guy named
  patrick to work on the project fulltime. The codebase was migrated to github in early 2011.

  WebPageTest is a synthetic testing tool. These tools use special intermittent browsers to gather their deep insights into how webpages
  perform. It even looks into the metrics in firefox nightly and chrome canary.

  You can host Webpagetest in your own private or public infrastructure but the publicly available webpagetest has been setup to allow
  testing from nearly 50 geographical locations around the world.

  "So, unfortunately, yeah, i'm not a UI designer so everything is a tab or a checkbox and it's all hidden somewhere" - Patrick Meenan

  Companies like SpeedCurve provide services that wrap around webpagetest.org but provide a "better" UI
*/
/*
  WebPageTest Architecture:
    - Webpagetest tests begin on the server themselves. 
*/
