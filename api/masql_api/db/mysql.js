var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'project',
    multipleStatements: true
});

module.exports = {
    select(sql){
        if(pool){
            return new Promise((resolve,reject)=>{
                pool.query(sql,(error, rows)=>{
                    if(error){
                        reject(error);
                    }else{
                        if(rows.length > 1){
                            resolve({rowsCount: rows[1][0]['rowsCount'],data: rows[0]});
                        }else{
                            resolve(rows);
                        }
                    }
                });
            });   
        }
    },
    login(sql){
        if(pool){
            return new Promise((resolve,reject)=>{
                pool.query(sql,(error, res)=>{
                    if(error){
                        reject(error);
                    }else{
                        resolve(res);
                    }
                });
            });   
        }
    },
    insert(sql){
        if(pool){
            return new Promise((resolve,reject)=>{
                pool.query(sql,(error, res)=>{
                    if(error){
                        reject(error);
                    }else{
                        resolve(res);
                    }
                });
            });   
        }
    }
}