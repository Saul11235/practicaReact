// get File

function getFile(url) {
  return ["# lolo",true];
 
  let fetchFile=fetch(url);
  console.log("ini------------------------");
  console.log(fetchFile);

  try {
    fetchFile.then(response => {
      if (!response.ok) {
	return ["000",false];
      };
      return ["111",true];
    })
    .then(data => {
      // Hacer algo con los datos obtenidos
      console.log(data);
      return [data,true];
    })
    .catch(error => {
      console.log(error);
      return ["222",false];
    });
  } catch (error) {
      console.log(error);
      return ["333",false];
  };

  console.log("fin------------------------");

}

// get content of file
// return [content, true] if file exists and is text
// return ["", false]

