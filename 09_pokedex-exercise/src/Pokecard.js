import './Pokecard.css';

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// adds zeros to pokemon id to reference their img in source url
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

const Pokecard = ({id, name, type, exp}) => {
    let imgSrc = `${POKE_API}${padToThree(id)}.png`;
    return (
        <div  className="Pokecard">
            <h1 className="Pokecard--title">{name}</h1>
            <div className="Pokecard--image">
                <img src={imgSrc} alt={name}/>
            </div>
            <div className="Pokecard--data">Type: {type}</div>
            <div className="Pokecard--data">EXP: {exp}</div>
        </div>
      );
}

export default Pokecard;