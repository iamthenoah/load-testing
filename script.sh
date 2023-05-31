#!/usr/bin/env bash

docker compose up

artillery run clipboard-service.yml --count 50
artillery run content-service.yml --count 50
# artillery run dispatch-service.yml --count 50

docker compose down