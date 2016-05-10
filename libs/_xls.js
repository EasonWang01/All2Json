
var util =require('util')
var fs = require('fs');
var XLS = require('xlsjs');

exports.xls_json=function (file, opts, callback) {
	if(arguments.length === 2 && typeof arguments[1] === 'function') {
		
		callback = opts;
		opts = null;
	}

	return callback(null, util.inspect((XLS.readFile(file, opts)),{ showHidden: true, depth: null}));
}

exports.xls_json_file =function(file, opts) {
	opts = opts || null;
	fs.writeFileSync('output.json', util.inspect(XLS.readFile(file, opts),{ showHidden: true, depth: null}), 'utf8');
	
}