# Docker Basic Commands
## Build container

```bash
$ docker build -t <name-you-want> .
```
## Run container

```bash
$ docker run -dp <your-port>:<port-needed-by-app-inside> <container-name>
```

`-d` ==> detached mode - run container in background

`-p` ==> port mapping - define the port the container will be able to use in your system when the app in container requested to access a port

## See docker running process

```bash
$ docker ps
```

## Stop container

```bash
$ docker stop <container-id>
```
## Remove
* Container
    ```
    $ docker rm ID_or_Name ID_or_Name
    ```
* Image
    ```
    $ docker rmi ImageId ImageId
    ```
* Volume
    ```
    $ docker volume rm volume_name volume_name
    ```
## Login/logout
```
$ docker login
$ docker logout
```