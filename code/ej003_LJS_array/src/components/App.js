// Definición del componente App


function App() {

    return (
        React.createElement('div', {className:"card"},
        React.createElement('h1', null, 'Hello, React!'),
	bodyCard(),
        React.createElement('p', null, 'This is a basic React app using CDN.')
        )
    );
}
