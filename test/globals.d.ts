// configuração do globals do Node.js para
// realizar os testes unitários

declare global {
    //eslint-disable-next-line no-var
    var testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
  
  export {};