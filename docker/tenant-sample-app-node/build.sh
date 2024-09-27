# eval $(minikube docker-env)
docker build --no-cache -t tenant-sample-app-node .
docker tag tenant-sample-app-node quay.io/pierophp/tenant-sample-app-node
docker push quay.io/pierophp/tenant-sample-app-node