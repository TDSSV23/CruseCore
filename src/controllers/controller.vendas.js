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
            VendaModel.createVendas(dados, function (err, result) {
                if (err) {
                    console.error('Erro ao cadastrar a Venda: ', err);
                    return res.status(500).json({ error: "Ocorreu um erro ao cadastrar a Venda." });
                }

                return res.status(201).json({
                    message: "Venda inserida com sucesso",
                    data: {
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

    static editVenda(req, res) {
        const dados = req.body;
        const id_cliente = req.params.id_cliente;
        console.log(id_cliente)

        try {
            VendaModel.editVenda(dados, id_cliente, function (err, result) {
                if (err) {
                    console.error('Erro ao atualizar a Venda: ', err);
                    return res.status(500).json({ error: "Ocorreu um erro ao atualizar a Venda." });

                }

                return res.status(200).json({
                    message: "Venda atualizada com sucesso",
                    data: dados
                });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro Interno no servidor." });
        }
    }

    static removeVenda(req, res) {
        const id = req.params.id

        try {
            VendaModel.removeVenda(id, function (err, result) {
                if (err) {
                    console.error("Erro ao deletar a Venda: ", err);
                    return res.status(500).json({ error: "Ocorreu um erro ao deletar a venda" });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "A venda não foi encontrado" })
                }

                return res.status(200).json({ message: "A Venda foi deletada com sucesso.", data: { id } });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor." });
        }

    }


} export default VendaController;