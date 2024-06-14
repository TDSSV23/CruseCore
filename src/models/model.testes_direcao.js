import { query } from "express";
import { con } from "../config/database.js";
import moment from "moment";

class Teste_DirecaoModel {
    static getAllTestes_direcao(callback) {
        let sql = `select * from testes_direcao`

        con.query(sql, function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }; 

    static createTestes_direcao(dados, callback) {
        let sql = `INSERT INTO testes_direcao(id_veiculo, id_cliente, data_teste, avaliacao) VALUES (?, ?, ?, ?)`;
    
        con.query(sql, [dados.id_veiculo, dados.id_cliente, dados.data_teste, dados.avaliacao], function (err, result) {
            if (err)
                callback(err, null);
            else {
                callback(null, result);
            }
        });
    }

    static editTeste_direcao(dados, callback) {
        let sql = `UPDATE testes_direcao SET id_veiculo=?, id_cliente=?, data_teste=?, avaliacao=? WHERE id_teste = ?;`;
    
        con.query(sql, [dados.id_veiculo, dados.id_cliente, dados.data_teste, dados.avaliacao, dados.id], async function (err, result) {
            if (err)
                callback(err, null);
            else {
                callback(null, result);
            }
        });
    }

    static removeTeste_direcao(id, callback) {
        let sql = `DELETE FROM testes_direcao WHERE id_teste = ?;`;

        con.query(sql, [id], async function (err, result) {
            if (err)
                callback(err, null);
            else {
                callback(null, result);
            }
        });
    }
    


    

} export default Teste_DirecaoModel;