// get File
//const fetch = require('node-fetch');

var getFile_promise= fetch("");


function getFile(url) {
  // create new promise
  getFile_promise=fetch(url);
  console.log(getFile_promise);
  //------
  var textFile="";
  var isOk=false;
  var haveData=false;
  //------
  getFile_promise.then(
    response=>{
      return response.text();
    }
  ).then(
    data=>{
      isOk=true
      textFile=""+data;
      haveData=true
      console.log(textFile)
      console.log(typeof textFile)
      console.log(textFile)
      console.log(haveData)
    }
  ).catch(
    error=> {
      isOk=false
      console.error(error);
      haveData=true;
    }
  )
  // loop-------------------------
  function makeTime() { return new Promise(resolve => setTimeout(resolve,5))};

  function loopTime() {
    let contador=0;
    function viewData() {
      console.log("bucle",contador);
      contador+=1;
      if (!haveData) {
	makeTime().then(viewData)
      };
    };
    viewData();
  }
  //------------------------------
  loopTime();
  //------------------------------
  //------------------------------
  // infinite loop
  let response =[]
  // return ------------------------
    if (isOk) { response= await [textFile,true];
    } else { response=[url,false];
    };
  console.log(response);
  //--------------------------------
  return response;

   };
    

// get content of file
// return [content, true] if file exists and is text
// return ["", false]
