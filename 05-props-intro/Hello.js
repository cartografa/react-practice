class Hello extends React.Component {
    render() {
        let bangs = "!".repeat(this.props.bangs)
        return ( 
            <div>    
                <h1>Hi {this.props.to} from {this.props.from}{bangs}</h1>
                <img src={this.props.img}/>
            </div>
        )
    }
} 