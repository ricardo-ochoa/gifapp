import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    })


    //useEffect ayuda a que se ejecute una vez cuando se renderiza el componente.
    useEffect(() => {
        getGifs( category )
            .then( imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            });
    }, [ category ])   

    return state;
}
