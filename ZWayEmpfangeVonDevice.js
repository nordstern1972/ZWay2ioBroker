'use strict';

let j               = 0;
let dp_array1       = new Array();
let dp_array2       = new Array();
let dp_string       = '';
let dp_namespace    = getState('ZwayNamesraum');
let dp_Port         = getState('ZwayPort').val;

const http          = require('http');
const express       = require('express');
const app           = express();
const server        = http.createServer(app);

server.listen(dp_Port, ()=> {
    log('Server hört auf Port: ' + dp_Port);
});

app.use(express.json());

app.post('/zway', (request, response) => {
    if(getState('ZwayLog').val==1){
        log('incomming request from: ' + request.ip);
    }
    let result = request.body;
    jsonRunner(result, dp_namespace.val + '.' + result.id);
    if(getState('ZwayLog').val==1){
        log('Device: ' + dp_namespace.val + '.' + result.id);
    }
        for(let k=4;k<dp_array1.length;k++){
            dp_array2 = dp_array1[k].split(':');
            if(existsState(dp_array2[0])){
                setState(dp_array2[0], dp_array2[1].trim());
                if(getState('ZwayLog').val==1){
                    log('Devicewert: ' + dp_array2[1].trim());
                }
            }
            dp_array2 = new Array();
        }
        j=0;
        dp_array1 = new Array();
    response.send('ok');
})

function jsonRunner(obj, path) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && (typeof obj[key] === "object")) {
            dp_string=key + '.';
            jsonRunner(obj[key],path);
            dp_string='';
        } else {
            let dp_temp = path + '.' + dp_string + key + ": " + obj[key];
            dp_array1[j] = dp_temp;
            j++;
        }
    }
}
