class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Cher"/>
                <Hello 
                    to="Ringo" 
                    from="Paul"
                    bangs={4}
                    img="https://www.reactiongifs.com/wp-content/uploads/2013/07/ralph-wave.gif"
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
 