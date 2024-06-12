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

} export default VeiculoModel;