# ZWay2ioBroker
Mit Hilfe dieser Skripte und Vorlagen kannst du deine "vDevices" aus ZWay auch in ioBroker benutzen.

ZWayVorbereitung.js

Mit diesem Skript werden benötigte Datenpunkte in ioBroker angelegt.
  - ZwayLetzteAbfrage: Zeitpunkt der letzten Abfrage an ZWay in Sek seit 1.1.1970.
  - ZwayNamesraum: erster Knoten im Objektbaum unter javascript.0. Darunter kommen alle vDevices.
  - ZwayBenutzer: Benutzer in ZWay zur Authentifikation.
  - ZwayPasswort: Passwort zum Benutzer in ZWay.
  - ZwayUrl: URL unter der der ZWay-Server zu erreichen ist(Default: http://deineIP:8083).
  - ZwayPort: Port zu dem die App HTTP-Bridge auf dem ZWay-Server senden soll.
  - ZwayLog: Schaltet mit 1/0 etwas Logging ein oder aus. Fehler werden generell gelogged.

ZWayHoleDevice.js

Mit diesem Skript werden zyklisch(jede Minute) alle vDevice-Daten von ZWay abgeholt. Gibt es das vDevice noch nicht, werden entsprechende Datenpukte in ioBroker angelegt und die Werte gespeichert. Ist der Datenpunkt vorhanden werden die Daten aktualisiert. Das Skript ZWayVorbereitung muss vorher einmal durchgelaufen sein und in den Datenpunkten müssen die passenden Verbindungsdaten für den ZWay-Server eingetragen sein.

ZWaySendeAnDevice.js

Dieses Skript überprüft das Kommando welches an ein vDevice zu ZWay gesendet werden soll. Ist das Kommando erlaubt, wird es an den ZWay-Server gesendet.

ZWayEmpfangVonDevice.js

Möchte man bestimmte Ereignisse/Ergebnisse aus ZWay unmittelbar bei Änderung in ioBroker zur Verfügung haben und nicht auf die minütlichen Abfrage von "ZWayHoleDevice.js" warten, besteht die Möglichkeit im ZWay-Server die App "HTTP-Bridge" zu installieren und die Daten von angegebenen vDevices an den ioBroker senden zu lassen. Die Daten werden in einem bestimmten JSON-Format gesendet und mit dem node.js HTTP-Server und Express angenommen, ausgewertet und in die entsprechenden Datenpunkte gespeichert.

todo:
- Beispiele
- weitere Einstellungen erklären
