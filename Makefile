CURRENT_DIR=$(shell pwd)

TAG=latest
ENV_TAG=latest

build-image-dev:
	docker build --rm -t ${REGISTRY}/${PROJECT_NAME}/${SERVICE_NAME}:${TAG} -f ./Dockerfile.dev .
	docker tag ${REGISTRY}/${PROJECT_NAME}/${SERVICE_NAME}:${TAG} ${REGISTRY}/${PROJECT_NAME}/${SERVICE_NAME}:${ENV_TAG}

build-image-prod:
	docker build --rm -t ${REGISTRY}/${PROJECT_NAME}/${SERVICE_NAME}:${TAG} -f ./Dockerfile.prod .
	docker tag ${REGISTRY}/${PROJECT_NAME}/${SERVICE_NAME}:${TAG} ${REGISTRY}/${PROJECT_NAME}/${SERVICE_NAME}:${ENV_TAG}
push-image:
	docker push ${REGISTRY}/${PROJECT_NAME}/${SERVICE_NAME}:${TAG}
	docker push ${REGISTRY}/${PROJECT_NAME}/${SERVICE_NAME}:${ENV_TAG}
