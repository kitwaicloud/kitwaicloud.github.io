# Using Logstash to Ingest DataFrame
Logstash configuration consists of three sections: input, filter, and output, which define how data are received, transformed, and sent. Each section can be configured with a lot of available plugins.

## Receive HTTP input and send to Elasticsearch
In the following configuration, data is sent over an HTTP request. The body content contains a single line of ID, moisture, temperature and light in CSV format. The http plugin will create a logstash internal data structure from the CSV input. The csv filter will extract the data from CSV into fields. The mutate filter removes unused fields from the http plugin. Finally, the output is sent to Elasticsearch and stdout. Since there is no timestamp in data, the logstash will create a timestamp field by using system time. User and password are optional for the http plugin. Comment begins with #.

```shell
input {
  http {
    port => "80"
    user => "username"
    password => "password"
  }
}
filter {
  csv {
    separator => ","
    columns => ["ID", "Moisture", "Temperature", "Light"]
    convert => {
      "Moisture" => "float"
      "Temperature" => "float"
      "Light" => "float"
    }
  }

  mutate {
    remove_field => ["host", "headers"]
  }
}
output {
  elasticsearch {
    hosts => "http://localhost:9200"
    index => "sensor"
  }
  stdout {}
}
```

To send data, we can use curl command as shown below.

```shell
curl -u user:password http://logstash_ip -d 'abc,1.0,2.0,3.0'
```

The output looks like:
```javascript
{
     "@timestamp" => 2018-07-10T05:46:50.662Z,
        "message" => "abc,1.0,2.0,3.0",
    "Temperature" => 1.0,
       "Moisture" => 2.0,
          "Light" => 3.0,
             "ID" => "abc",
       "@version" => "1"
}
```

## Receive HTTP URL and send to Elasticsearch
In the following configuration, data are sent in HTTP url, e.g. http://localhost/abc?data=1.0,2.0,3.0. We use grok plugin for pattern matching.

```shell
input {
 http {
   port => "80"
 }
}
filter {
  grok {
    match => { "[headers][request_uri]" => "/%{GREEDYDATA:ID}\?data=%{NUMBER:Moisture},%{NUMBER:Temperature},%{NUMBER:Light}" }
  }
  if "_grokparsefailure" in [tags] {
    drop { }
  }

 mutate {
   remove_field => ["host", "headers"]
 }
}
output {
  elasticsearch {
    hosts => "http://localhost:9200"
    index => "sensor"
  }
  stdout {}
}
```
