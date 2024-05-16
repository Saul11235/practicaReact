
console.log("ad view main");

function App() {
    let var404=LJS_makeUrl("404","");
    let cat=LJS_makeUrl("b","cats");
    let dog=LJS_makeUrl("b","dogs");
  

    return (
        React.createElement('div', {className:"card"},
          React.createElement('h1', null, 'View Main'),
          React.createElement('p', null, 'This is a basic React app using CDN.'),
          React.createElement('p', null, 'CONTENT 404.'),
          React.createElement('a', {className:"link",href:var404}, 'go to 404 page. <hiperlink>'),
          React.createElement('p', null, 'Blog.'),
          React.createElement('a', {className:"link",href:cat}, 'blog cats'),
          React.createElement('a', {className:"link",href:dog}, 'blog dogs'),

        )
    );
};


//-------------------------------------------------------------------------

function view_main(){

  ReactDOM.render(React.createElement(App), document.getElementById('root'));
  hideSpinner();


};

LJS_setMainFuncs("",view_main);

