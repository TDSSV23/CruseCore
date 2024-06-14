import { query } from "express";
import { con } from "../config/database.js";

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

    static createVenda(dados, callback) {
        let sql = `insert into vendas(id_vendas, id_veiculo, id_cliente, data_venda, valor_venda) valeus (?,?,?,?,?)` 

        con.query(sql, [dados.id_vendas, dados.id_veiculo, dados.id_cliente, dados.data_venda, dados.valor_venda], async function (err, result) {
            if (err)
                callback(err, null);
            else {
                callback(null, result);
            }
        });

    }
    
} export default VendaModel;