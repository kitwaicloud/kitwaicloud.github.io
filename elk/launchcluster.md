# Launch an ELK cluster

Assume a keypair has been imported; otherwise follow the instructions [here](../login/login.md).

For launching a spark cluster for running Big Data Analytics jobs on KitWai platforms, please follow the instructions below on how to launch a spark cluster.

1. Click on Data Processing menu and Clusters menu which is under Data Processing menu, respectively. Then, click on Clusters tab and click on Launch Cluster button.

   <img src="launchcluster-1.png" width="600">

   ​

2. On Launch Cluster page, select plugin name as ELK Plugin. Then, click on Next button.

   <img src="launchcluster-2.png" width="600">

   ​

3. On Launch Cluster page, enter cluster name, e.g "demo" and select your keypair. Ensure that the Cluster Template is set to elk-template. and Base Image is set to "ELK 6.2.4 ..." Then, click on Launch button.

   <img src="launchcluster-3.png" width="600">


4. While an ELK cluster is launching, please wait until cluster status has changed to Active and also health status has changed to Green bar (3-5 minutes).

   <img src="launchcluster-4.png" width="600">

   ​
5. Congratulation, the ELK cluster is ready for use.

Each cluster from the elk-template consists of 2 master/data nodes with 1 client only node. The master node also runs cerebro web UI. The client nodes run Kibana data visualization tool and Grafana dashboard.

To find the IP address and port of services on all nodes, click on the cluster name to see the general information of the cluster.

  <img src="cluster_info.png" width="400">


User can see the IP and port of every service such as Cerebro Web UI, Kibnana, and Grafana.

  <img src="ip_port.png" width="250">

Click on the Cerebro URL to see if the ELK cluster has correctly launched.

  <img src="cerebro_overview.png" width="500">
