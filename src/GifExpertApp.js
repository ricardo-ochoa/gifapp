import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    // const handleAdd = (e) => {
    //     // Dos formas de aregar elementos en un arreglo en un componente:
    //     // setCategories([...categories, 'HunterxHunter']); 
    //     setCategories( cats => [...cats, 'HunterxHunter']); 
    // }

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories = { setCategories }/>
            <hr></hr>


            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        key = {category}
                        category = {category}
                        />
                    ))
                }
            </ol>
        </>
    );
}

GifExpertApp.propTypes = {
    // value: PropTypes.number
}

export default GifExpertApp;