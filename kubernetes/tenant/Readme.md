kubectl create namespace tenant
kubectl apply -f tenant-env-minikube.yml -n=tenant

kubectl apply -f tenant-env-k8s.yml -n=tenant

kubectl exec -it tenant-sample-app-01-6685cc6b64-r2pqt -n=tenant -- bash

export CLOUDSDK_PYTHON=$(which python3.11)
