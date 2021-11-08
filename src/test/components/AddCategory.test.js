import React from 'react';
import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';


describe('Pruebas en AddCategory', () =>{

    // Jest (jest.fn) nos ayuda a saber si una función es llamada, cómo fue llamada, cuantas veces etc...
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    // limpiar las simulaciones de los componentes, hay que inicializar el componente de nuevo.
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })


    test('Debe mostrarse correctamente <AddCategory />', () => {
    
        expect( wrapper ).toMatchSnapshot();
    })

    test('Detectar cambios en la caja de text', () => {
    
        const input = wrapper.find('input');
        const value = "HxH"
        // Se busca target por el evento "handleInputChange(e)" en el componente 
        input.simulate('change', {target: { value }});
    })

    test('No debe de postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        //1. Simular el inputChange
        const value = "HxH"
        
        wrapper.find('input').simulate('change', {target: { value }});

        //2. Simular el submit
        //3.setCategories se debe de haber llamado
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        expect( setCategories ).toHaveBeenCalled();
        

        //4. El valor del input debe de estar ''
        expect( wrapper.find('input').prop('value') ).toBe( '' );

        //Extra ejemplos para evaluar .toHaveBeenCalled
        //Número de veces que se llama
        expect( setCategories ).toHaveBeenCalledTimes( 1 );
        //Si se llama con una función
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
    })
    
})