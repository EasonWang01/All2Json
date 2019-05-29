
const util = require('util')
const fs = require('fs');
const XLSX = require('xlsx');

exports.xlsx_json = function (file, opts, callback) {
	if (arguments.length === 2 && typeof arguments[1] === 'function') {
		callback = opts;
		opts = null;
	}

	return callback(null, XLSX.readFile(file, opts));
}

exports.xlsx_json_file = function (file, opts) {
	opts = opts || null;
	fs.writeFileSync('output.json', util.inspect(XLSX.readFile(file, opts), { showHidden: true, depth: null }), 'utf8');
}