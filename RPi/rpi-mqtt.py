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
    cursor.execute("INSERT INTO readings (sensor,timestamp,reading,humidity) VALUES (?,?,?,?)", (sensor,timestamp,temp,humidity))
  except mariadb.Error as e:
    print(f"Error: {e}")
  conn.commit()
  print("Successfully inserted to the database")
  conn.close()