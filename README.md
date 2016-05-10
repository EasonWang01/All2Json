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

##3.xlsx
```
require('allto-json').xlsx(('sample.xlsx'),function(error,result){
	console.log(result)
})

```
####xlsx to JSON file
```


require('allto-json').xlsxFile('sample.xlsx')


```
##xls 
```

require('allto-json').xls(('sample.xls'),function(error,result){
	console.log(result)
})

```
####xls to JSON file
```

require('allto-json').xlsFile('sample.xls')


```


####XML to JSON file
```
require('allto-json').xmlFile('sample.xml')

```

#API

```
csv(filename,opts,callback)
```
opts is optional,below is available options

* encoding: default to utf8
* delimiter: default to ,
* newlint: default to \n
* quote: default to \"
* header: default to false




## License

MIT 
