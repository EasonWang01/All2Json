
var util =require('util')
var fs = require('fs');
var XLSX = require('xlsx');

exports.xlsx_json = function(file, opts, callback) {
	if(arguments.length === 2 && typeof arguments[1] === 'function') {
		// no opts
		callback = opts;
		opts = null;
	}

	return callback(null, XLSX.readFile(file, opts));
}

exports.xlsx_json_file = function(file, opts) {
opts=opts||null;
	

	fs.writeFileSync('output.json', util.inspect(XLSX.readFile(file, opts),{ showHidden: true, depth: null}), 'utf8');
}