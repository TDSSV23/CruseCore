import { Router } from "express";
import VendaController from "../controllers/controller.vendas.js";

const routeVendas = Router(); 

routeVendas.get("/vendas" , VendaController.getAllVenda);

export default routeVendas