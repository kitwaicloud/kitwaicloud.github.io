# Product Recommendation Example

This example shows how to build a model for product recommendation. In this example, a spark example program is used. It runs the Alternating Least Square (ALS) algorithm to build a model to predict the rating of unseen movies for a particular user.

The input dataset are taken from http://grouplens.org/datasets/movielens/.  It consists of ratings.csv, each line of which describes the rating (1 – 5) that a user gives to a movie, as shown below. Each line consists of UserID::MovieID::Rating::Timestamp. Note that the other larger dataset has slightly different format and cannot work without modification.

```
1::1193::5::978300760
1::661::3::978302109
1::914::3::978301968
1::3408::4::978300275
1::2355::5::978824291
1::1197::3::978302268
1::1287::5::978302039
1::2804::5::978300719
1::594::4::978302268
1::919::4::978301368
1::595::5::978824268
```

1. SSH to the master node

2. Download the 1M dataset and put them into HDFS.
```shell
wget http://files.grouplens.org/datasets/movielens/ml-1m.zip
sudo yum install unzip
unzip ml-1m.zip
hdfs dfs -put ml-1m .
```

3. Submit a spark job. All parameters of the ALS algorithm are set to default values.
```shell
spark-submit --class org.apache.spark.examples.mllib.MovieLensALS --jars /opt/spark/examples/jars/scopt_2.11-3.3.0.jar /opt/spark/examples/jars/spark-examples_2.11-2.2.0.jar ./ml-1m/ratings.dat
```
 The output below just shows the RMSE (Root Mean Square Error) of the trained model. Using the trained model requires minor modification of the program.

```
18/03/12 14:33:26 INFO SparkContext: Running Spark version 2.2.0
18/03/12 14:33:26 WARN NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
18/03/12 14:33:26 INFO SparkContext: Submitted application: MovieLensALS with {
  input:	./ml-1m/ratings.dat,
  kryo:	false,
  numIterations:	20,
  lambda:	1.0,
  rank:	10,
  numUserBlocks:	-1,
  numProductBlocks:	-1,
  implicitPrefs:	false
}
18/03/12 14:33:26 INFO SecurityManager: Changing view acls to: centos
18/03/12 14:33:26 INFO SecurityManager: Changing modify acls to: centos
18/03/12 14:33:26 INFO SecurityManager: Changing view acls groups to:

... skip....

Got 1000209 ratings from 6040 users on 3706 movies.
Training: 799402, test: 200807.
```
