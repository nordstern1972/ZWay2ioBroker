'use strict';

if(!existsState('ZwayLetzteAbfrage')){
    createState('ZwayLetzteAbfrage', 1, {read: true, write: true, desc: "Zeitstempel der letzten Abfrage beim ZWay-Server", type: "number"});
    log('ZwayLetzteAbfrage erstellen');
}
else{
    log('ZwayLetzteAbfrage vorhanden');
}

if(!existsState('ZwayNamesraum')){
    createState('ZwayNamesraum','', {read: true, write: true, desc: "Namesraum für die Devices", type: "string", def: "ZWay"});
    log('ZwayNamesraum erstellt');
}
else{
    log('ZwayNamesraum vorhanden');
}

if(!existsState('ZwayBenutzer')){
    createState('ZwayBenutzer','', {read: true, write: true, desc: "Benutzer bei ZWay", type: "string", def: "Benutzer"});
    log('ZwayBenutzer erstellt');
}
else{
    log('ZwayBenutzer vorhanden');
}

if(!existsState('ZwayPasswort')){
    createState('ZwayPasswort','', {read: true, write: true, desc: "Passwort bei ZWay", type: "string", def: "Passwort"});
    log('ZwayPasswort erstellt');
}
else{
    log('ZwayPasswort vorhanden');
}

if(!existsState('ZwayUrl')){
    createState('ZwayUrl','', {read: true, write: true, desc: "URL vom ZWay-Server", type: "string", def: "http://"});
    log('ZwayUrl erstellt');
}
else{
    log('ZwayUrl vorhanden');
}

if(!existsState('ZwayPort')){
    createState('ZwayPort', 8091, {read: true, write: true, desc: "Port an den der ZWay-Server(App: HTTP-Bridge) senden soll", type: "number"});
    log('ZwayPort erstellt');
}
else{
    log('ZwayPort vorhanden');
}

if(!existsState('ZwayLog')){
    createState('ZwayLog', 0, {read: true, write: true, desc: "Logging ein/ausschalten", type: "number"});
    log('ZwayLog erstellt');
}
else{
    log('ZwayLog vorhanden');
}

stopScript();
