# Overview

This instruction manual provides a guideline how to perform tasks on KitWai platform ranging from starting, using and terminating a Spark cluster. Although we use python and Jupyter notebook as the main tools to give illustrative examples, other tools and programming language can still be used if needed.

KitWai consists of the following components.


| Layer | Component |
|----|----|
| Tools and utilities | Ganglia Monitoring, Thrift JDBC connection, Jupyter/Zeppelin Notebook, RStudio Server |
| Distributed computing platform for big data analytics | Hadoop HDFS 2.7.1, Spark 2.2.0, Flink 1.4.0, Kafka 1.0.0, Tensorflow on Spark|
| Cloud-based resource management  | CentOS 7.4, Openstack Pike (Nova, Cinder, Swift, Sahara, Glance, Neutron), Nvidia GPU support, KVM Hypervisor and LXC Linux Container Support |

Several python packages are already installed in the cluster, including numpy, pandas, matplotlib, etc. Additionally, there exist Java and Scala compilers available too.
