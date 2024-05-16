console.log("ad view v404");

function v404() {
    let newUrl=LJS_makeUrl("","");
    console.log(newUrl);
    console.log("-------------------------");
    console.log(LocalJsStorage_key);
    console.log(LocalJsStorage_args);
    console.log("-------------------------");
    return (
        React.createElement('div', {className:"card"},
          React.createElement('h1', null, 'View 404'),
          React.createElement('p', null, 'This is a basic React app using CDN.'),
          React.createElement('a', {className:"link",href:newUrl}, 'Return to home. <hiperlink>'),

        )
    );
};


//-------------------------------------------------------------------------

function view_404(){

  ReactDOM.render(React.createElement(v404), document.getElementById('root'));

};

LJS_setMainFuncs("v404",view_404);

