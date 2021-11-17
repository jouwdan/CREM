import paho.mqtt.client as mqtt
import mariadb
import sys

from datetime import datetime

def on_connect(client, userdata, flags, rc):
  print ('Connected with result code {0}'.format(rc))
  client.subscribe('CREM_Sensor')

def on_message(client, userdata, msg):
  temp, humidity = [float(x) for x in msg.payload.decode("utf-8").split(',')]
  timestamp = datetime.now()
  print('Timestamp: ' + timestamp.strftime("%d/%m/%Y %H:%M:%S") + ', Temperature: ' + "{:.1f}".format(temp) + 'C, Humidity: ' + "{:.1f}".format(humidity) + '%')
  try:
    conn = mariadb.connect(
      database="cremdb",
      user="cremuser",
      password="crempass",
      host="localhost",
      port=3306
    )
  except mariadb.Error as e:
    print(f"Error connecting to MariaDB: {e}")
    sys.exit(1)
  cursor = conn.cursor()
  try:
    cursor.execute("INSERT INTO readings (timestamp,reading,humidity) VALUES (?,?,?)", (timestamp,temp,humidity))
  except mariadb.Error as e:
    print(f"Error: {e}")
  conn.commit()
  print("Successfully inserted to the database")
  conn.close()
  
client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect('localhost', 1883, 60)

client.loop_forever()