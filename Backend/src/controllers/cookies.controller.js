const express = require('express');
const axios = require('axios');
// const { request } = require('express');
const router = express.Router();

router.post('/setcookies', async (req, res) => {
    const { nombre, valor } = req.body;
    //los guarda en la variable newcookie
    const newCookie = {
        nombre: nombre,
        valor: valor
    }
    console.log('Este es el nombre',req.body.nombre)
    console.log('Este es el valor',req.body.valor)
    function dataCookieToString(dataCookie) {
        var t = "";
        for (var x = 0; x < dataCookie.length; x++) {
            t += ((t != "") ? "; " : "") + dataCookie[x].key + "=" + dataCookie[x].value;
        }
        return t;
    }
    
    function mkdataCookie(cookie) {
        var t, j;
        cookie = cookie.toString().replace(/,([^ ])/g, ",[12],$1").split(",[12],");
        for (var x = 0; x < cookie.length; x++) {
            cookie[x] = cookie[x].split("; ");
            j = cookie[x][0].split("=");
            t = {
                key: j[0],
                value: j[1]
            };
            for (var i = 1; i < cookie[x].length; i++) {
                j = cookie[x][i].split("=");
                t[j[0]] = j[1];
            }
            cookie[x] = t;
        }
        return cookie;
    }
    //const dataCookie = mkdataCookie(['nombre = ejemplo'], '; expires=' + new Date(new Date().getTime() + 86409000));
    const dataCookie = mkdataCookie([newCookie.nombre +'='+ newCookie.valor], '; expires=' + new Date(new Date().getTime() + 86409000));
    const response = await axios('http://localhost:4000/cookies/endpoint2',{
        method:'GET',
        withCredentials: true,
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        headers: {
        //'Authorization': `Bearer ${newCookie}`},
       'Cookie': dataCookieToString(dataCookie)
        } 
    })
    res.cookie(req.body.nombre,req.body.valor)
    const resp = response;
     res.send(resp.data)
    console.log(resp.data)
});
router.get('/endpoint2', async (req, res) => {
     console.log('heards con cookie',req.headers.cookie)
     const guardar = req.headers.cookie;
     res.send(guardar)
})
module.exports = router;
