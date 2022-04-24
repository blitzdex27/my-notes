## Using terminal interactive

> docker run -ti ubuntu:latest bash

    - `t` stands for terminal
    - `i` stands for interactive

## Show stopped containers

Show all containers including running and stopped

> docker ps -a

Show last stopped container

> docker ps -l

## Docker commit flow

Run the image. When image is set to runs, a container will be created for that image.

> docker run -ti ubuntu bash

Modify something on that image

> touch my-important-file

Stop the container

> docker stop CONTAINER_ID

Commit the changes made on the image inside the container into new image

Show the last stopped container

> docker ps -l

Commit the changes

> docker commit CONTAINER_ID

Name the new image created

> docker tag NEW_IMAGE_ID NAME_OF_NEW_IMAGE

Shorthand for commit and name

> docker commit CONTAINER_ID NAME_OF_NEW_IMAGE

**Run image and delete the container on exit**

You can do this using the `--rm` argument

> docker run --rm ubuntu sleep 5

**Run commands on the container in one line**

You can do this using the `-c` argument

> docker run -ti ubuntu bash -c "echo starting; sleep 2; echo finished"

**Run container in detached mode**

You can do this using `-d` argument

> docker run -d -ti ubuntu bash

This will prints out an identifier ID. Also, you can see the running container using `docker ps`

To attach the detached container:

> docker attach CONTAINER_NAME

\*To detach on-demand press `CTRL+P` then `CTRL+Q`

**Running more things in a Container**

> docker exec CONTAINER COMMAND

Use cases:

- Starts another process in an existing container
- Great for debugging and DB administration
- Can't add ports, volumes, and so on

Suppose you already have a running bash shell after entering `docker run -ti ubuntu bash`. You can run another bash shell inside that container using `docker exec -ti CONTAINER COMMAND`

When you exit the shell created using `exec`, the main shell will keep running. However, if the main shell exits, all other shell exits.

**Looking at container output**

> `docker logs [OPTIONS] CONTAINER`

**Set the container name**

Use `--name NAME`

> `docker run --name example -d ubuntu bash`

**Stop and remove containers**

Stop using `docker kill CONTAINER`
Remove using `docker rm CONTAINER`

**Resource Constraints**

- Memory limits
  > `docker run --memory MAXIMUM_ALLOWED_MEMORY IMAGE_NAME COMMAND`
- CPU limits
  > `docker run --cpu-shares` relative to other containers
  > `docker run --cpu-quota` to limit it in general

**Lessons from field**

- Don't let your containers fetch dependencies when they start. When the package is removed from NPM repository, your container will become unstable. So include the dependencies inside the container.
- Don't leave important things in unnamed stopped containers. You may accidentally delete the container when your memory is full.

## Container networking

### Exposing ports => _container-host-container_

**Container Networking**

- Programs in container are isolated from the internet by default.
- You can group your containers into "private" networks.
- You explicitly choose who can connect to whom
- Expose ports to let connections in
- Private networks to connect between containers

To expose a specific port

- Explicitly specify the port inside the container and outside
- Exposes as many ports as you want
- Requires coordination between containers
- Makes it easy to find the exposed ports

**Sample**

Server:

> `docker run -ti --rm -p 45678:45678 -p 45679:45679 ubuntu:14.04 bash` > `nc -lp 45678 | nc -lp 45679`

Client 1:

> For Windows/Mac, enter: `docker run -ti --rm ubuntu:14.04 bash`
> For Linux, enter: `docker run -ti --rm --add-host=host.docker.internal:host-gateway ubuntu:14.04 bash`
>
> For Windows enter: `nc 192.168.56.1 45678`
> For Mac/Linux enter: `nc host.docker.internal 45678`

Client 2:

> For Windows/Mac enter: `docker run -ti --rm ubuntu:14.04 bash`
> For Linux: `docker run -ti --rm --add-host=host.docker.internal:host-gateway ubuntu:14.04 bash`
>
> For Windows enter: `nc 192.168.56.1 45679`
> For Mac/Linux enter: `nc host.docker.internal 45679`

