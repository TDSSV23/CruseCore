import {} from "dotenv/config.js";
import express from 'express';
import cors from 'cors';
import routeCliente from "./routes/route.cliente.js";
import routeVendas from "./routes/route.vendas.js";
import routeTeste_Direcao from "./routes/route.testes_direcao.js";
import routeVeiculo from "./routes/route.veiculos.js";

const app = express();

app.use(express.json());
app.use(cors());

//rotas
app.use(routeCliente)
app.use(routeVendas)
app.use(routeVeiculo)
app.use(routeTeste_Direcao)

//levanta o server
app.listen(process.env.PORT, function(){
    console.log('Servidor executando na porta 3001')
})