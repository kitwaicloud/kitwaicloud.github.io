# How to Deploy a Spark ML model

Under Construction

## 1. Upload the PMML model into Swift storage

Open a console terminal in Jupyter notebook. Use swift command to upload the model.

```shell
cd /tmp
swift --insecure upload model churn.pmml
churn.pmml
```

Users may see InsecureRequestWarning messages. This is due to our self-signed certificate which can be ignored.

```
/usr/lib/python2.7/site-packages/urllib3/connectionpool.py:858: InsecureRequestWarning: Unverified HTTPS request is being made. Adding certificate verification is strongly advised. See: https://urllib3.readthedocs.io/en/latest/advanced-usage.html#ssl-warnings
  InsecureRequestWarning)
```

Check if the model is uploaded.

```shell
cd /tmp
swift --insecure list model
churn.pmml
```

## 2. Launch an Openscoring cluster with a PMML model

Select Openscoring plugin

Select openscoring cluster template

Add the following Cluster Configs in Launch Cluster. These configs can be set in Cluster Template too.

```json
{
  "Openscoring" : {
    "Model Name" : "churn",
    "Model Swift URL" : "swift://model.sahara/churn.pmml"
  }
}
```

## 3. Evaluate the model