Then on the client 1 bash shell enter any words. The words will be sent to client 2 shell.

**Dynamically expose ports**

Docker will assign an outside port automatically when you did not specify it.

> `docker run -ti --rm --name echo-server -p 45678 -p 45679 ubuntu:14.04 bash`

To check the port exposed:

> `docker port CONTAINER`

**Exposing UDP ports**

Syntax

> `docker run -p outside-port:inside-port/protocol(TCP/UDP)`

Sample

> `docker run -p 1234:1234/udp

Previously, when we want a container to connect to other container, we first need to expose it outside (to the host port) then the other container can connect to it using host.docker.internal.

However, there is more efficient way.

### Connecting directly between containers => **_container-container_**

We can connect docker containers' network without exposing it outside.

#### Existing network by default

> `docker network ls`

Through the command above, you will see network names called `bridge`, `host`, and `none`.

- `bridge` is the network used by containers that don't specify a preference to be put into any other network.
- `host` is when you want a container to not have any network isolation at all
- `none` is for when a container should have no networking

#### Create a network

To create a network called `learning`

> `docker network create learning`

#### Putting machines into `learning` network

Run the container in interactive terminal, attached to `learning` network, named catserver, and remove the container on exit.

> `docker run --rm -ti --net learning --name catserver ubuntu:14.04 bash`

#### Connect a container onto the other docker network

Containers can connect to multiple networks

Syntax

> `docker network connect NETWORK_NAME CONTAINER`

Sample

> `docker network connect catsonly catserver`

### Legacy linking => **_container->container, one-way_**

The one who used link will be able to contact the server linked. But the server will not be able to contact the linked networks if they do not expose the ports.

```
docker run --rm -ti --link catserver ubuntu:14.04 bash
```

## Images

When you list images and you see different tags with same size, that images only use the same space. This is since tag names came from the same image.

The total size is: _original size + modification size_

## Volumes

- Virtual "discs" to store and share data
- Two main varieties
  - Persistent - data will stay even on exit
  - Ephemeral - data will be deleted on exit
- Not part of images

### Sharing Data with the Host

```bash
docker run -ti --rm -v "C:\Users\dexte\Desktop\W Dev\Trainings\Docker\Hello:\shared-folder" ubuntu:14.04 bash
```

### Sharing data between containers

- `--volumes-from`
- shared "discs" that exist only as long as they are being used (Ephemeral)
- can be shared between containers

Run container while specifying the shareable volume using `-v`

```bash
docker run -ti --rm -v /shared-folder --name my-server ubuntu bash
```

Run container while specifying the volume(s) used by other container using `--volumes-from`

```bash
docker run -ti --rm --volumes-from my-server ubuntu bash
```

### Docker registries

- Registries manage and distribute images
- Docker offers these for free
- You can run your own as well

#### Search

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

> Story time:
>
> - Don't push image containing password to docker hub
> - Clean up images regularly
> - You will discover the images you will really need
> - Be aware of how much you are trusting the containers you fetch

## Dockerfile

- A small "program" to create an image
- To run:

```
docker build -t NAME-of-RESULTING-IMAGE .
```

- When finished the result will be in local docker registry

### Dockerfile is not a shell script

- Dockerfiles look like shell scripts
- Dockerfiles are not shell scripts
- Processes you start on one line will not be running on the next line
- Environment variables you set will be set on the next line
  - if you use ENV command, remember that each line is its own call to docker run

### Dockerfile

- FROM - specifies the image to download and start from
- MAINTAINER - defines the author of the Dockerfile

```docker
MAINTAINER firstname lastname email@example.com
```

- RUN - runs the command line, waits for it to finish, and saves the result

```docker
RUN unzip install.zip /opt/install
RUN echo hello
```

- ADD - Adds local files. Add contents of tar archives. Add file from a URL.

```docker
ADD run.sh /run.sh
ADD project.tar.gz /install/
ADD https://project.example.com/download/1.0/projec.rpm /project/
```

- ENV - Sets environment variables. Available both during build and when running the result.

```docker
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

