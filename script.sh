#!/bin/bash

sudo apt-get update
clear
sudo apt-get upgrade
clear
sudo apt-get install mysql-server
sudo mysql -u rooot -p
CREATE DATABASE mydb;
GRANT USAGE ON mydb.* TO public@localhost IDENTIFIED BY '123456';
QUIT
clear
sudo apt-get install nodejs
sudo npm i -g @nestjs/cli
sudo npm install --save @nestjs/typeorm typeorm mysql2
sudo npm run typeorm -- migration:generate -init
sudo npm run typeorm -- migration:run
sudo npm run start:dev


