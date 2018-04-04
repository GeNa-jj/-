const db = require('../db');
module.exports={
    register:(app)=>{
        app.get('/products',(req,res)=>{
           
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from product `;
            if(req.query.name){
                sql+= 'where id like '+"'"+req.query.name+"'"+' or name like '+"'"+"%"+req.query.name+"%"+"'"+' or price like '+"'"+req.query.name+"'"+' or genre like '+"'"+"%"+req.query.name+"%"+"'";
                 
            }
            if(page && qty){
                sql += ` limit ${startNo},${qty}`;
            }

            sql += "; select FOUND_ROWS() as rowsCount;";
            // console.log(sql)
            db.mysql.selects(sql, function(err,results,fields){  
                        //do something 
                        // console.log(results.body[0]) 
                        res.send(results)
                    // console.log(results)

                });
        }),
        app.post('/deleteproduct',(req,res)=>{
            let consts = req.body.id
           
           
            var sql = 'DELETE FROM product where id='+consts ;
           
            // console.log(sql)
         
            db.mysql.delete(sql, function(err,results,fields){  
                        //do something 
                        // console.log(results.body[0]) 
                        res.send(results)
                    // console.log(results)

                });
        }),
        app.post('/addproduct',(req,res)=>{
            var consts = req.body
           
            var arr=Object.keys(consts);
            if(consts.add=='true'){
            
             var sql='update product set ';
            arr.map((item)=>{
                return sql+=item+'='+"'"+consts[item]+"'"+',';
            })
              sql= sql.substring(0,sql.length - 12)
             sql += ' where id='+consts.id; 
            // console.log(sql)
            db.mysql.add(sql, function(err,results,fields){  
                        //do something 
                        // console.log(results.body[0]) 
                        res.send(results)
                    // console.log(results)

                })

            }else{
                var html='';
                arr.map((item)=>{
                    html+="'"+consts[item]+"'"+','
                })
                 html= html.substring(0,html.length -9)
                 var brr=arr.join(",")
                  brr= brr.substring(0,brr.length -4)
                 var sql='insert product ('+brr+') values('+html+")";
                
                     db.mysql.insert(sql, function(err,results,fields){  
                        //do something 
                        // console.log(results.body[0]) 
                        res.send(results)
                    // console.log(results)

                })
            }
         })

    }
}


