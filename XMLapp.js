var DOMParser = require('xmldom').DOMParser;
var XMLSerializer = require('xmldom').XMLSerializer;
var xpath = require('xpath');
const fs = require('fs');
var serializer = new XMLSerializer();

const xmlFile = fs.readFileSync('public/data.xml','utf-8', (err, data)=>{
  //  var document = new DOMParser().parseFromString(data);
    //var items = document.documentElement.getElementsByTagName('CN8Code');
  //  return 2;
})
const jsonFile = fs.readFileSync('public/mastersheet.json','utf-8', (err, data)=>{
  //  return JSON.parse(data)
  //  console.log(JSON.parse(data).length)
})

const readFiles = function(){
  const xmlDocument =  new DOMParser().parseFromString(xmlFile);
  const jsonDocument = JSON.parse(jsonFile).length;
  console.log(jsonDocument, xmlDocument)
}
readFiles();
