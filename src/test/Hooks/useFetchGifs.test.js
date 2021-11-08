import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// Este complemento instalado sirve para probar Hooks
import { renderHook } from '@testing-library/react-hooks';

describe('Prueba del Hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        

        //Así se desestructura para evaluar el renderHook Instalado
        const { result,waitForNextUpdate } = renderHook( () => useFetchGifs('Naruto'));
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual( [] );
        expect(loading).toEqual( true );
    })

    test('Debe de retornar un arreglo como resultado', async() => {
        
                //Así se desestructura para evaluar el renderHook Instalado
                const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Naruto'));
                await waitForNextUpdate();
                const { data, loading } = result.current;
        
                expect(data.length).toBe( 12 );
                expect(loading).toEqual( false );

    })
    
    
})
