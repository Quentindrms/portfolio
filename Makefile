PROD_COMPOSE_FILE = compose.prod.yaml

prod-start:
	docker compose -f ${PROD_COMPOSE_FILE} up
prod-stop: 
	docker compose -f ${PROD_COMPOSE_FILE} down