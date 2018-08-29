PROJECT = node-ql
REGISTRY = docker.hikvision.com.cn
ORG = building

clean:
	-docker rm -f $(PROJECT)
	-docker rmi $(REGISTRY)/$(ORG)/$(PROJECT):$(VERSION)
build:
	docker build -t $(REGISTRY)/$(ORG)/$(PROJECT):$(VERSION) .
deploy:
	docker run -d --name=$(PROJECT) -p 3000:3000 --restart=always $(REGISTRY)/$(ORG)/$(PROJECT):$(VERSION)

all: clean build deploy