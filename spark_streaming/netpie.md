# Connect Spark Streaming to NETPIE IoT Cloud Platform

We show how to connect Spark Streaming to [NETPIE](https://netpie.io/) cloud platform for Internet of Things.

## Find MQTT connection parameters from NETPIE
First, users are required to have a valid the APPID, APPKEY and APPSECRET from a NETPIE account.

<img src="netpie_appkey.png">

Next, we create a new microgear "thing" and obtain its MQTT connection parameters. We'll use these parameters in Spark Streaming.

On any machine, install [microgear-python](https://github.com/netpieio/microgear-python) client library.

```shell
pip install microgear
```

After that, run the following python program. Replace the APPID, APPKEY and APPSECRET obtained from your NETPIE account. Note that if there exists a  microgear-APPKEY.cache file in the current directory, the program will just use the data from the existing microgear thing. Use the output of the program for MQTT plugin parameters in the next steps.

```python
import microgear.client as mc
import time

appid = 'APPID'
appkey = 'APPKEY'
appsecret = 'APPSECRET'

mc.create(appkey,appsecret,appid,{'debugmode': True})
microgear = mc.microgear
times = 1
while not microgear.accesstoken:
    mc.get_token()
    time.sleep(times)
    times = times+10

mqtt_broker = microgear.accesstoken["endpoint"].split("//")[1].split(":")
mqtt_clientid = microgear.accesstoken["token"]
mqtt_username = microgear.gearkey+"%"+str(int(time.time()))
mqtt_password = mc.hmac(microgear.accesstoken["secret"]+"&"+microgear.gearsecret,microgear.accesstoken["token"]+"%"+mqtt_username)

print ("Host: " + mqtt_broker[0])
print ("Port: " + mqtt_broker[1])
print ("ClientId: " + mqtt_clientid)
print ("Username: " + mqtt_username)
print ("Password: " + mqtt_password)
```

## Start a Zeppelin node
Follow [instructions](../zeppelin/zeppelin.md) to bring up the Zeppelin web-based notebook. Create a new notebook.

<img src="create_new_note.png" width="200">


## Subscribe messages to Spark Streaming
### 1. Go to the first paragraph. Enter the following commands to prepare MQTT dependency package for Spark Streaming.

```scala
%spark.dep
z.load("org.apache.bahir:spark-streaming-mqtt_2.11:2.2.1")
```

Note that these commands must be executed before Spark interpreter starts if you see an error message "Must be used before SparkInterpreter (%spark) initialized". In such case, you must restart Spark interpreter in order for these commands to take effect. If needed, click on the dropdown list at the upper right conner and select interpreter.

### 2. In the next paragraph, import libraries and create Spark Streaming context with batch interval set to 10 seconds.

```scala
import org.apache.spark.storage.StorageLevel
import org.apache.spark.streaming._
import org.apache.spark.streaming.mqtt._

val ssc = new StreamingContext(sc, Seconds(10))
```

### 3. Then, create data stream from using the previous MQTT connection parameters in the next paragraph.

```scala
val lineStream = MQTTUtils.createStream(ssc,
                 brokerUrl="tcp://HOST:PORT",
                 topic="/APPID/MYTOPIC",
                 storageLevel=StorageLevel.MEMORY_ONLY_SER_2,
                 clientId=Some(CLIENTID),
                 username=Some(USERNAME),
                 password=Some(PASSWORD),
                 cleanSession=None,
                 qos=None,
                 connectionTimeout=None,
                 keepAliveInterval=None,
                 mqttVersion=None)
```

### 4. In the next paragraph, create window stream.
```scala
val lineStream60 = lineStream.window(Seconds(60), Seconds(10))
```

### 5. Create a new paragraph with the following command to show some messages received from NETPIE.

```scala
lineStream60.print
```

### 6. In the last paragraph, start Spark Streaming with the following command.
ssc.start
ssc.awaitTermination

The last 60 second events received from NETPIE will be displayed on the output of this paragraph every 10 seconds.

## Calculate moving average
