const filter = require('../utils/filter');
const db = require('../db');
const apiResult = require('../utils/apiResult');

module.exports = {
    register:(app)=>{
        app.post('/order',(req,res)=>{
            let username = req.body.username;
            let items = req.body.items;
                 
            let status = req.body.status;
            let orderNo = req.body.orderNo;
            let address = req.body.address;
            
            sql = `INSERT INTO orders (username, items, status, orderNo, address) VALUES ('${username}', '${items}', '${status}', '${orderNo}', '${address}');`;
            db.mysql.insert(sql).then(data=>{
                res.send(apiResult(true,data))
            }).catch(error=>{
                res.send(apiResult(false,null,null,error));
            });
        });
    }
}