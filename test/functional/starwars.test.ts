describe('Valida o comportamento de uma funcao', ()=>{
    class Operation{
        sum(a: number,b: number): number {
            return a+b
        }
        sub(a: number,b: number): number {
            return a-b
        }
        mult(a: number,b: number): number {
            return a*b
        }
    }
    
    
    
    it('Soma de a+b', ()=>{ 
        const result: number = new Operation().sum(10,10)
        expect(result).toBe(20)
    });

    it('Soma de a-b', ()=>{
        expect(new Operation().sub(10,10)).toBe(0)
    });

    it('Multi de a*b', ()=>{
        expect(new Operation().mult(10,10)).toBe(100)
    });

});

describe('Before starwars functional test', ()=>{
    it('should return a list of planets from starwars API', async()=>{
        const {body, status} = await global.testRequest.get('/planets');
        expect(status).toEqual(200);
        expect(body).toEqual({});
    });
});