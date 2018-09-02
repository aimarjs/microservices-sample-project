#!/usr/bin/env bash

docker service create --replicas 1 --name movies-service -l=apiRoute='/bikes' -p 3000:3000 aimaraa/bikes-services
