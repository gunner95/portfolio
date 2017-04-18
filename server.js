/**
 * Created by pratyushbansal on 18/04/17.
 */

var static = require('node-static');
var file = new static.Server('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);