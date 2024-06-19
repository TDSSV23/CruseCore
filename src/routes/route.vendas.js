import { Router } from "express";
import VendaController from "../controllers/controller.vendas.js";

const routeVendas = Router();

routeVendas.get("/vendas", VendaController.getAllVenda);
routeVendas.post("/vendas", VendaController.createVenda);
routeVendas.put("/vendas/:id_cliente", VendaController.editVenda);
routeVendas.delete("/vendas/:id", VendaController.removeVenda);

export default routeVendas