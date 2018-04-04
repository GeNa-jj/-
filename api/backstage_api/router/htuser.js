const db = require('../db');
module.exports={
    register:(app)=>{
        app.post('/htuser',(req,res)=>{
            
            var sql='select * from users where username='+"'"+req.body.name+"'"+''+' and password='+"'"+req.body.password+"'";
            db.mysql.select(sql, function(err,results,fields){  
                        //do something 
                        // console.log(results.body[0])
                        
                        res.send(results)
                    // console.log(results)

                });
        }),
         app.post('/message',(req,res)=>{
            // console.log(req.body)
             let pag = req.body.pag;
            let qty = req.body.page;
              let startNo = (pag-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from users `;
             if(pag && qty){
                sql += ` limit ${startNo},${qty}`;
            }
             sql += "; select FOUND_ROWS() as rowsCount;";
             console.log(sql)
            // var sql='select * from user ';
            db.mysql.selects(sql, function(err,results,fields){  
                        //do something 
                        // console.log(results.body[0])
                        
                        res.send(results)
                    // console.log(results)

                });
        })
    }
}
