### Educational Geography App

Brief:

The BBC are looking to improve their online offering of educational content by developing some interactive browser applications that display information in a fun and interesting way. Your task is to make an a Minimum Viable Product or prototype to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app.



#### MVP

* Home page to have regions(aka continents) > sub regions > list of countries displayed relevant to that subregion > country clicked brings up modal with additional info.

* Modal to display each country's info

* Each country has flag as icon

* Each country displays certain info: capital, etc.

* Accessing different endpoints of the API for different regions to minimise latency (reduce calling on the server)



#### Possible Extensions

* Vue Leaflet to add Maps

* Search bar on home page?

* Separate Fun Fact feature - created our own db with a certain number of facts that can be randomised and give the user the option to save the ones they like (Use a compass database to create the list so we can add facts with little issue).

* Separate quiz feature - name the country by flag, capital? (picked by continent or whole world?)



### Running the site locally

1. In MongoDB create a database called `country_facts`
  
2. Once you've pulled the code down from github go into the "client" and "server" folders and run `npm i` in both folders

3. In the server folder seed the database `npm run seeds`

4. Run the Express server, `npm run server:dev` and visit this url to make sure the data from the seeds file is there, `http://localhost:3000/api/facts/`

* Now you can now either un the client locally going into the client folder running `npm run serve` then go most likely to `http://localhost:8080/` in your browser

* OR you could run a production version of the site which has performance improvements such as CSS and JS compressed.


#### Running the production version locally

1. Do the steps 1-4 above 

2. Install a local server globally `npm install -g serve`
   
3. Create your dist folder (production site folder) running `npm run build` in the client folder

4. Now do this `serve -s dist` and go to the recommended link to see the site eg `http://localhost:5000`