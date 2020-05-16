# OMDB Search App - Backend

![Build Status](https://codebuild.us-east-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiQXpBaHpqVzZUVFlFYVZYQWdGblhRT1BNVjFhYUhpT1d3VkJMd1hNSmcxby90TWt1bndKNVQ3Y0Y5SS9yUlBnOGpHN2RkV0NjcERiZ28vekVvWmRya1ZVPSIsIml2UGFyYW1ldGVyU3BlYyI6Ill0dkllVDMrTnpMZ2l5d0kiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

## Want to use this project?

### Setup

1. Fork/Clone this repo

1. Download [Docker](https://docs.docker.com/docker-for-mac/install/) (if necessary)

1. Make sure you are using a Docker version >= 17:

    ```sh
    $ docker -v
    Docker version 17.03.0-ce, build 60ccb22
    ```

### Build and Run the App

#### Set the Environment variables

```sh
$ export NODE_ENV=development
```

#### Fire up the Containers

Build the images:

```sh
$ docker-compose build
```

Run the containers:

```sh
$ docker-compose up -d
```

#### Sanity Check

Test out the following services...

##### (1) Users - http://localhost:3000

| Endpoint        | HTTP Method | CRUD Method | Result        |
|-----------------|-------------|-------------|---------------|
| /users/ping     | GET         | READ        | `pong`        |
| /users/register | POST        | CREATE      | add a user    |
| /users/login    | POST        | CREATE      | log in a user |
| /users/user     | GET         | READ        | get user info |

##### (2) Movies - http://localhost:3001

| Endpoint      | HTTP Method | CRUD Method | Result                    |
|---------------|-------------|-------------|---------------------------|
| /movies/ping  | GET         | READ        | `pong`                    |
| /movies/user  | GET         | READ        | get all movies by user    |
| /movies       | POST        | CREATE      | add a single movie        |

##### (3) Movies Database and (4) Users Database

To access, get the container id from `docker ps` and then open `psql`:

```sh
$ docker exec -ti <container-id> psql -U postgres
```

#### Commands

To stop the containers:

```sh
$ docker-compose stop
```

To bring down the containers:

```sh
$ docker-compose down
```

Want to force a build?

```sh
$ docker-compose build --no-cache
```

Remove images:

```sh
$ docker rmi $(docker images -q)
```
