#!/bin/bash

sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install build-essential -y
sudo apt-get install codeblocks -y
sudo apt-get install codeblocks-contrib -y
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get autoremove -y
sudo apt-get autoclean -y

exit 0;
