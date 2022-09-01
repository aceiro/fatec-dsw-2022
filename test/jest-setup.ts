import { SetupServer } from "@src/server";
import supertest from "supertest";

beforeAll(()=>{
    // configuração inicial do servidor que criamos
    // criação do setup
    const server = new SetupServer()
    server.init()

    global.testRequest = supertest(server.getApp())
    console.log('Executando o beforeAll()')
});