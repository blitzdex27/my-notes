> Build container
    ```bash
    $ docker build -t <name-you-want> .
    ```
> Run container
    ```bash
    $ docker run -dp <your-port>:<port-needed-by-app-inside> <container-name>
    ```
    * `-d` ==> detached mode - run container in background
    * `-p` ==> port mapping - define the port the container will be able to use in your system when the app in container requested to access a port

> See docker running process
	```bash
	$ docker ps
	```
> Stop container
    ```bash
    $ docker stop <container-id>
    ```
> Remove container
    ```bash
    $ docker rm <container-id>
    or
    $ docker rm -f <container-id>
    ```
    -f ==> forced removal - remove container even if it is currently running

> Login/logout
    ```bash
    $ docker login
	$ docker logout
    ```

-----------------------------------------------------------
# Setup credential store
Author: Me (Reference issue: https://github.com/docker/docker-credential-helpers/issues/102)
	
From your terminal, you can start anywhere even in your $HOME directory (Ctrl + Alt + T): 
1. Download, extract, make executable, and move to make it available to $PATH
    ```bash
    $ wget https://github.com/docker/docker-credential-helpers/releases/download/v0.6.4/docker-credential-pass-v0.6.4-amd64.tar.gz
    $ tar -xf docker-credential-pass-v0.6.4-amd64.tar.gz
    $ chmod +x docker-credential-pass
    $ mv docker-credential-pass /usr/local/bin
    ```
2. Change directory to system root 
    ```bash
    $ sudo su
    $ cd /root
3. Edit the docker `config.json` using nano, or if you have better options
    ```bash
    $ nano .docker/config.json
    ```
    Your file should look like this:
     ```json
     { 
             "credsStore": "pass",
             "auths": {}
     }
    ```
    Generate gpg key and copy the ID. It is a bit long strings of character all in caps (e.g. KJSADUSN831RHAM)
    $ gpg --gen-keys
    Initialize pass
    $ pass init <ID-from-gpg>
4. Lastly, login to docker
    ```bash
    $ sudo docker login
    ```
    You will finally see the password store tree by using pass command. Make sure you are in the system `/root` directory and have `sudo su` activated.
    ```bash
    $ pass
    ```
    It should look like this:
    ```bash
    └── docker-credential-helpers
       └── aHR0cHM7Ly9pbmrleC5kb2NrZXIuaW8vdjEv
          └── blitzdex27
    ```

That's it! I hope it worked for you too. 

Note that you do not need to intentionally create the `docker-credential-helpers` by using `pass insert docker-credential-helpers`. Docker will do that for you. I realized this after reading the passwordstore documentation and trying it out myself, and I felt strange too when I had to create it intentionally.

Reference:
* https://www.passwordstore.org/
* https://docs.docker.com/engine/reference/commandline/login/
* And all the work comments above especially, @Ayrat-Kh, @nathanfiscus , and @visualex who provided their own solutions.



