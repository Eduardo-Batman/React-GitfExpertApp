import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AgregarCategorias = ({ setCategorias }) => {

    const [valorInput, setValorInput] = useState(``);

    const cambioInput = (e) => {
        setValorInput(e.target.value);
    }

    const inputEnviar = (e) => {
        e.preventDefault();

        if (valorInput.trim().length > 2) {
            setCategorias(cats => [valorInput, ...cats]);
            setValorInput(``);
        }
    }

    return (

        <form onSubmit={inputEnviar}>
            <input
                type="text"
                value={valorInput}
                onChange={cambioInput}
                placeholder="Que Te Gustaria..?"
            />
        </form>

    )
}

AgregarCategorias.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AgregarCategorias;