
console.log("ad view main");

function App() {
    let var404=LJS_makeUrl("404","");
    let cat=LJS_makeUrl("b","cat");
    let dog=LJS_makeUrl("b","dog");
  

    return (
        React.createElement('div', {className:"card"},
          React.createElement('h1', null, 'View Main'),
          React.createElement('p', null, 'This is a basic React app using CDN.'),
          React.createElement('p', null, 'CONTENT 404.'),
          React.createElement('a', {className:"link",href:var404}, 'go to 404 page. <hiperlink>'),
          React.createElement('p', null, 'Blog.'),
          React.createElement('a', {className:"link",href:cat}, 'blog cat'),
          React.createElement('a', {className:"link",href:dog}, 'blog dog'),

        )
    );
};


//-------------------------------------------------------------------------

function view_main(){

  ReactDOM.render(React.createElement(App), document.getElementById('root'));

};

LJS_setMainFuncs("",view_main);
