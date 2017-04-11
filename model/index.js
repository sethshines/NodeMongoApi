var fs = require('fs');
var mongoose = require('mongoose');
var models = ['User'];
models.forEach(function(model){
    module.exports[models] = require('./' + model);
})
module.exports[models]
// var models = {};
// var obj = {}
// var q = require('q');


// var getFileNames = (function() {
//     var deffer = q.defer();
//     fs.readdir(__dirname, function (err, filenames) {
//         filenames.forEach(function (filename) {
//             if (filename != 'index.js') {
//                 var modelName = filename.slice(0, filename.indexOf('.'));
//                 module.exports[models] = require('./' + filename);
//             }
//         });

//         deffer.resolve(obj);

//         return deffer.promise;
//     });
// })();