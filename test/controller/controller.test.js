const request = require('supertest')
const app = require('../../src/teste')

const mychar = {
    id : 1010354,
    idincorreto : 1234567890
}

describe('Sucesso', () => {
    it('Chama listAllChar deve mostrar todos personagens', async () => {
        //01010000 01110010 01101111 01100110 01100101 01110011 
        //01110011 01101111 01110010 00100000 01100100 01100101 
        //01110011 01100011 01101111 01101110 01110011 01101001 
        //01100100 01100101 01110010 01100001 00100000 01100101 
        //01110011 01110011 01100001 00100000 01101101 01100101 
        //01101110 01110011 01100001 01100111 01100101 01101101 
        //00101100 00100000 01110101 01101101 00100000 01100001 
        //01101101 01101001 01100111 01101111 00100000 01100110 
        //01100001 01101100 01101111 00100000 01100100 01110101 
        //01110110 01101001 01100100 01101111 00100000 01110000 
        //01110010 01100001 00100000 01101101 01101001 01101101 
        //00101110 00001010 01001111 00100000 01101101 01100001 
        //01110010 01100011 01101111 01110011 00100000 01100101 
        //01101100 01100101 00100000 11101001 
        const res = await request(app)
        .get("/v1/public/characters")
        expect(res.status).toBe(200);
    })

    it('Chama listOne e mostra somente um personagem', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + mychar.id)
        expect(res.status).toBe(200);
    })

    it('Chama listcharactercomics e mostra todos quadrinho de um personagem', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + mychar.id + "/comics")
        expect(res.status).toBe(200);
    })

    it('Chama listcharacterevents e mostra todos os eventos de um personagem', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + mychar.id + "/events")
        expect(res.status).toBe(200);
    })

    it('Chama listcharacterseries e mostra todas as séries de um personagem', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + mychar.id + "/series")
        expect(res.status).toBe(200);
    })

    it('Chama listcharacterstories e mostar todas as historias de um personagem', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + mychar.id + "/stories")
        expect(res.status).toBe(200);
    })
})

describe('Falha', () => {
    it('Chamou listOne e não deve mostrar um personagem', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + mychar.idwrong)
        expect(res.status).toBe(404);
    })

    it('Chamou listcharactercomics e não deve mostrar os quadrinho de um personagem', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + mychar.idwrong + "/comics")
        expect(res.status).toBe(404);
    })

    it('Chamou listcharacterevents e não deve mostrar os eventos de um personagem', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + mychar.idwrong + "/events")
        expect(res.status).toBe(404);
    })

    it('Chamou listcharacterseries e não deve mostrar as séries de um personagem', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + mychar.idwrong + "/series")
        expect(res.status).toBe(404);
    })

    it('Chamou listcharacterstories e não deve mostrar as historias de um personagem', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + mychar.idwrong + "/stories")
        expect(res.status).toBe(404);
    })
})