#!/bin/bash

sudo apt-get update
sudo apt-get upgrade
sudo apt-get install mysql-server
sudo service mysql start
sudo mysql -uroot -p  -e "CREATE DATABASE mydb";
sudo mysql -uroot -p  -e "CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password'";
sudo mysql -uroot -p  -e "GRANT ALL PRIVILEGES ON *.* TO 'prueba'@'localhost'";
sudo mysql -uroot -p  -e "FLUSH PRIVILEGES";
sudo apt-get install node
sudo apt-get install nodejs
sudo apt-get install npm
sudo npm cache clean --force
sudo npm install -g n
sudo n stable
sudo npm i -g @nestjs/cli
sudo npm install --save @nestjs/typeorm typeorm mysql2
sudo npm run typeorm -- migration:generate -init
sudo npm run typeorm -- migration:run
clear
sudo npm run start:dev

