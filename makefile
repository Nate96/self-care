.PHONY: start start-backend start-frontend

start:
	@echo "Starting backend and frontend..."
	$(MAKE) start-backend & $(MAKE) start-frontend

backend:
	@echo "Starting backend..."
	cd back-end && uv run fastapi dev

frontend:
	@echo "Starting frontend..."
	cd web-ui && npm run dev
