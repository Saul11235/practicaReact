// Definición del componente OtherComponent
function OtherComponent() {
    return (
        React.createElement('div', {className:"card",},
            React.createElement('h2', null, 'Another Component'),
            React.createElement('p', null, 'This is another component in the React app.')
        )
    );
}
