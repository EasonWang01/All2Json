# Convert files to JSON


![allto_json](https://cloud.githubusercontent.com/assets/11001914/15138634/bc965fa4-16c3-11e6-8c26-b312165714ac.gif)


#Install

```
npm install allto-json
```
#How to use?
| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
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
##4.xls 
```

require('allto-json').xls(('sample.xls'),function(error,result){
	console.log(result)
})

```


####xls to JSON file
```
require('allto-json').xlsFile('sample.xml')

```

#API

##1.CSV
```
csv(filename,opts,callback)
```
opts is optional,below is available options

* encoding: default to utf8
* delimiter: default to ,
* newlint: default to \n
* quote: default to \"
* header: default to false
```
csvFile(filename,opts)
```
no callback require,opts is same as above.

##2.XML
```
xml(filename,callback)
```
no opts
```
xml(filename)
```
no callback

##3.xlsx
```
xlsx(filename, opts, callback)
```
opts is optional,below is available options

second colume shows default value
 
* cellFormula	true	Save formulae to the .f field **
* cellHTML	true	Parse rich text and save HTML to the .h field
* cellNF	false	Save number format string to the .z field
* cellStyles	false	Save style/theme info to the .s field
* cellDates	false	Store dates as type d (default is n) **
* sheetStubs	false	Create cell objects for stub cells
* sheetRows	0	If >0, read the first sheetRows rows **
* bookDeps	false	If true, parse calculation chains
* bookFiles	false	If true, add raw files to book object **
* bookProps	false	If true, only parse enough to get book metadata **
* bookSheets	false	If true, only parse enough to get the sheet names
* bookVBA	false	If true, expose vbaProject.bin to vbaraw field **
* password	""	If defined and file is encrypted, use password **


```
xlsxFile(filename,opts)
```
opts is same as above.

##4.xls

```
xls(filename, opts, callback)
```
opts is optional,below is available options

second colume shows default value


* cellFormula	true	Save formulae to the .f field **
* cellNF	false	Save number format string to the .z field
* cellStyles	false	Save style/theme info to the .s field
* sheetRows	0	If >0, read the first sheetRows rows **
* bookFiles	false	If true, add raw files to book object **
* bookProps	false	If true, only parse enough to get book metadata **
* bookSheets	false	If true, only parse enough to get the sheet names
* password	""	If defined and file is encrypted, use password **

```
xls(filename, opts)
```
opts is same as above



-----
you can use opts like this
```
csv(filename,{header:true},callback)
```


## License

MIT 
