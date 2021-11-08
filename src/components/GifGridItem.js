import React from 'react'
import PropTypes from 'prop-types';


export const GifGridItem = ({id, url, title }) => {


    return (
        <>
            <div className="card animate__animated animate__pulse">
                <img src= {url} alt={ title }></img>
                      
            </div>
            
        </>
    )
}

GifGridItem.prototypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
