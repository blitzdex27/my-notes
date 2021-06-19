# Remove

## Containers
### Specific container(s)

**List:**
```
$ docker ps -a
```
**Remove:**
```bash
$ docker rm ID_or_Name ID_or_Name
or
$ docker rm -f ID_or_Name ID_or_Name
```
-f ==> forced removal - remove container even if it is currently running
### Container upon exit
```
$ docker run --rm -image_name
```
### All exited containers

**List all and filter:**
```
$ docker ps -a -f status=exited
```
**Remove:**
```
$ docker rm $(docker ps -a -f status=exited -q)
```

### Containers using more than one filter
    
**List:**
```
$ docker pa -a -f status=exited -f status=created
```
**Remove:**
```
$ docker rm $(docker ps -a -f status=exited -f status=created -q)
```
`created` is a state when a container is run using invalid command

### Containers according to a pattern
    
**List:**
```
$ docker ps -a | grep "pattern"
```
**Remove:**
```
$ docker ps -a | grep "pattern" | awk '{print $1}' | xargs docker rm
```
---
## Volumes
### One or more

**List:**
```
docker volume ls
```

**Remove:**
```
docker volume rm volume_name volume_name
```

### Dangling

**List:**
```
$ docker volume ls -f dangling=true
```

**Remove**
```
$ docker volume prune
```

### Container and its volume

**Remove**
```
$ docker rm -v container_name
```
---

## Images
### Specific image(s)
```bash
$ docker rmi ImageId ImageId
```
### Specific images according to a pattern

**List:**
```
$ docker images -a |  grep "pattern"
```
**Remove:**
```
docker images -a | grep "pattern" | awk '{print $3}' | xargs docker rmi
```
### All images

**List:**
```
$ docker images -a
```
**Remove:**
```
$ docker rmi $(docker images -a -q)
```
### Dangling images
```bash
$ docker images -a -f dangling=true
$ docker image prune
```
`-a` means all
`-f` means filter
`dangling` images are layers that no relationship to any tagged images

### Purging All Unused or Dangling Images, Containers, Volumes, and Networks
```bash
$ docker system prune
```
### Purging All Unused or Dangling Images, Containers, Volumes, and Networks, including Stopped Containers
```bash
$ docker system prune -a