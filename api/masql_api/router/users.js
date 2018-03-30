const db = require('../db');
const apiResult = require('../utils/apiResult');

const jwt = require('jsonwebtoken');

//过滤，filter.js 写好，那里需要就调用，按需加载
const filter = require('../utils/filter');

module.exports = {
    register(app){
        app.post('/login',(req,res)=>{
            let username = req.body.username;
            let password = req.body.password;
            var sql = `select * from users where username='${username}'`;
            db.mysql.select(sql).then(result=>{
                if(result.length>0){
                    sql += ` and password='${password}';`;
                    db.mysql.select(sql).then((data)=>{
                        if(data.length>0){
                            res.send(apiResult(true,data));  
                        }else{
                            res.send(apiResult(false,null,'登录信息错误'));
                        }
                    }).catch((error)=>{
                        res.send(apiResult(false,null,null,error));
                    });
                }else{
                    res.send(apiResult(false,null,'此用户未注册'));
                }
            }).catch(error=>{
                res.send(apiResult(false,null,null,error));
            });
        });

        app.post('/register',(req,res)=>{
            let username = req.body.username;
            let password = req.body.password;
            let nicheng = req.body.nicheng;
            let gender = req.body.gender
            var sql = `select * from users where username='${username}'`;
            db.mysql.select(sql).then(result=>{
                if(result.length>0){
                    res.send(apiResult(false,null,'此用户已注册'));
                }else{
                    sql = `INSERT INTO users (username, password, gender, nicheng)
                            VALUES ('${username}', '${password}', '${gender}', '${nicheng}');`;
                    db.mysql.insert(sql).then(data=>{
                        res.send(apiResult(true,data))
                    }).catch(error=>{
                        res.send(apiResult(false,null,null,error));
                    });
                }
            }).catch(error=>{
                res.send(apiResult(false,null,null,error));
            });
        });

        app.post('/phone',(req, res)=>{
            let username = req.body.username;
            var sql = `select * from users where username='${username}';`;
            db.mysql.login(sql).then(result=>{
                if(result.length>0){
                    res.send(apiResult(true));
                }else{
                    res.send(apiResult(false));
                }
            }).catch(error=>{
                res.send(apiResult(false,null,null,error));
            });
        });

        app.post('/changepwd',(req, res)=>{
            let username = req.body.username;
            let password = req.body.password;
            var sql = `update users set password='${password}' where username='${username}';`;
            db.mysql.login(sql).then(result=>{
                res.send(apiResult(true));
            }).catch(error=>{
                res.send(apiResult(false,null,null,error));
            });
        });

        app.post('/changemsg',(req, res)=>{
            let username = req.body.username;
            let gender = req.body.gender;
            let nicheng = req.body.nicheng;
            var sql = `update users set gender='${gender}' where username='${username}';update users set nicheng='${nicheng}' where username='${username}';`;
            db.mysql.login(sql).then(result=>{
                res.send(apiResult(true));
            }).catch(error=>{
                res.send(apiResult(false,null,null,error));
            });
        });

        app.post('/changeallmsg',(req, res)=>{
            let username = req.body.username;
            let gender = req.body.gender;
            let nicheng = req.body.nicheng;
            let password = req.body.password;
            var sql = `update users set gender='${gender}' where username='${username}';update users set nicheng='${nicheng}' where username='${username}';update users set password='${password}' where username='${username}';`;
            db.mysql.login(sql).then(result=>{
                res.send(apiResult(true));
            }).catch(error=>{
                res.send(apiResult(false,null,null,error));
            });
        });
    }
}