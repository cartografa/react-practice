class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const isWinner = (s1 === s2) && (s2 === s3)

        return (
            <div className="Machine">
                <p style={{fontSize:'1.8rem'}}>{s1} {s2} {s3}</p>
                <p className={isWinner ? 'Machine-win': 'Machine-lose'}>
                    {isWinner ? 'You WIN!' : 'You LOSE!'}
                </p>
            </div>
        )
    }
}
 