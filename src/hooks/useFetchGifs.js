import { useEffect, useState } from "react"
import gif from "../funciones/Gifs";

const useFetchGifs = (categoria) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        gif(categoria)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })

            });

    }, [categoria])


    return state;
}

export default useFetchGifs
