# asw2324_0

This is a base project for the Software Architecture course in 2023/2024. It is a basic application composed of several components.

- User service. Express service that handles the insertion of new users in the system.
- Auth service. Express service that handles the authentication of users.
- Gateway service. Express service that is exposed to the public and serves as a proxy to the two previous ones.
- Webapp. React web application that uses the gateway service to allow basic login and new user features.

Both the user and auth service share a Mongo database that is accessed with mongoose.

## Quick start guide

### Using docker

The fastest way for launching this sample project is using docker. Just clone the project:
```git clone git@github.com:pglez82/asw2324_0.git```
and launch it with docker compose:
```docker-compose up --build```

### Component by component start
First, start the database. Either install and run Mongo or run it using docker:

```docker run -d -p 27017:27017 --name=my-mongo mongo:latest```

You can use also services like Mongo Altas for running a Mongo database in the cloud.

Now launch the auth, user and gateway services. Just go to each directory and run `npm install` followed by `npm start`.

Lastly, go to the webapp directory and launch this component with `npm install` followed by `npm start`.

After all the components are launched, the app should be available in localhost in port 3000.
