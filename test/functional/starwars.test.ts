describe('Before starwars functional test', ()=>{
    it('should return a list of planets from starwars API', async()=>{
        const {body, status} = await global.testRequest.get('/planets');
        expect(status).toEqual(200);
        expect(body).toEqual({});
    });
});