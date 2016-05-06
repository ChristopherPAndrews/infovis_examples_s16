## Server Example

This is a simple example of writing a custom server to serve data from a database on demand rather than loading an entire csv/json file full of data.


### Setup

In order to run the server, you need to have Node installed. (It is installed on basin and the lab machines)

Before you can run the server, you need to install all of the dependancies. Node has a package manager that makes this easy. Just type 

~~~
> npm install
~~~

That will install all of the files that you need.



#### To run

Type

~~~
> npm start
~~~

The server will start (don't worry about the SQLite warning), and when it is ready to go, it will tell you which port to connect on (it will be 3000).

You can then connect to the server with the URL

~~~
localhost:3000
~~~

Or, if you are running it on basin

~~~
basin.cs.middlebury.edu:3000
~~~



#### Endpoints

There are only two endpoints for the server. If you just type the URLS above, you will be served the HTML page with the visualization.

You can also request names directly. For example, you can find all of the records for my name:

~~~
localhost:3000/name/Christopher
~~~

This will return all of the records associated with my name.



