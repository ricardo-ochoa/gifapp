import { getGifs } from "../../helpers/getGifs";

describe('Prueba con getGifs Fetch', () => {

    test('debe de tener 12 elementos', async() => {

        const gifs = await getGifs('One Piece')

        expect( gifs.length ).toBe( 12 );
    });

    test('Si no tiene elementos', async() => {

        const gifs = await getGifs('')
        expect( gifs.length ).toBe( 0 );
    });
});