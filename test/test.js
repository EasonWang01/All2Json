var assert = require('assert');
var cv2json = require('../');

describe("different data type convert into convert-json", function() {
	describe("csv", function() {
		it("should convert csv and return a json object, setting header false", function(done) {
			cv2json.csv("./example/sample.csv", function(err, result) {
				
				assert.equal(err, null);

				done();		
			})
		})

		it("should convert csv and return a json object, setting header true", function(done) {
			cv2json.csv("./example/sample.csv", {header: true}, function(err, result) {
			
				assert.equal(err, null);

				done();		
			})
		})

		it("should convert xls and return a json object", function(done) {
			cv2json.xls("./example/sample.xls", function(err, result) {
				console.log(result);
				assert.equal(err, null);

				done();		
			})
		})

		it("should convert xlsx and return a json object", function(done) {
			cv2json.xlsx("./example/sample.xlsx", function(err, result) {
				console.log(result);
				assert.equal(err, null);

				done();		
			})
		})

		it("should convert xml and return a json object", function(done) {
			cv2json.xml("./example/sample.xml", function(err, result) {
				console.log(result);
				assert.equal(err, null);

				done();		
			})
		})
	})
})