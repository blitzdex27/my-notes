### Set environment variable using `-e`

```
docker run --rm -ti -e SECRET=mydirtlittlesecret --name catserver ubuntu:14.04 bash
```

### Use _legacy linking_ to join network through `--link`

```
docker run --rm -ti --link catserver ubuntu:14.04 bash
```

### See the list of images

```bash
docker images
# or
docker image ls
```

### Tag image

Converting container into images. `commit` give the image a repository/tag name, or just simply name, and a version tag, which is default to latets.

```
docker commit CONTAINER_ID IMAGE_TAG_NAME:VERSION_TAG
```

Sample image name structure

```
registry.example.com:port/organization/image-name:version-tag
```

### Getting images

```
docker pull
```

Which automatically run by

```
docker run
```

### Cleaning up images

```bash
docker rmi image-name:tag
# or
docker rmi image-name
```

### Sharing Data with the Host

Sharing folder

```bash
docker run -ti --rm -v "C:\Users\dexte\Desktop\W Dev\Trainings\Docker\Hello:\shared-folder" ubuntu:14.04 bash
```

Sharing file

Make sure the file exists, or else docker will think it is a directory

### Sharing data between containers

```bash
docker run -ti --rm -v /shared-folder --name my-server ubuntu bash
```

```bash
docker run -ti --rm --volumes-from my-server ubuntu bash
```

### Search from docker registry

```
docker search ubuntu
```

#### Pull, tag, and push

```
docker login
docker pull debian:sid
docker tag debian:sid blitzdex27/my-deb:99.09
docker push blitzdex27/my-deb:99.09
```

#### Tag image

```
docker tag IMAGE IMAGE_W_D_TAG:VERSION_TAG
```

#### A container with no network isolation

```
docker run -ti --rm -net host ubuntu bash
```

### Stop and remove container

```
docker kill CONTAINER
docker rm CONTAINER
```

### Dockerfile

- FROM - specifies the image to download and start from
- MAINTAINER - defines the author of the Dockerfile

```dockerfile
MAINTAINER firstname lastname email@example.com
```

- RUN - runs the command line, waits for it to finish, and saves the result

```dockerfile
RUN unzip install.zip /opt/install
RUN echo hello
```

- ADD - Adds local files. Add contents of tar archives. Add file from a URL.

```dockerfile
ADD run.sh /run.sh
ADD project.tar.gz /install/
ADD https://project.example.com/download/1.0/projec.rpm /project/
```

- ENV - Sets environment variables. Available both during build and when running the result.

```dockerfile
ENV DB_HOST=db.production.example.com
```

- ENTRYPOINT - Specifies the start of the command to run. When you specify `ls` for example, whenever you type in a command on the docker run, it will be an argument for `ls`

- CMD - Specifies the whole command to run. When the user specifies the command using `docker run --ti ubuntu [command]` it will be overriden.

> `ENTRYPOINT`, `RUN`, and `CMD` can use either form.
>
> - Shell form:
>
> ```docker
> nano notes.txt
> ```
>
> - Exec form:
>
> ```docker
> ["/bin/nano", "notes.txt"]
> ```

- EXPOSE - Maps a port into the container, just like `-p`

```dockerfile
EXPOSE 8080
```

- VOLUME - Defines shared or ephemeral volumes. Same as `-v`

```dockerfile
VOLUME ["/host/path", "/container/path/"]
VOLUMe ["/shared-data"]
```

> Avoid defining shared folders in dockerfilefiles with host, because it will only work on your computer

- WORKDIR - Sets the directory the container starts in

- USER - Sets which user the container will run as

```dockerfile
USER arthur
```

### Multistage build

This will output an image of around 200 MB

```dockerfile
FROM ubuntu:16.04
RUN apt-get update
RUN apt-get -y install curl
RUN curl https://google.com | wc -c > google-size
RUN echo google is this big; cat google-size
```

This will output an image of around 5 MB!

```dockerfile
FROM ubuntu:16.04 as builder
RUN apt-get update
RUN apt-get -y install curl
RUN curl https://google.com | wc -c > google-size

FROM alpine
COPY --from=builder "/google-size" "/google-size"
ENTRYPOINT echo google is this big; cat google-size
```
