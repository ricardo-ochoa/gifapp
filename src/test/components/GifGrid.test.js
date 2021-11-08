import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';

//Falsear la data para probar el Hook useFetchGifs
jest.mock('../../hooks/useFetchGifs');

describe('Debe mostrar Gifgrid correctamente', () => {

    const category = "One Punch Man";

    test('Debe de mostrar toMatchSnapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category } />) 
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category } />) 
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'p' ).exists() ).toBe(false);
    }) 
})
