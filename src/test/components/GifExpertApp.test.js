import React from "react";
import GifExpertApp from "../../GifExpertApp";
import { shallow } from 'enzyme'

describe('Prueba de GifExpertApp', () => {

    test('Hacer match con el snapshot', () => {
        const wrapper = shallow(<GifExpertApp />) 
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de mostrar una lista de categorías', () => {

        const categories = ['Naruto', 'HxH'];
        const wrapper = shallow( <GifExpertApp defaultCategories = { categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
}) 