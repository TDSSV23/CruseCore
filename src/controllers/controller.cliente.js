import ClienteModel from "../models/model.cliente.js";

class ClienteController {

    static getAllCliente(req, res) {
        try {
            ClienteModel.getAllClientes(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "Ocorreu um erro ao buscar os Clientes." });
                }

                return res.status(200).json(result);
            });

        } catch (error) {
            // Captura qualquer exceção não tratada
            console.error(error);
            // Retorna uma resposta de erro 500
            res.status(500).json({ error: "Erro Interno no servidor." });
        }
    }

    static createCliente(req, res) {
        const dados = req.body;

        try {
            ClienteModel.createCliente(dados, function (err, result) {
                if (err) {
                    console.error('Erro ao cadastrar pedido: ', err);
                    return res.status(500).json({ error: "Ocorreu um erro ao cadastrar o pedido." });
                }

                return res.status(201).json({
                    message: "Pedido inserido com sucesso",
                    data: {
                        id: result.insertId,
                        dados
                    }
                });
            });
        } catch (error) {
            // Captura qualquer exceção não tratada
            console.error(error);
            // Retorna uma resposta de erro 500
            res.status(500).json({ error: "Erro Interno no servidor." });
        }
    }


    static editCliente(req, res) {
        const id = req.params.id;
        const dados = req.body;

        try {
            ClienteModel.editCliente(dados, function (err, result) {
                if (err) {
                    console.error("Erro ao editar o Cliente", err);
                    return res.status(500).json({ error: "Ocorreu um erro ao editar o Cliente." });
                }

                return res.status(200).json({
                    message: "Cliente editado com sucesso",
                    data: {
                        id, dados
                    }
                });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor." });
        }

    } 
        
    

    




} export default ClienteController;



