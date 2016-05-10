# Convert files to JSON

#Install

```
npm install allto-json
```
#How to use?

##1.CSV
```
require('allto-json').csv('sample.csv',function(err,result){
	console.log(result);
})
```
####CSV to JSON file
```
require('allto-json').csvFile('sample.csv')

```
##2.XML
```
require('allto-json').xml('sample.xml',function(error,result){
	console.log(result)
})
```
####XML to JSON file
```
require('allto-json').xmlFile('sample.xml')

```




## License

MIT 
