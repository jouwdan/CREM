from time import sleep
from umqtt.simple import MQTTClient
from machine import Pin
from dht import DHT22
import network

def do_connect():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('connecting to network...')
        wlan.connect('wifi-ssid', 'wifi-password')
        while not wlan.isconnected():
            pass
    print('network config:', wlan.ifconfig())

def get_readings():
    CLIENT_ID = 'MDF1_Sensor'
    SERVER = 'raspberrypi.local'
    TOPIC = b'CREM_Sensor'
    client = MQTTClient(CLIENT_ID, SERVER)
    client.connect()
    sensor = DHT22(Pin(15, Pin.IN, Pin.PULL_UP))
    while True:
        try:
            sensor.measure()
            temp = sensor.temperature()
            humidity = sensor.humidity()
            reading = (b'{0:3.1f},{1:3.1f}'.format(t, h))
            client.publish(TOPIC, reading)
            print(reading)
        except OSError:
            print('Sensor reading failed')
        sleep(5)

do_connect()
get_readings()