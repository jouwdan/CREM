# CREM - Comms Room Environment Monitor

CREM, or Comms Room Environment Monitor, is an experimental website hosted on a Raspberry Pi which is used to monitor, log and alert temperature & humidity changes in one or multiple comms rooms by connecting wirelessly to DHT22 temperature sensors attached to ESP32 NodeMCU boards. A web interface is used to view sensor data, and a python script is running in the background monitoring and logging the temperature - and will send a mail when the temperature reaches a certain threshold.

## Technologies Used

- [Python](https://www.python.org/)
- [MicroPython](https://github.com/micropython/micropython)
- [Mosquitto](https://mosquitto.org/) MQTT broker
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Handlebars](https://handlebarsjs.com/)
- JSON files for storage of sensor data

## Hardware Used

- [Raspberry Pi 4 Model B](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/)
- [AM2302 DHT22 Temperature & Humidity Sensors](https://www.amazon.co.uk/gp/product/B074MY32RX/)
- [ESP32 NodeMCU wireless development boards](https://www.amazon.co.uk/gp/product/B08CCYWZN3/)

## Project Repository

[jordharr/CREM](https://github.com/jordharr/CREM)

## Project Documentation

https://crem.netlify.app
