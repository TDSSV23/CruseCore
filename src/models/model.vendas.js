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
    
} export default VendaModel;