
var util =require('util')
var fs = require('fs');
var xml2js = require('xml2js');

exports.xml_json = function(file, cb) {

	var parser = new xml2js.Parser();
	fs.readFile(file, function(err, data) {
		if(err)
			cb(err);
		else
	    	 parser.parseString(data, cb)
	});
}
exports.xml_json_file = function(file){
	var parser = new xml2js.Parser();
	fs.readFile(file, function(err, data) {
		if(err)
			console.log(err);
		else
	    	parser.parseString(data,function(err,_result){
	    		if(err){
	    			console.log(err)
	    		}else{
	    			fs.writeFileSync('output.json', util.inspect(_result,{ showHidden: true, depth: null}), 'utf8');
	    		
	    		}
	    	});
	});
	
}