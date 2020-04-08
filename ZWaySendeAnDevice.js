'use strict';

let regexSwitchBinary           = /on|off|update/;
let regexDoorlock               = /open|close/;
let regexThermostat             = /exact[?]level=\d{1,2}|exact[?]level=\d{1,2}[.]5/;
let regexSwitchMultilevel       = /on|off|min|max|increase|decrease|update|exact[?]level=\d{1,2}/;
let regexSwitchMultilevelBlinds = /up|down|upMax|increase|decrease|startUp|startDown|stop|update|excactSmooth?level=\d{1,2}/;
let regexSensorBinary           = /update/;
let regexSensorMultilevel       = /update/;
let regexToggleButton           = /on/;
let regexSwitchControl          = /on|off|update|upstart|upstop|downstart|downstop|exact[?]level=\d{1,2}/;
let regexSwitchRGBW             = /on|off|exact[?]red=\d{1,3}[&]green=\d{1,3}[&]blue=\d{1,3}/;
let regexResult                 = false;

function checkCommand (ZwayId, ZwayCommand){
    if(!existsState(ZwayId + '.id')){
        log('ZwayId nicht vorhanden');
        return false;
    }else{
        let DeviceType = getState(ZwayId + '.deviceType');
        if(getState('ZwayLog').val==1){
            log('Device: ' + ZwayId);
            log('Kommando: ' + ZwayCommand);
        }
        switch(DeviceType.val.trim()){
            case 'switchBinary':
            if(getState('ZwayLog').val==1){
                log('Typ switchBinary erkannt');
            }
            regexResult = regexSwitchBinary.test(ZwayCommand);
            if (!regexResult){
                    log('ZwayCommand nicht erlaubt');
                    return false;
                }else{
                    if(getState('ZwayLog').val==1){
                        log('ZwayCommand erlaubt');
                    }
                    return true;
            }

            case 'switchMultilevel':
            if(getState('ZwayLog').val==1){
                log('Typ switchMultilevel erkannt');
            }
            regexResult = regexSwitchMultilevel.test(ZwayCommand);
            if (!regexResult){
                    log('ZwayCommand nicht erlaubt');
                    return false;
                }else{
                    if(getState('ZwayLog').val==1){
                        log('ZwayCommand erlaubt');
                    }
                    return true;
            }

            case 'thermostat':
            if(getState('ZwayLog').val==1){
                log('Typ thermostat erkannt');
            }
            regexResult = regexThermostat.test(ZwayCommand);
            if (!regexResult){
                    log('ZwayCommand nicht erlaubt');
                    return false;
                }else{
                    if(getState('ZwayLog').val==1){
                        log('ZwayCommand erlaubt');
                    }
                    return true;
            }

            case 'switchRGBW':
            if(getState('ZwayLog').val==1){
                log('Typ switchRGBW erkannt');
            }
            regexResult = regexSwitchRGBW.test(ZwayCommand);
            if (!regexResult){
                    log('ZwayCommand nicht erlaubt');
                    return false;
                }else{
                    if(getState('ZwayLog').val==1){
                        log('ZwayCommand erlaubt');
                    }
                    return true;
            }

            case 'toggleButton':
            if(getState('ZwayLog').val==1){
                log('Typ toggleButton erkannt');
            }
            regexResult = regexToggleButton.test(ZwayCommand);
            if (!regexResult){
                    log('ZwayCommand nicht erlaubt');
                    return false;
                }else{
                    if(getState('ZwayLog').val==1){
                        log('ZwayCommand erlaubt');
                    }
                    return true;
            }

            default:
                log('Default: ZwayCommand nicht erlaubt');
                break;
        }
    }
    return false;
}

function setDevice (ZwayId, ZwayCommand){
    let zway_url       = getState('ZwayUrl');
    let zway_user      = getState('ZwayBenutzer');
    let zway_pass      = getState('ZwayPasswort');
    let zway_namespace = getState('ZwayNamesraum');

    if(checkCommand(zway_namespace.val + '.' + ZwayId, ZwayCommand)){
        request.get(zway_url.val + '/ZAutomation/api/v1/devices/' + ZwayId + '/command/' + ZwayCommand, 
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    if(getState('ZwayLog').val==1){
                        log('Command: Ok: ' + response.statusCode);
                    }
                } else  {
                    log('Error: ' + error + ',' + response.statusCode);
                }
            }).auth(zway_user.val, zway_pass.val, false);
    }
    else{
        log('Abbruch');
    }
}
