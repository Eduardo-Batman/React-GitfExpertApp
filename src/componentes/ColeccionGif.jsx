import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import ColeccionGifItem from './ColeccionGifItem';

const ColeccionGif = ({ categoria }) => {

    const { data: imagenes, loading } = useFetchGifs(categoria);

    return (
        <>
            <h3 className="animate__animated animate__bounce">{categoria}</h3>

            {loading && <p>Cargando...</p>}

            <div className='card-grid'>

                {
                    imagenes.map((img) => (
                        <ColeccionGifItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}

export default ColeccionGif;
