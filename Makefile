network:
	docker network create app_network

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

log:
	docker logs --follow api

dev: down up log
