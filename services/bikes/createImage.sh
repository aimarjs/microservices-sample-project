#!/usr/bin/env bash

docker rm -f bikes-service

docker rmi aimaraa/bikes-service

docker image prune

docker volume prune

docker build -t bikes-service .
