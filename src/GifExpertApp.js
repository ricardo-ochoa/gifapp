import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

import { gsap } from "gsap";


// import PropTypes from 'prop-types';

const GifExpertApp = ({ defaultCategories = ['Luffy']}) => {

    // const [categories, setCategories] = useState(['One Piece']);
    const [categories, setCategories] = useState( defaultCategories );

    // const handleAdd = (e) => {
    //     // Dos formas de aregar elementos en un arreglo en un componente:
    //     // setCategories([...categories, 'HunterxHunter']); 
    //     setCategories( cats => [...cats, 'HunterxHunter']); 
    // }

    let timeline = gsap.timeline();

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories = { setCategories }/>
            <hr></hr>

                {
                    categories.map( category => (
                        <ol timeline = {timeline} id='container'>
                        <GifGrid 
                            key = {category}
                            category = {category}
                        />
                        </ol>
                    ))
                }
        </>
    );
}

GifExpertApp.propTypes = {
    // value: PropTypes.number
}

export default GifExpertApp;