```docker
EXPOSE 8080
```

- VOLUME - Defines shared or ephemeral volumes. Same as `-v`

```docker
VOLUME ["/host/path", "/container/path/"]
VOLUMe ["/shared-data"]
```

> Avoid defining shared folders in Dockerfiles with host, because it will only work on your computer

- WORKDIR - Sets the directory the container starts in

- USER - Sets which user the container will run as

```docker
USER arthur
```

## Multistage build

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

### The bottom line

Use RUN instructions to build your image by adding layers on top of initial image.

Prefer ENTRYPOINT to CMD when building executable Docker image and you need a command always to be executed. Additionally use CMD if you need to provide extra default arguments that could be overwritten from command line when docker container runs.

Choose CMD if you need to provide a default command and/or arguments that can be overwritten from command line when docker container runs.

### Preventing Golden Image Problem

- include installers in your project
- have a canonical build that builds everything from scratch
- tag your build with the git hash of the code that built it
- Use small base images, such as Alpine
- Build images you share publicly from Dockerfiles, always
- Don't ever leave passwords in layers; delete files in the same step!

## Under the hood

### Kernels

What Kernel Does?

- Respond to messages from the hardware
- Start and schedule programs
- Control and organize storage
- Pass messages between programs
- Allocate resources, memory, CPU, network, and so on
- Create containers by Docker configuring the kernel

What Docker Does?

- Program written in Go -- an upcoming systems language
- Manages kernel features
  - Uses "cgroups" to contain processes
  - Uses "namespaces" to contain networks
  - Uses "copy-on-write" filesystems to build images
- Used for years before docker

## Orchestration: Building Systems with Docker

### Registries in detail

Run a local registry

```sh
docker run -d -p 5000:5000 --restart=always --name registry registry:2
```

Save your image to local registry

```
docker tag ubuntu:14.04 localhost:5000/mycompany/my-ubuntu:99
docker push localhost:5000/mycompany/my-ubuntu:99
```

Note: Setup authentication and security before exposing to any network. https://docs.docker.com/registry

Registry storage alternatives:

- Local storage
  Store (`-o` for output)

  ```
  docker save -o my-images.tar.gz debian:sid busybox ubuntu:14.04
  ```

  Remove

  ```
  docker rmi debian:sid busybox ubuntu:14.04
  ```

  Load (`-i` for input)

  ```
  docker load -i my-images.tar.gz
  ```

- docker hub
- Amazon ECS
- Google Cloud Container Registry
- MS Azure Container Registry

### Intro to Orchestration

#### One Container = One Hand Clapping

- Many orchestrations systems for Docker
- Start containers -- and restart them if they fail
- Service discovery -- allow them to find each other
- Resouce alloation -- match containers to computers

#### Docker Compose

- Single macine coordination
- Design for testing and development
- Brings up all your containers, volumes, networks, etc., with one command

#### Kubernetes

- Containers run programs
- Pods group containers together
- Services make pods available to others
- Labels are used for very advanced service discovery

Advantages of Kubernetes

- Makes scripting large operations possible with the `kubect1` command
- Very flexible overlay networking
- Runs equally well on your hardware or a cloud provider
- Built-in service discovery
- Get started at http://kubernetes.io/

#### EC2 Container Service (ECS)

- Task definitions
  Define a set of containers that always run together

- Tasks
  Actually makes a container run right now

- Services and exposes it to the Net
  Ensures that a task is running all the time

Advantages of ECS

- Conntects load balancers (ELBs) to services
- Can create your own host instances in AWS
- Make your instances start the agent and join the cluster
- Pass the docker control socket into the agent
- Provides docker repos--and it's easy to run your own repo
- Note that containers (tasks) can be part of CloudFOrmation stacks!
- Get started at https://aws.amazon.com/ecs/
