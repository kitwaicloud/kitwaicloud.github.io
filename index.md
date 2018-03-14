# KitWai Instruction Manual

KitWai, a software to build a cloud-based big data analytics platform, provides self-configured, on-demand, and scalable computing resources for big data processing. It consists of the following components.

| Layer | Component |
|----|----|
| Tools and utilities | Ganglia Monitoring, Thrift JDBC connection, Jupyter/Zeppelin Notebook, RStudio Server |
| Distributed computing platform for big data analytics | Hadoop HDFS 2.7.1, Spark 2.2.0, Flink 1.4.0, Kafka 1.0.0, Tensorflow on Spark|
| Cloud-based resource management  | CentOS 7.4, Openstack Pike (Nova, Cinder, Swift, Sahara, Glance, Neutron), Nvidia GPU support |

This instruction manual provides an illustrative examples to use KitWai cloud computing platform. It requires a basic knowledge of Linux commands plus some background knowledge on data mining/machine learning.

## Basics
1. [Overview](overview.md)
2. [Login to KitWai and Import KeyPair](login/login.md)
3. [Launch a Spark Cluster](launchcluster/launchcluster.md)
4. [Verify and Check Spark Cluster Status](status/status.md)
5. [Do Machine Learning with Jupyter Notebook](jupyter/jupyter.md)
6. [Terminate Spark Cluster after Use](terminate/terminate.md)

## Other Tasks
- [Working with Data in Swift Object Storage](swift/swift.md)
- [Production Recommendation Example](als/als.md)
- [Deep Learning with DeepLearning4J](dl4j/dl4j.md)
- [Deep Learning with TensorFlow on Spark](tensorflow_on_spark/tensorflow_on_spark.md)
- [How to Create a Cluster Template](create_template/create_template.md)
- [Using API Libraries to Operate KitWai](apis/apis.md)
- [SparkSQL and JDBC Connnection](sparksql/sparksql.md)
- [Using Zeppelin Notebook for Spark Programming in Scala](zeppelin/zeppelin.md)
- [Launch a Flink Cluster](launchflink/launchflink.md)

## Further Readings
