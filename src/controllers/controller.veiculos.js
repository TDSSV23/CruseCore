import VeiculoModel from "../models/model.veiculos.js";

class VeiculoController {

    static getAllVeiculo(req, res) {
        try {
            VeiculoModel.getAllVeiculos(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "Ocorreu um erro ao buscar os Veiculos." });
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

    static createVeiculo(req, res) {
        const dados = req.body;

        try {
            VeiculoModel.createVeiculos(dados, function (err, result) {
                if (err) {
                    console.error('Erro ao cadastrar o Veiculo: ', err);
                    return res.status(500).json({ error: "Ocorreu um erro ao cadastrar o Veiculo." });
                }

                return res.status(201).json({
                    message: "Veiculo inserido com sucesso",
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

    static editVeiculo(req, res) {
        const id = req.params.id;
        const dados = req.body

        try {
            VeiculoModel.editVeiculos(dados, function (err, result) {
                if (err) {
                    console.error("Erro ao editar o Veiculo", err);
                    return res.status(500).json({ error: "Ocorreu um erro ao editar o Veiculo." });
                }

                return res.status(200).json({
                    message: "Veiculo editado com sucesso",
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

    static removeVeiculo(req, res) {
        const id = req.params.id

        try {
            VeiculoModel.removeVeiculos(id, function (err, result) {
                if (err) {
                    console.error("Erro ao deletar o Veiculo: ", err);
                    return res.status(500).json({ error: "Ocorreu um erro ao deletar o Veiculo" });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "O Veiculo não foi encontrado" })
                }

                return res.status(200).json({ message: "O Veiculo deletado com sucesso.", data: { id } });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor." });
        }
    }



} export default VeiculoController;