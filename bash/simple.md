```bash
#! /bin/bash

git fetch &>2 | tee log
git checkout ${args[0]} &>2 | tee log

install_via_company_registry() {
    npm set registry http://bjxspj.com &>2 | tee log
    npm install $1 &>2 | tee log
}

install_via_npm_registry() {
    npm set registry https://npmjs.org &>2 | tee log
    npm install &>2 | tee log
}

install_via_company_registry @ty_front
install_via_npm_registry
install_via_company_registry

```
