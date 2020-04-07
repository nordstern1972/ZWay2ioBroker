# ZWay2ioBroker
Mit Hilfe dieser Skripte und Vorlagen kannst du deine "vDevices" aus ZWay auch in ioBroker benutzen.

- ZWayVorbereitung.js

Mit diesem Skript werden benötigte Datenpunkte in ioBroker angelegt.

- ZWayHoleDevice.js

Mit diesem Skript werden minütlich alle vDevice-Daten von ZWay abgeholt. Gibt es das vDevice noch nicht, werden entsprechende Datenpukte in ioBroker angelegt und die Werte gespeichert. Ist der Datenpunkt vorhanden werden die Daten aktualisiert. Das Skript ZWayVorbereitung muss vorher einmal durchgelaufen sein und in den Datenpunkten müssen die Verbindungsdaten von ZWay eingetragen sein.
  
todo:
- ZWaySendeAnDevice.js
- ZWaySendeAnDeviceIntervall.js
- ZWayEmpfangVonDevice.js

Auf ZWay-Seite wird die App "HTTP-Server" benötigt. Dort muss die URL mit dem Port angegeben werde, die im Skript "ZwayVorbereitung" angelegt wurde.
