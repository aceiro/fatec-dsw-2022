import { describe } from "node:test";
import supertest from "supertest";
describe('Before starwars functional test', ()=>{
    it('should return a list of planets from starwars API', async()=>{
        const {body, status} = await supertest(app).get('/planets');
        expect(status).toBe(200);
        expect(body).toBe({});
    });
});