const filter = require('../utils/filter');
const db = require('../db');
const apiResult = require('../utils/apiResult');

module.exports={
    register(app){
        app.get('/product',(req,res)=>{
            let page = req.query.page;
            let pageItems = req.query.pageitems;
            var sql = `select SQL_CALC_FOUND_ROWS * from product`;
            if(page && pageItems){
                sql += ` limit ${(page - 1) * pageItems},${pageItems}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.mysql.select(sql).then((data)=>{
                res.send(apiResult(true,data));
            }).catch((error)=>{
                res.send(apiResult(false,null,null,error));
            });
        });

        app.post('/productId', (req, res) => {
            let id = req.body.id;
            var sql = `select * from product where id = '${id}'`;

            db.mysql.select(sql).then(data=>{
                res.send(apiResult(true,data));
            })
        });
    }
}