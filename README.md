# CREM - Comms Room Environment Monitor

#### Student Name: *Jordan Harrison*   Student ID: *20095397*

CREM, or Comms Room Environment Monitor, is an experimental website to be hosted on a Raspberry Pi which is used to monitor, log and alert temperature & humidity changes in one or multiple comms rooms by connecting wirelessly to temperature sensors attached to ESP32 NodeMCU boards. I propose to build a web interface with a login system used to view historical data and add sensors.

## Tools, Technologies and Equipment

My proposal for tools, technologies and equipment for this project is as follows:

#### Tools

- Visual Studio Code
- Arduino IDE

#### Technologies

- NodeJS (web front end)
- Lua (to program ESP32 modules)
- Python (for MQTT client using micropython & for the broker for MQTT)
- Mosquitto (for the MQTT server)
- Express
- Handlebars
- JSON files for storage of sensor data

#### Equipment

- 1x Raspberry Pi 4 4GB (to be the MQTT broker & host the website)
- Adafruit AM2302 DHT22 Temperature & Humidity Sensors
- ESP32 NodeMCU wireless development boards

## Project Repository

[jordharr/CREM](https://github.com/jordharr/CREM)
