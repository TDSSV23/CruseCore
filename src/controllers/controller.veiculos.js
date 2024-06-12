import VeiculoModel from "../models/model.Veiculo.js";

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
    
} export default VeiculoController;