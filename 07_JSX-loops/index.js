class App extends React.Component {
    render() { 
        return (
            <div>
                <Friend
                    name="Elton"
                    hobbies={['Piano', 'Singing', 'Dancing']}
                />
                <Friend
                    name="Frida"
                    hobbies={['Painting', 'Drawing']}
                />
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))