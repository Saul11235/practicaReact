

function Blog() {

  let newUrl=LJS_makeUrl("","");
  let urlMarkdown=LJS_get("blog/"+LocalJsStorage_args+"/blog.md");
  let markdownContent = getFile(urlMarkdown)[0];
  let htmlContent = marked.parse(markdownContent);
  

    return (
        React.createElement('div', {className:"card"},
          React.createElement('h1', null, 'View Blog + Render markdown'),
	  React.createElement("h2",null,LocalJsStorage_args),
          React.createElement('p', null, 'This is a basic React app using CDN.'),
          React.createElement('a', {className:"link",href:newUrl}, 'Return to home. <hiperlink>'),
          React.createElement('a', {className:"link",href:urlMarkdown}, 'go to markdown'),
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

