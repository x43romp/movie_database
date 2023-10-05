# Movie Database
## Run Application
``` sh
npm start
```

## Database Information

- Mysql database/schema is called `movie_database`
- user table is called `users` with `username` and `password`
## Setup Instructions

### 1. Setup MySQL Connection
Copy `.env.sample` to `.env` with the code below, and place the username and password in the `.env` file
``` sh
cd /path/to/directory
cp .env.sample .env
```
Edit the `.env` file if necessary

### 2. Install node modules
``` sh
cd /path/to/directory
npm install
```
*Note: A [Dev Container](https://code.visualstudio.com/docs/devcontainers/containers) is added to use with Visual Studio Code*

### 3. Setup MySQL via Docker
Install Docker for [mac](https://docs.docker.com/desktop/install/mac-install/) | [windows](https://docs.docker.com/desktop/install/windows-install/)
``` sh
cd /path/to/directory
docker-compose up -d
```


### 4. Populate MySQL Database
- Open `sql` folder
- Open `.sql` file
- Execute that query
- Your thing should be populated now
