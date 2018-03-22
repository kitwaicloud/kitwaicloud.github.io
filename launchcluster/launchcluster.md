# Launch a Spark Cluster

For launching a spark cluster for running Big Data Analytics jobs on KitWai platforms, please follow the instructions below on how to launch a spark cluster.

1. Click on Data Processing menu and Clusters menu which is under Data Processing menu, respectively. Then, click on Clusters tab and click on Launch Cluster button.

   <img src="launchcluster-1.png" width="600">

   ​

2. On Launch Cluster page, select plugin name as Kitwai Plugin. Then, click on Next button.

   <img src="launchcluster-2.png" width="600">

   ​

3. On Launch Cluster page, enter cluster name as your desired and select your key pair name which is imported in step of importing an user key pair. Ensure that the Cluster Template is set to kitwai-template. and Base Image is set to "KitWai 1.2 - spark 2.2.0 ..." Then, click on Launch button.

   <img src="launchcluster-3.png" width="600">

   <img src="launchcluster-31.png" width="600">

4. While a spark cluster is launching, please wait until cluster status has changed to Active and also health status has changed to Green bar (3-5 minutes).

   <img src="launchcluster-4.png" width="600">

   <img src="launchcluster-5.png" width="600">

   ​
5. Congratulation, the spark cluster is ready in use.

   Each cluster from the kitwai-template consists of 1 master node and 2 worker nodes. The master node runs spark master, namenode and Jupyter processes. The worker nodes run spark worker and datanode processes.

   ​
