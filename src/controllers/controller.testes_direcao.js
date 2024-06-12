import Teste_DirecaoModel from "../models/model.testes_direcao.js";

class Teste_DirecaoController {

    static getAllTeste_Direcao(req, res) {
        try {
            Teste_DirecaoModel.getAllTestes_Direcao(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "Ocorreu um erro ao buscar os Teste_Direcaos." });
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
    
} export default Teste_DirecaoController;