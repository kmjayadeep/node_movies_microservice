#!/usr/bin/env bash
eval `docker-machine env manager1`
docker build -t catalog-service .
docker run --name catalog-service -p 3000:3000 --add-host manager1:192.168.99.100 --add-host worker1:192.168.99.101 --add-host worker2:192.168.99.102 --env-file env -d catalog-service