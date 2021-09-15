function getMood() {
    const moods = ['Angry', 'Hungry', 'Silly', 'Pensative', 'Anxious', 'Peaceful']
}

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <img src="https://i.blogs.es/936cb7/hdwaker/450_1000.jpg" />
                <h2>My Current (random) Mood is: {getMood()}</h2>
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'))