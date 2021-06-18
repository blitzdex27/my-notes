# Docker Basics
* Build container
    ```bash
    $ docker build -t <name-you-want> .
    ```
* Run container
    ```bash
    $ docker run -dp <your-port>:<port-needed-by-app-inside> <container-name>
    ```
    * `-d` ==> detached mode - run container in background
    * `-p` ==> port mapping - define the port the container will be able to use in your system when the app in container requested to access a port

* See docker running process
	```bash
	$ docker ps
	```
* Stop container
    ```bash
    $ docker stop <container-id>
    ```
* Remove
    * Specific container(s)

        List:
        ```
        $ docker ps -a
        ```
        Remove:
        ```bash
        $ docker rm ID_or_Name ID_or_Name
        or
        $ docker rm -f ID_or_Name ID_or_Name
        ```
        -f ==> forced removal - remove container even if it is currently running
    * Container upon exit
        ```
        $ docker run --rm -image_name
        ```
    * All exited containers

        List all and filter:
        ```
        $ docker ps -a -f status=exited
        ```
        Remove:
        ```
        $ docker rm $(docker ps -a -f status=exited -q)
        ```
    * Containers using more than one filter
        
        List:
        ```
        $ docker pa -a -f status=exited -f status=created
        ```
        Remove:
        ```
        $ docker rm $(docker ps -a -f status=exited -f status=created -q)
        ```
        `created` is a state when a container is run using invalid command
    * Containers according to a pattern
        
        List:
        ```
        $ docker ps -a | grep "pattern"
        ```
        Remove:
        ```
        $ docker ps -a | grep "pattern" | awk '{print $1}' | xargs docker rm
        ```
    * Specific image(s)
        ```bash
        $ docker rmi ImageId ImageId
        ```
    * Specific images according to a pattern

        List:
        ```
        $ docker images -a |  grep "pattern"
        ```
        Remove:
        ```
        docker images -a | grep "pattern" | awk '{print $3}' | xargs docker rmi
        ```
    * All images

        List:
        ```
        $ docker images -a
        ```
        Remove:
        ```
        $ docker rmi $(docker images -a -q)
        ```
    * Dangling images
        ```bash
        $ docker images -a -f dangling=true
        $ docker image prune
        ```
        `-a` means all
        `-f` means filter
        `dangling` images are layers that no relationship to any tagged images

    * Purging All Unused or Dangling Images, Containers, Volumes, and Networks
        ```bash
        $ docker system prune
        ```
    * Purging All Unused or Dangling Images, Containers, Volumes, and Networks, including Stopped Containers
        ```bash
        $ docker system prune -a
* Login/logout
    ```bash
    $ docker login
	$ docker logout
    ```