import { StarwarsController } from "./controllers/starwars";
import { Server } from "@overnightjs/core";
import bodyParser from "body-parser";
import { Application } from "express";

export class SetupServer extends Server{
    constructor(private port=3000){
        super()
    }

    public init(): void{
        this.setupExpress()
        this.setupController()
    }

    private setupExpress(): void {
        // método para configurar o Express
        // esse método usa um processador de JSON
        // essa configuração é padrão em ambientes 
        // com Node.js + Typescript + Express
        this.app.use(bodyParser.json())
    }

    private setupController(): void {
        // Criação de uma instancia do StarwarsController
        // adicionar essa instancia para servidor (server)
        // o servidor (server) recebe uma lista de instancias
        const starwarsController = new StarwarsController()
        this.addControllers([starwarsController])
    }

    // criar um método para resolver o getApp()
    public getApp(): Application {
        return this.app
    }

}