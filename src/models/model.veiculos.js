import { query } from "express";
import { con } from "../config/database.js";

class VeiculoModel {

    static getAllVeiculos(callback) {
        let sql = `select * from veiculos`

        con.query(sql, function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    };

    static createVeiculos(dados, callback) {
        let sql = `insert into veiculos(id_veiculo, marca_do_veiculo, modelo_do_veiculo, ano, preco_de_venda, descricao) values (?,?,?,?,?,?)`

        con.query(sql, [dados.id_veiculo, dados.marca_do_veiculo, dados.modelo_do_veiculo, dados.ano, dados.preco_de_venda, dados.descricao], async function (err, result) {
            if (err)
                callback(err, null);
            else {
                callback(null, result);
            }
        });
    }

    static editVeiculos(dados, callback) {
        let sql = `update veiculos set marca_do_veiculo = ?, modelo_do_veiculo = ?, ano = ?, preco_de_venda = ?, descricao = ? where id_veiculo = ?;`

        con.query(sql, [dados.marca_do_veiculo, dados.modelo_do_veiculo, dados.ano, dados.preco_de_venda, dados.descricao, dados.id], async function (err, result) {
            if (err)
                callback(err, null);
            else {
                callback(null, result);
            }
        });
    }

    static removeVeiculos(id, callback) {
        let sql = `delete from veiculos where id_veiculo`

        con.query(sql, [id], function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
        
    }


} export default VeiculoModel;