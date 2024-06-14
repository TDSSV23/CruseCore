import VendaModel from "../models/model.vendas.js";

class VendaController {

    static getAllVenda(req, res) {
        try {
            VendaModel.getAllVendas(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "Ocorreu um erro ao buscar os Vendas." });
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

    static createVenda(req, res) {
        const dados = req.body;

        try {
            VendaModel.createVenda(dados, function (err, result) {
                if (err) {
                    console.error('Erro ao cadastrar a Venda: ', err);
                    return res.status(500).json({ error: "Ocorreu um erro ao cadastrar a Venda." });
                }

                return res.status(201).json({
                    message: "Venda inserida com sucesso",
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
    

} export default VendaController;