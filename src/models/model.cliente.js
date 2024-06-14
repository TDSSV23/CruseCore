import { query } from "express";
import { con } from "../config/database.js";

class ClienteModel {

    static getAllClientes(callback) {
        let sql = `select * from clientes`

        con.query(sql, function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    };

    static createCliente(dados, callback) {
        let sql = `insert into clientes(id_clientes, nome, cnh, email, telefone, end_logradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        con.query(sql, [dados.id_cliente, dados.nome, dados.cnh, dados.email, dados.telefone, dados.end_logradouro, dados.end_numero, dados.end_bairro, dados.end_cidade, dados.end_uf, dados.end_cep], async function (err, result) {
            if (err)
                callback(err, null);
            else {
                callback(null, result);
            }
        });
    }

    static editCliente(dados, callback) {
        let sql = `update clientes set nome=?, cnh=?, email=?, telefone=?, end_logradouro=?, end_numero=?, end_bairro=?, end_cidade=?, end_uf=?, end_cep=? where id_clientes=?`

        con.query(sql, [dados.nome, dados.cnh, dados.email, dados.telefone, dados.end_logradouro, dados.end_numero, dados.end_bairro, dados.end_cidade, dados.end_uf, dados.end_cep, dados.id], async function (err, result) {
            if (err)
                callback(err, null);
            else {
                callback(null, result);
            }
        });

    }

    static removeCliente(id, callback) {
        let sql = `delete from clientes where id_Clientes=?`

        con.query(sql, [id], function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }




} export default ClienteModel;