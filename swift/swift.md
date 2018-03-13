# Working with Data in Swift Object Storage
Openstack Swift is a cloud object storage. Swift stores arbitrary objects in specific namespaces,  called containers. Objects can be text, documents, images, or other types of files.A container is a place used to collect a set of objects, similar to a folder storing a set of files. 

## Import/Export Swift Objects via Web Interface

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

## How to Access Swift Objects from Spark Programs
