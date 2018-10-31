# zooplus QA


## 1.1 Q: What are your thoughts when considering a frontend framework like Bootstrap for a project? 
There are multiple things to consider, here are the main 3: 
1. Reduced development time, we dont have to build from scratch.
2. Updates to the framework, some update may not be backwards compatible. (see v4 from Bootstrap)
3. Loading assets/code the project will not ever use.

## 1.3 Q: When does it (normally) make sense to use CSS preprocessor like LESS/SASS and what are the biggest benefits you see? 
Every time, every project. Preprocessors help us structure CSS component like, making the code more reusable and extandable.

## 2.0 Q: How do you structure / encapsulate your JS code if your NOT building on top of a JS lib/framework like AngularJS, ReactJS etc.?
Component like structuring - individual configurable/extendable 'plugins' for each feature, then call the plugins with specific configuration in a main file which runs at load time.

        **Example 1:**
        //component.js file
        const Component = function(options){
          this.name = options.name;
          this.id   = options.id;
          ....
        };

        Component.prototype = {
          doSomething: function {
            ...
          }
        };

        //main.js file
        //Init the component with new configuration
        const component = new Component({
          id: 1234,
          name: "New component name"
        });
        component.doSomething();
        console.log(component); //Component {id: 1234, name: "New component name"};

        **Example 2:**
        //search.js file
        function validateSearch(query){
          ...
        }

        function search(query){
          if(validateSearch(query)){
            ...
          }
        } 
        
        //main.js file
        function doSearch(){
          const button = document.getElementById('searchButton');
          const query = document.getElementById('searchBar').value;

          button.addEventListener('click', function(e){
            e.preventDefault();
            search(query);
          });
        }

        **Example 3:**
        //Self executing anonymus function
        //Encapsulate jQuery
        (function($){
          function doStuff(){
            ....
          }
          function doStuffAndMore(){
            doStuff();
            ...
          }
          doStuffAndMore();
        }(JQuery);


## 2.1 Q: When does it make sense to use a jQuery plugin script vs. implementing a functionality yourself? 
Honestly, never! But when your pressed by time and costs a good plugin can save the day.


## 2.4 Q: What are some (personal) principles you follow when working with JS DOM event listeners to avoid bad page performance, ‘memory leaks’ etc.? 
Make the listeners 'passive', remove the listeners once they are not needed, assign the event listener on id's and make use of event delagation and dynamic dispatch. 


## 3.2 Q: When does it make sense to submit a form as a non-AJAX (regular) request?
Usually when following submission we need to reload the page or we intend to have the user end up at a different page.


## 3.3 Q: What relevance does it have for the frontend JS-code that the server endpoints respond with different HTTP codes? Which HTTP codes do you consider most important? 
Depending on the implementation it can have no impact, result in a blank page or brake the code (infinite loop or errors). 2xx, 4xx, 5xx are the most important, from which 200, 404 and 500 are the most common.


