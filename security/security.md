# Security in KitWai

Under construction.

## Authentication and Authorization
We deploy [nginx](https://www.nginx.com/) to provide proxy access to the backend services such that they are not directly exposed to the Internet. These services are further protected by [nginx-keystone-auth](https://github.com/ekasitk/nginx-keystone-auth) which requires users to authenticate with Openstack keystone under which project the cluster or service was launched. Authorization is granted to any user in the same project.

<img src="login_form.png">

The following services are supported.
- HDFS web UI
- Spark web  and history UI
- Jupyter Notebook
- Zeppelin Notebook


## Data Encryption
