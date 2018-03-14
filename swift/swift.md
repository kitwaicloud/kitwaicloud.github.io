# Working with Data in Swift Object Storage
Openstack Swift is a cloud object storage. Swift stores arbitrary objects in specific namespaces,  called containers. Objects can be text, documents, images, or other types of files. A container is a place used to collect a set of objects, similar to a folder storing a set of files.

To store (import) and retrieve (export) files from Swift, several options are possible:
- Swift command line
- Web Interface
- GUI Client programs
- Directly from Spark programs

## Import/Export Swift Objects via Web Interface

### Import swift objects

- Login to KitWai platforms and go to containers page by clicking on Object Store menu then click on Containers menu.

  <img src="swift_web_menu.png" width="550">

  ​

- On Containers page, create a container by clicking on Container button.

  <img src="swift_web_containerpage.png" width="550">

  ​

- Create Container page will be pop up then enter container name as your desired and click on Submit button.

  <img src="swift_web_create_container.png" width="550">

  ​

- After creating the container has succeeded, the container name will be shown on Containers page.

  <img src="swift_web_containerlist.png" width="550">

  ​

- Then click on container name, users will see container information and button for importing files and creating folder on the container.

  <img src="swift_web_container_information.png" width="550">

  ​

- Import a file by clicking on upload file button.

  <img src="swift_web_import_button.png" width="550">

  ​

- Upload File page will be popup, then click on Browse button and select a file that users want  upload to the container.  

  <img src="swift_web_container_browsefile.png" width="550">

  ​

- Then, click on Upload file button for importing a file to the container.

  <img src="swift_web_container_upload.png" width="550">

  ​

- After uploading has succeeded, the file which is uploaded  will be shown in list on container page.

  <img src="swift_web_container_uploadsuccess.png" width="550">

  ​

- Import swift objects has succeeded.

### Export swift objects

- On container page, users can export a file from the container to users machine by clicking on download button on the filename that users want to download.

  <img src="swift_web_container_downloadfile.png" width="550">

  ​

## Import/Export Swift Objects via GUI Clients
There exist tools running on Windows or Mac.

- CloudBerry Explorer for Openstack https://www.cloudberrylab.com/explorer.aspx

Click on File -> New Openstack Account. Put username, password and other information as follows.

![](cloudberry_setup.png)

Then, select kitwai to connect to swift service.

![](cloudberry_connect.png)

The containers under the default project are shown.

![](cloudberry_container.png)

- Cyberduck https://cyberduck.io/

Click on File -> Open Connection. Put project, username, password and other information as follows.

![](cyberduck_setup.png)

The containers are shown.

![](cyberduck_container.png)

## How to Access Swift Objects directly from Spark Programs

**Swift object storage is not supposed to be  the working area for data intensive jobs. Use HDFS instead.** 

Spark can access Swift objects via HDFS layer. The URL format of a Swift object is in the following form:

```
swift://container_name.sahara/path/file
```

For example, if an object _churn-bigml-80.csv_ is stored under container _mycontainer_ and path _/dataset/churn_, the URL would be

```
swift://mycontainer.sahara/dataset/churn/churn-bigml-80.csv
```
Wildcard can also be used, e.g.
```
swift://mycontainer.sahara/dataset/churn/churn-bigml-*.csv
```
To use a swift object in Spark, refer to its URL.

```python
train_data = sqlContext.read.load('swift://mycontainer.sahara/dataset/churn/churn-bigml-80.csv',
                        format='com.databricks.spark.csv',
                        header='true',
                        inferSchema='true')

train_data.cache()
train_data.printSchema()
```
