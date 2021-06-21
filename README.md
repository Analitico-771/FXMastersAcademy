

1. The Purpose of the app/website that we are building
- FX Masters Academy is a provider of training in the Forex Trading Industry.  We provide Forex Trading Training with a library of video content and live instructor training.

We ran into an issue with content security policy blocking embedded <iframe> from Vimeo.

****
"Refused to load the script 'https://player.vimeo.com/api/player.js' because it violates the following Content Security Policy directive: "script-src 'self'". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback."
****

We asked our instructors and researched many articles without any success.  The resources at the end of this readme file has links to some of the places we went to try to fix the issue.  The issue seems to only affect the backend view.  The template loads <iframe> with no issues when used just on a front end as html files.

The objective of the project was to securely connect to a database to store user information, encrypt the password, and retrieve the information for authentication and this was achieved.

2. Layout and user functionality 
    done with user functionality

3. M.V.P

    *Provide the following:
    - Easy to use website with login/password authentication
    - Access restricted to user level Basic and Intermediate for Students
    - Staff and teachers have access to all content
    - Build out all pages with buttons
    - All buttons working and navigates to designated page


4. Color schemes 

 - This project was focused on back-end to front-end user authentication so we focused on functionality and used a template for the site and css

* Title FX Masters Academy (with link to live Demo)

* Overview (description of your app)

This site is our first full stack development project for our cohort. Our group decided to focus on a training website and currency markets. With all the news coverage and excitement we figured its a great idea to create a site for FOREX Markets trading education.  With the rapid spread of crypto and currency trading news, more and more people are interested in getting into these markets.  We want people to learn and experience trading the markets in a safe and interactive manner. 

* Screen Shot of App
    * ![](./images/lastshot.jpg)
    * ![](./images/lastshot.jpg)


* Tech Stack
    * Languages: CSS, JS, HTML, Postgres SQL, Sequelize, bcryptjs
    * Other: AJAX, JSON, Photoshop, Postman 

* Stretch Goals (Future)
    * Connect a payment processor
    * Connect database to payment processor
    * Develop code for "forgot password"

* Code Snippets (show some impressive code)
    * This is part of the code to discriminate what users see in the fxacademy content page.  This code tells the user which level they are and what content they can access.
    
    <h1 class="fxh1">Welcome to FxMasters Trading Academy: <%= `${fName}` %>!</h1>
	
	<% if (roleID == 1) { %>
			<h2 class="fxh2">You have access to Basic trading training</h2>

	<% } %><% if (roleID == 2) { %>
		<h2 class="fxh2">You have access to Basic and Intermediate trading training</h2>
	<% } %>

	<% if (roleID == 3 || roleID == 4) { %>
		<h2 class="fxh2">You are Staff</h2>
	<% } %>


* Screenshots Our App

    *  planning phase for database layout 
    * ![](./images/initial_project_wire_diagram.jpg)
    * ![](./images/final_project_wire_diagram.jpg)
    * 

* Logo

    * ![](./images/final-3.png)


* Developer Team
    * Jose Tollinchi
    * https://github.com/AnaIitico
    * Postgres Integration, JS, User Authentication
    * bcryptjs, Css, Js, Html, Postman
    
    * Mike Williams
    * https://github.com/mikej803
    * Postgres Integration, JS, User Authentication
    * bcryptjs, Sequelize, Js, Html, Postman
    
    * Brandon Stinson
    * https://github.com/Bxpnds
    * Quality Assurance, Postgres Integration, HTML
    * bcryptjs, Sequelize, Js, Html
    
    * Syreeta Greene
    * https://github.com/Sr-GrEeNe18
    * Design, User functionality, Quality Assurance
    * bcryptjs, Sequelize, Js, Html


* Resources

    - SmartEDU Template
    - https://www.free-css.com/free-css-templates/page252/smartedu
    
    * Responsiveness Resources
    - https://www.w3schools.com/html/html_responsive.asp

    Content Security Policy
     - https://content-security-policy.com/examples/express-js/
     - https://stackoverflow.com/questions/23523420/embed-vimeo-video-with-the-html5-video-element-and-without-iframe
     -https://github.com/Rob--W/cors-anywhere
     - installed npm i cors
