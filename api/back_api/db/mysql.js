var mysql=require("mysql");  
var pool = mysql.createConnection({   
    host: 'localhost',  
    user: 'root',  
    password: '',  
    database: 'project',  
    port: 3306 ,
    multipleStatements:true

});
  pool.connect();
const jwt = require('jsonwebtoken');
module.exports={
    select:(sql,callback)=>{
        pool.query(sql,function(err,res,fields){
          
            if(err){
                let result='err';
                callback(err)
            }else{
                 let token = '';
                var status=res.length==1? 'ok':'err'
                var user = {name:'admin'};
                if(status=='ok'){
                    token = jwt.sign(user, 'secret', {
                        'expiresIn': 1440 // 设置过期时间
                    })
                }
                var result={
                    name:'admin',
                    token
                }
                callback(err,result)
            }

        })
    },
    selects:(sql,callback)=>{
        pool.query(sql,function(err,res,fields){
          
            if(err){
               
                callback(err)
            }else{   
                callback(err,res)
            }

        })
    },
 delete:function(sql,callback){

        // const delSql = 'delete from user where id = "4"';
        pool.query(sql,function (error, result) {
            if(error){
              callback(error)
            }
            else{
              callback(result)
            }
                  
     })

    },
 add:function(sql,callback){

        // const delSql = 'delete from user where id = "4"';
        pool.query(sql,function (error, result) {
            if(error){
              callback(error)
            }
            else{
              callback(result)
            }
                  
     })

    },
 insert:function(sql,callback){

        // const addVip = 'insert users (id,name,age) values(?,?,?)';
        // const params = [null,"asdsa",13,];
       
        pool.query(sql, function(error, result){
          if(error)
          {
              callback(error)
          }else{
              callback(result)
          }
      });
    },
}