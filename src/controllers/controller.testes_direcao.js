import Teste_DirecaoModel from "../models/model.testes_direcao.js";

class Teste_DirecaoController {

    static getAllTeste_Direcao(req, res) {
        try {
            Teste_DirecaoModel.getAllTestes_Direcao(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "Ocorreu um erro ao buscar os Teste." });
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

    static createTeste_Direcao(req, res) {
        const dados = req.body;

        try {
            Teste_DirecaoModel.createTestes_Direcao(dados, function (err, result) {
                if (err) {
                    console.error("Erro ao editar os Testes", err);
                    return res.status(500).json({ error: "Ocorreu um erro ao editar o Teste." });
                }

                return res.status(200).json({
                    message: "O Teste foi editado com sucesso",
                    data: {
                        "id": result.insertId,
                        "data_teste": dados.data_teste,
                        "avaliacao": dados.avaliacao
                    }
                });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor." });
        }
    }

    static editTeste_Direcao(req, res) {
        const id = req.params.id;
        const dados = req.body

        try {
            Teste_DirecaoModel.editTeste_direcao(dados, function (err, result) {
                if (err) {
                    console.error("Erro ao editar o Teste", err);
                    return res.status(500).json({ error: "Ocorreu um erro ao editar o Teste." });
                }

                return res.status(200).json({
                    message: "Teste editado com sucesso",
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

    static removeTeste_Direcao(req, res) {
        const id = req.params.id

        try {
            Teste_DirecaoController.removeTeste_Direcao(id, function (err, result) {
                if (err) {
                    console.error("Erro ao deletar o Teste: ", err);
                    return res.status(500).json({ error: "Ocorreu um erro ao deletar o Teste" });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "O Teste não foi encontrado" })
                }

                return res.status(200).json({ message: "O Teste deletado com sucesso.", data: { id } });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor." });
        }
    }



} export default Teste_DirecaoController;