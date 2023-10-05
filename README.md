
# movie_database
## Setup Instructions

### Install node modules
``` sh
cd /path/to/directory
npm install
```
*Note: A [Dev Container](https://code.visualstudio.com/docs/devcontainers/containers) is added to use with Visual Studio Code*

### Setup MySQL via Docker
``` sh
cd /path/to/directory
docker-compose up -d
```
Install Docker for [mac](https://docs.docker.com/desktop/install/mac-install/) | [windows](https://docs.docker.com/desktop/install/windows-install/)
### Setup MySQL Connection
Copy `.env.sample` to `.env` with the code below, and place the username and password in the `.env` file
``` sh
cp .env.sample .env
```


### Populate MySQL Database
- Open `sql` folder
- Open `.sql` file
- Execute that query
- Your thing should be populated now

## Run Application
``` sh
npm start
```


## Database Information

- Mysql database/schema is called `movie_database`
- user table is called `users` with `username` and `password`
