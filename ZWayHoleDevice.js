'use strict';
schedule('* * * * *', function () {
    let dp_string    = '';
    let dp_array     = new Array();
    let j            = 0;
    let timestamp    = getState('ZwayLetzteAbfrage');
    let zway_url     = getState('ZwayUrl');
    let dp_namespace = getState('ZwayNamesraum');
    let zway_user    = getState('ZwayBenutzer');
    let zway_pass    = getState('ZwayPasswort');

    request.get(zway_url.val + '/ZAutomation/api/v1/devices?since=' + timestamp.val, 
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                if(getState('ZwayLog').val==1){
                    log('Status: ' + response.statusCode);
                }
                let result = JSON.parse(response.body);
                if(getState('ZwayLog').val==1){
                    log('Anzahl: ' + result.data.devices.length);
                }
                for(let i=0;i<result.data.devices.length;i++){
                    jsonRunner(result.data.devices[i], dp_namespace.val + '.' + result.data.devices[i].id);
                }
                for(let k=0;k<dp_array.length;k++){
                    let temp_array = dp_array[k].split(',');
                    if(!existsState(temp_array[0])){
                        createState(temp_array[0], temp_array[1].trim());
                    }
                    else{
                        setState(temp_array[0], temp_array[1].trim());
                    }
                    temp_array = undefined;
                }
            } else  {
                log('Fehler: ' + error + response.statusCode);
            }
            let newtimestamp = Date.now();
            newtimestamp = (Math.floor(newtimestamp/1000) - 3600);
            setState('ZwayLetzteAbfrage', newtimestamp);
            if(getState('ZwayLog').val==1){
                log('Zeitstempel: ' + newtimestamp);
            }
        }).auth(zway_user.val, zway_pass.val, false);

    function jsonRunner(obj, path) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key) && (typeof obj[key] === 'object')) {
                dp_string=key + '.';
                jsonRunner(obj[key],path);
                dp_string='';
            } else {
                let dp_temp = path + '.' + dp_string + key + ', ' + obj[key];
                dp_array[j] = dp_temp;
                j++;
            }
        }
    }
})
