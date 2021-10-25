import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const  AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSumit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit = { handleSumit }>
            <h2>Add Category</h2>
            <input
                type='text'
                value={ inputValue }
                onChange={ handleInputChange }
            ></input>
        </form>
    )
}

AddCategory.prototypes = {
    setCategories: PropTypes.func.isRequired
}