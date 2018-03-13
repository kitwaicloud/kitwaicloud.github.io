# Deep Learning with DeepLearning4J

This example shows how to run a deeplearning4j example on spark cluster. The example is to train a multi-layer neural network model to recognize hand-written digits from the MNIST dataset.

1. SSH to the master node

2. Download MNIST dataset

```shell
mkdir MNIST
wget http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz
wget http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz
wget http://yann.lecun.com/exdb/mnist/t10k-images-idx3-ubyte.gz
wget http://yann.lecun.com/exdb/mnist/t10k-labels-idx1-ubyte.gz
mv train-images-idx3-ubyte.gz images-idx3-ubyte.gz
mv train-labels-idx1-ubyte.gz labels-idx1-ubyte.gz
```
3. Download maven

```shell
cd $HOME
wget http://www-eu.apache.org/dist/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz
tar -zxvf apache-maven-3.3.9-bin.tar.gz
```

4. Download and compile deeplearning4j example programs

```shell
cd $HOME
git clone https://github.com/deeplearning4j/dl4j-examples
```
Check dl4j-examples/pom.xml if java.version is set to 1.8 and scala.binary.version to 2.11.

Change the dl4j.spark.version and datavec.spark.version from \_1 to \_2


Then, compile the dl4j example programs.

```shell
cd $HOME/dl4j-examples/dl4j-spark-examples/dl4j-spark
$HOME/apache-maven-3.3.9/bin/mvn package
```

Without any errors, the jar package is created under target directory.

```shell
ls target
```

Notice the version of dl4j-spark-&lt;version&gt;-bin.jar.

```
classes                   generated-sources      maven-status
dl4j-spark-0.9.1-bin.jar  maven-archiver
dl4j-spark-0.9.1.jar      maven-lint-result.xml

```

5. Submit MNIST Training Job

Pass the dl4j-spark-&lt;version&gt;-bin.jar that is found in target directory.

```shell
rm -rf $HOME/MNIST
spark-submit --class org.deeplearning4j.mlp.MnistMLPExample \
    target/dl4j-spark-0.9.1-bin.jar \
    -useSparkLocal false
```

The example program may take 10-20 minutes to finish (up to the cluster size and configuration). An example result is shown below.

```
... skip ...

Examples labeled as 9 classified by model as 6: 3 times
Examples labeled as 9 classified by model as 7: 57 times
Examples labeled as 9 classified by model as 8: 15 times
Examples labeled as 9 classified by model as 9: 5766 times


==========================Scores========================================
 # of classes:    10
 Accuracy:        0.9818
 Precision:       0.9818
 Recall:          0.9816
 F1 Score:        0.9817
Precision, recall & F1: macro-averaged (equally weighted avg. of 10 classes)
========================================================================
```
