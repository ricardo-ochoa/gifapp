import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

const title = "One Piece";
const url = "https://giphy.com/onepiece.jpg"

const wrapper = shallow(<GifGridItem title = { title } url = { url }/>);

describe('Pruebas en GifGridItem', () =>{

    test('Debe mostrarse correctamente <GifGridItem />', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrarse correctamente la imagen y alt', () => {

        const img = wrapper.find('img');
        expect( img.prop( 'src' ) ).toBe( url );
        expect( img.prop( 'alt' ) ).toBe( title );
    });

    test('Debe de tener animate_pulse', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes( 'animate__pulse' ) ).toBe( true );
    });
    
})