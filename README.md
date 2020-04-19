# ZWay2ioBroker
Mit Hilfe dieser Vorlagen und Beispiele kannst du deine "vDevices" aus ZWay auch in ioBroker benutzen. Der ZWay-Server stellt eine API zur Verfügung, über die man bestimmte Daten abrufen oder vDevices auch steuern kann (https://zwayhomeautomation.docs.apiary.io).

### ZWayVorbereitung.js

Mit diesem Skript werden benötigte Datenpunkte in ioBroker angelegt. Die DPs mit Sternchen müssen zu den bestehenden ioBroker- und ZWay-Installationen angepasst werden. Das Skript muss einmal durchlaufen.
- ZwayLetzteAbfrage: Zeitpunkt der letzten Abfrage an ZWay in Sek seit 1.1.1970.
- ZwayNamesraum*: erster Knoten im Objektbaum unter javascript.n. Darunter kommen alle vDevices.
- ZwayBenutzer*: Benutzer in ZWay zur Authentifikation.
- ZwayPasswort*: Passwort zum Benutzer in ZWay.
- ZwayUrl*: URL unter der der ZWay-Server zu erreichen ist(Default: http://deineIP:8083).
- ZwayPort*: Port zu dem die App HTTP-Bridge auf dem ZWay-Server senden soll.
- ZwayLog: Schaltet mit 1/0 das Logging ein oder aus. Fehler werden generell gelogged.

### ZWayHoleDevice.js

Mit diesem Skript werden zyklisch(Default: jede Minute) alle vDevice-Daten von ZWay abgeholt. Gibt es das vDevice noch nicht im Objektbaum von ioBroker, werden entsprechende Datenpukte angelegt und die Werte gespeichert. Ist der Datenpunkt vorhanden werden die Daten nur aktualisiert. Das Skript ZWayVorbereitung muss vorher einmal durchgelaufen sein und in den Datenpunkten müssen die passenden Verbindungsdaten für den ZWay-Server eingetragen sein.

### ZWaySendeAnDevice.js

Dieses Skript überprüft das Kommando welches an ein vDevice zu ZWay gesendet werden soll. Ist das Kommando erlaubt, wird es an den ZWay-Server gesendet. Man kann dieses Skript jeweils um die entsprechenden Sende-Befehle erweitern oder es zu einem globalen Skript im Javascript-Adapter machen. Die Funktion "SetDevice" zum Senden an die ZWay vDevices steht dann in jedem Skript des Javascript-Adapters zur Verfügung.

### ZWayEmpfangVonDevice.js

Möchte man bestimmte Ereignisse/Ergebnisse aus ZWay unmittelbar bei Änderung in ioBroker zur Verfügung haben und nicht auf die minütlichen Abfrage von "ZWayHoleDevice.js" warten, besteht die Möglichkeit im ZWay-Server die App "HTTP-Bridge" zu installieren und die Daten von angegebenen vDevices an den ioBroker senden zu lassen. Die Daten werden in einem bestimmten JSON-Format gesendet und mit dem node.js HTTP-Server und Express angenommen, ausgewertet und in die entsprechenden Datenpunkte gespeichert. Der HTTP-Server sollte im ioBroker bereits installiert sein. Express muss eventuell nachinstalliert werden. Bitte hier den Installations-/Verwendungsanweisungen von ioBroker/npm folgen.

todo:
- Beispiele
- weitere Einstellungen erklären
- Voraussetzungen
