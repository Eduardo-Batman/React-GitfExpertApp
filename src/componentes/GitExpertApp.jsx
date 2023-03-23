import React, { useState } from 'react'
import AgregarCategorias from './AgregarCategorias';
import ColeccionGif from './ColeccionGif';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([`Naruto`]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AgregarCategorias setCategorias={setCategorias} />

            <ol>
                {categorias.map((categoria) => (
                    <ColeccionGif
                        categoria={categoria}
                        key={categoria}
                    />
                ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;