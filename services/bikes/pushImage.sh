#!/usr/bin/env bash

docker tag bikes-service aimaraa/bikes-service
docker push aimaraa/bikes-service

echo "Done!"
