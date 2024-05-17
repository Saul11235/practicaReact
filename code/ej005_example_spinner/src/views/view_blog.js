
console.log("ad view blog");

async function getMarkdown(nameAnimal){
  let fullUrl="./data/blog/"+nameAnimal+"/blog.md";
   try {
     console.log(getFile(fullUrl));
     return "#  Animal";
   } catch (error) {
     console.error("error en archivo",error);
     return "# Error reading file";
   };
};


function Blog() {

  let newUrl=LJS_makeUrl("","");
  let markdownContent = getMarkdown(LocalJsStorage_args);
  let htmlContent = marked.parse(markdownContent);
  

    return (
        React.createElement('div', {className:"card"},
          React.createElement('h1', null, 'View Blog + Render markdown'),
	  React.createElement("h2",null,LocalJsStorage_args),
          React.createElement('p', null, 'This is a basic React app using CDN.'),
          React.createElement('a', {className:"link",href:newUrl}, 'Return to home. <hiperlink>'),
          React.createElement('p', null, 'CONTENT'),
          React.createElement('div', {dangerouslySetInnerHTML: {__html: htmlContent}}),
        )
    );
};


//-------------------------------------------------------------------------

function view_blog(){
  let customs = ["cats","dogs"];
  if (customs.includes(LocalJsStorage_args)){
       ReactDOM.render(React.createElement(Blog), document.getElementById('root'));
  } else {
       ReactDOM.render(React.createElement(v404), document.getElementById('root'));
  };
  hideSpinner();
};

LJS_setMainFuncs("b",view_blog);

