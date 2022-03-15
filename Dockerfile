#Setup instruction for MY Image, Pull Node from DockerHub
FROM node

#we need to tell docker to run all commands inside our app directory.
# to solve this we Add WORKDIR 
WORKDIR /app

#Which files from Local machine goes inside the container
#. the folder where docker file located excluding the docker file.
#./ relative path points at /app
COPY . /app

#Execute some commands on the container. hint:: this command will run in the root folder of the conatiner so
RUN npm install

#Expose the port/Optional
EXPOSE 3001
## docker run -p LOCAL_PORT_NUM:CONTAINER_PORT_NUM hash
## docker run -p 3000:3001 

#If will execute when the container is running NOT when the image 
CMD ["node","server.js"]
 
#we use RUN to execute commands WHILE building the Image.
#we user CMD When we start the conatiner.




