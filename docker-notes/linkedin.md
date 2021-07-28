### Using terminal interactive

> docker run -ti ubuntu:latest bash

    - `t` stands for terminal
    - `i` stands for interactive

### Show stopped containers

Show all containers including running and stopped

> docker ps -a

Show last stopped container

> docker ps -l

### Docker commit flow

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

### Exposing ports

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
> For Linux, enter: `docker run -ti --rm --add-host=host.docker.internal ubuntu:14.04 bash`
>
> For Windows enter: `nc 192.168.56.1 45678`
> For Mac/Linux enter: `nc host.docker.internal 45678`

Client 2:

> For Windows/Mac enter: `docker run -ti --rm ubuntu:14.04 bash`
> For Linux: `docker run -ti --rm --add-host=host.docker.internal ubuntu:14.04 bash`
>
> For Windows enter: `nc 192.168.56.1 45679`
> For Mac/Linux enter: `nc host.docker.internal 45679`

Then on the client 1 bash shell enter any words. The words will be sent to client 2 shell.
