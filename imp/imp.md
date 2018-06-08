# Running Integrated Meta-omic Pipeline (IMP) for Bioinformatic Analysis

[IMP](http://r3lab.uni.lu/web/imp/) is a workflow engine to automate integrated analysis of the multi-omic data. IMP can be run in a docker container to ensure that it can run  with all dependency libraries under isolated environment. Here, we show how to launch a VM instance with IMP on KitWai Cloud platform.

## 1. First, a user must have an account and imported keypairs. Follow the instructions [here](/login/login.md) if necessary.

## 2. Launch an IMP instance.

2.1. Click on the Project/Compute/Instances menu and then click on the "Launch Instance" button.
   <img src="launch_instance.png">

2.2. The Launch Instance will pop up. Input the instance name, e.g. _test_. The instance name must not be duplicated with other instances.
   ​<img src="details.png" width=600>

2.3. Then, select the IMP image source. Be sure to set Create New Volume to NO.
   ​<img src="source.png">

2.4. Next, select the instance size (flavor) by clicking at the arrow up button. Each flavor is named by the number of CPU cores, memory and harddisk size. For example, c8m20d50 means 8 CPU cores, 20 GB memory, and 50 GB harddisk. The flavor depends on the size of analysis task. For a small task c8m20d50 should be large enough. Finally, click on the Launch Instance button.

   ​<img src="flavor.png">

## 3. Check the status of the instance being launched and wait until the instance is completely launched.   ​

   ​<img src="running.png">

## 4. Assign a public (called floating) IP address to your VM instance

4.1. click on drop down list of your VM and select “Associate Floating IP” menu. The floating IP lets your VM be accessible from the your network.

   ​<img src="associate_floating_ip.png">

4.2. Click at plus button to allocate a new floating IP.

   ​<img src="new_ip.png" width=400>

4.3. Click at Allocate IP button.

   ​<img src="allocate_ip.png" width=400>

4.4. Now, you obtain a floating IP which is shown in IP Address box. Then, click at Associate button.

   ​<img src="associate.png" width=400>

4.5. The floating IP is already assigned to your VM instance which is shown in the Instances page. Take note of your floating IP. You will have to use this floating IP to login to the VM.

   ​<img src="associated.png">
