# Observation notes

## [obs-001-20210619] Building a container

**Observation**

When a container is built.
> `sudo docker built -t getting-started .`

* The container cannot be seen on the list of containers. 
    > `sudo docker container ls` 

    > `sudo docker container ls -a`.

* It will only be registered on the list of containers once you run it. 
    > `sudo docker run -dp 3000:3000 getting-started`.

**Hypothesis**

1. It seems it is hidden, or temporarily stored somewhere, hence not considered an official local container. If so, the container needs specific command to list this container on this phase.

2. It will be deleted upon system restart, or even after closing the terminal session.

**Tests**

*Hypothesis 1*

* hp1-t1: Use `sudo docker image ls`

*Hypothesis 2*

* hp2-t1: Close terminal, re-open, then run the container.

* hp2-t2: Restart the system, re-open terminal, then run the container.

**Results**

* hp1-t1-r1: A list of docker images showed up including major dependencies like node.

* hp2-t1-r1: Nothing changed.

* hp2-t2-r1: Nothing changed.

**Conclusion**

Instead of a container, an image will be created upon building. The following is the actual process.

1. Build 
    > `sudo docker build -t getting-started`

2. The image will be built

    > `sudo docker image ls`

    or 

    > `sudo docker images`

3. Run the image

    > `sudo docker run -dp 3000:3000 getting-started`

4. The image will be included in the docker process

    > `sudo docker ps`

5. The container of that image will be created upon running. *Maybe for easy targetting*

    > `sudo docker container ls`


It seems the container contains all required images and dependencies to run the target image, and that image is also inside that container.

    However, there is this one question. Where is the `getting-started` stored after building, enough for it to be called just by its name?