# Import and Export Data in Batch
This section provides methods to import/export data from file.

## Export data to JSON file
The following command shows how to export data from "sensor" index in Elasticsearh to [bulk](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html) format.

```shell
elasticdump --input=http://localhost:9200/sensor --output=/tmp/sensor-dump.json --type=data
```

If you need the mappping, run the following command:

```shell
elasticdump --input=http://localhost:9200/sensor --output=/tmp/sensor-mapping.json --type=mapping
```

## Import data from JSON file
```shell
elasticdump --input=/tmp/sensor-mapping.json --output=http://localhost:9200/sensor --type=mapping
elasticdump --input=/tmp/sensor-dump.json --output=http://localhost:9200/sensor --type=data
```
