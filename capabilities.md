# Capability Matrix

## Scalability
A cluster can be scaled up or down depending on the processes running on the node groups. Some processes are required to have exactly one instance in the cluster, others can only be scaled up, etc. The following table summarizes the capability of processes in scaling. If a node consists of multiple processes, the scalabiltiy will depends on the most restrict process.

### KitWai Spark Cluster
| Process | Initially Required | Scale-up | Scale-down |
|----|----|----|----|
| namenode        | Exactly one  | No          | No |
| datanode        | At least one | Yes         | No |
| master          | Exactly one  | No          | No |
| slave           | At least one | Yes         | Yes  |
| history server  | Option       | No          | No |
| thrift server   | Option       | At most one | Yes  |
| jupyter         | Option       | At most one | Yes  |
| superset        | Option       | At most one | Yes  |
| rstudio         | Option       | At most one | Yes  |
| kafka           | Option       | No          | No   |
| ganglia master  | Option       | No          | No |
| ganglia slave   | Option       | Yes         | Yes  |
