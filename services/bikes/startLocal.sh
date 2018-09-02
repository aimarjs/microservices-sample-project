#!/usr/bin/env bash

docker rm bikes -f
docker run --name bikes -p 3000:3000 -e DB_SERVERS="192.168.99.104:27017 192.168.99.105:27017 192.168.99.106:27017" -d aimaraa/bikes-services
