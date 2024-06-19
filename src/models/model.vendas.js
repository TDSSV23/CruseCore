import { query } from "express";
import { con } from "../config/database.js";
import moment from "moment";

class VendaModel {
    static getAllVendas(callback) {
        let sql = `select * from vendas`

        con.query(sql, function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    };

    static createVendas(dados,callback) {
        let sql = `insert into vendas(id_veiculo, id_cliente, data_venda, valor_venda) values (?,?,?,?)`;

        con.query(sql, [dados.id_veiculo, dados.id_cliente, dados.data_venda, dados.valor_venda], async function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    };

    static editVenda(dados, id_cliente, callback) {
        let sql = `UPDATE vendas SET id_veiculo = ?, data_venda = ?, valor_venda = ? WHERE id_cliente = ?`;

        con.query(sql, [dados.id_veiculo, dados.data_venda, dados.valor_venda, id_cliente], function (err, result) {
            if (err)
                callback(err, null);
            else {
                callback(null, result);
            }
        });
    }

    static removeVenda(id, callback){
        let sql = `delete from vendas where id_vendas=?`;

        con.query(sql, [id], function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });

    }



} export default VendaModel;