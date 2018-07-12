# Overview

This instruction manual provides a guideline how to perform tasks on KitWai platform ranging from starting, using and terminating a Spark cluster. Although we use python and Jupyter notebook as the main tools to give illustrative examples, other tools and programming language can still be used if needed.

KitWai consists of the following components.


| Layer | Component |
|----|----|
| Data exploration and visualization   |  Kibana 6.2.4, Grafana 5.1.3, Superset 0.25 |
| Connection and tools <sup>1</sup> | Ganglia Monitoring, Thrift JDBC connection, Jupyter/Zeppelin Notebook, RStudio Server |
| Distributed computing platform for big data analytics | Spark 2.3.0, Flink 1.4.0, Tensorflow on Spark|
| Distributed data streaming and storage platform | Hadoop HDFS 2.7.1, Elasticsearch 6.2.4, Kafka 1.0.0|
| Cloud-based resource management  | CentOS 7.4, Openstack Pike (Nova, Cinder, Swift, Sahara, Glance, Neutron), Nvidia GPU support, KVM Hypervisor and LXC Linux Container Support |

KitWai is not limited to be installed on bare-metal machines. Thanks to LXC container, virtual machine environment is also supported.

<sup>1</sup> Several python packages are already installed in the cluster, including numpy, pandas, matplotlib, etc. Additionally, Java and Scala compilers are pre-installed too.
