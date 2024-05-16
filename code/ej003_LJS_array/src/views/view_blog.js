
console.log("ad view blog");

function Blog() {
  console.log("lolo");
  let newUrl=LJS_makeUrl("","");
 

    return (
        React.createElement('div', {className:"card"},
          React.createElement('h1', null, 'View Blog'),
          React.createElement('p', null, 'This is a basic React app using CDN.'),
          React.createElement('a', {className:"link",href:newUrl}, 'Return to home. <hiperlink>'),
          React.createElement('p', null, 'CONTENT'),
	  React.createElement("p",null,LocalJsStorage_args)
        )
    );
};


//-------------------------------------------------------------------------

function view_blog(){
  let customs = ["cat","dog"];
  if (customs.includes(LocalJsStorage_args)){
       ReactDOM.render(React.createElement(Blog), document.getElementById('root'));
  } else {
       ReactDOM.render(React.createElement(v404), document.getElementById('root'));
  };
};

LJS_setMainFuncs("b",view_blog);

