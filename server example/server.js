var http = require('http'),
  express = require('express'),
  app = express(),
  server = http.createServer(app);

var knex = require('knex')({
      client: 'sqlite3',
      connection: {
        filename: "./names.db"
      }
    });


app.get("/", function(request, response){
    response.sendFile("names_vis.html", {root:__dirname});
});

app.get("/name/:name", function(request, response){
  knex('names').whereRaw("name LIKE ?", request.params.name).then(
    function(rows){
        response.send(rows);
    }
  );

});

server.listen( 3000 );

console.log( 'Listening on port %d', server.address().port );
