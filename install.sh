#!/bin/bash
# install.sh


wget "https://drive.google.com/u/0/uc?id=1vdkJcHV7q4P2_BcH7fglIYRIWh3_fF4O&export=download" -O exemple.zip


# Unzip the file
unzip exemple.zip
cd exemple


apt-install git

git clone https://github.com/gsanyas/whitelistRest
git clone https://github.com/Vencesdab/listeBlancheFrontend
git clone https://github.com/agustinzorzano/liste_blanche_backend


# We create the environment variable
export BASE_PATH=$(pwd)
BASE_PATH = echo $BASE_PATH
ENCRYPTOR_PUBLIC_KEY_PATH = echo $BASE_PATH/keys/public_key.pem
ENCRYPTOR_PRIVATE_KEY_PATH = echo $BASE_PATH/keys/private_key.pem
read -p "Adresse email" reponse
EMAIL_USER = echo $reponse
read -p "Mot de passe" reponse2
EMAIL_PASSWORD = echo $reponse2

# We build the images
sudo env BASE_PATH=$BASE_PATH docker-compose build


# We deploy the containers
sudo env BASE_PATH=$BASE_PATH docker stack deploy -c docker-compose.yml project

# We verify the services
sudo docker service ls


# We create a virtual environment
cd liste_blanche_backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Create a .env file with the environment variables
cp ../environment/back_env ./.env


# TODO : modification fichier .env

nano .env

# Replace mariadb-service:3306 with localhost:3307
# Replace /home/project/emails with <BASE_PATH>/emails
# Replace /home/project/public_key.pem with <BASE_PATH>/keys/public_key.pem
# Replace /home/project/private_key.pem with <BASE_PATH>/keys/private_key.pem
# Complete EMAIL_USER and EMAIL_PASSWORD with the email account that will send the summary emails.

# Save the file 

# We initialize the database
flask db init
flask db migrate
flask db upgrade
deactivate
cd ..


# We restart the API Rest Service
sudo docker container ls
sudo docker container stop <api_rest container ID>


