var DOMParser = require('xmldom').DOMParser;
var XMLSerializer = require('xmldom').XMLSerializer;
var xpath = require('xpath');
const fs = require('fs');
var serializer = new XMLSerializer();

const xmlFile = fs.readFileSync('data.xml','utf-8', (err, data)=>{
  //  var document = new DOMParser().parseFromString(data);
    //var items = document.documentElement.getElementsByTagName('CN8Code');
  //  return 2;
})
const jsonFile = fs.readFileSync('mastersheet.json','utf-8', (err, data)=>{
  //  return JSON.parse(data)
  //  console.log(JSON.parse(data).length)
})

const readFiles = function(){
  const xmlDocument =  new DOMParser().parseFromString(xmlFile);
  const jsonDocument = JSON.parse(jsonFile);

  const xmlCode = xmlDocument.getElementsByTagName("CN8Code")
  const xmlDesc = xmlDocument.getElementsByTagName("goodsDescription")

  for (var i = 0; i < xmlCode.length; i++) {
    let x = xmlCode[i].childNodes[0].data
      for (var z = 0; z < jsonDocument.length; z++) {
        if (x == jsonDocument[z].codenumber) {
            xmlDesc[i].textcontent = jsonDocument[z].desc
            console.log(xmlDesc[i].nodeValue)
          }
        }
      }

   fs.writeFileSync('newXMLFile.xml', xmlDocument, 'utf8');

}
readFiles();
