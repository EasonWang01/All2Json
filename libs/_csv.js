
var util =require('util')
var fs = require('fs');
var csv = require('csvstream');

exports._csv_json = function(file, opts, callback) {
	var fstream = fs.createReadStream(file);
	if(arguments.length === 2 && typeof arguments[1] === 'function') {
		
		callback = opts;
		opts = null;
	}

	return fstream.pipe(csv(opts, callback));
};

exports.csv_json_file =function(file, opts) {
	var fstream = fs.createReadStream(file);
	opts = opts||null;

	return fstream.pipe(csv(opts,function(err,result){
		if(err){
			console.log(err)
		}else{
			fs.writeFileSync('output.json', util.inspect(result,{ showHidden: true, depth: null}), 'utf8');
		}
	}));
}