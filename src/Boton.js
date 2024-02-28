import PropTypes from 'prop-types';



export function Boton({text, name}) {
    console.log(text)
    return <button onClick={function(){
        console.log("Hola mundo")
    }}>
        {text}-{name}
    </button>
}

Boton.prototype = {
    text:PropTypes.string.isRequired
}
Boton.defaultProps = {
    name:"Usuario"
}