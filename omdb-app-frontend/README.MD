--local
export NODE_ENV=development
export USERS_SERVICE_URL=http://localhost:3000
export MOVIES_SERVICE_URL=http://localhost:3001
export OMDB_API_KEY=a69b8c8f
--works with npm run test-chrome-local

--docker cloud
export NODE_ENV=development
export USERS_SERVICE_URL=http://users-service:3000
export MOVIES_SERVICE_URL=http://movies-service:3000
export OMDB_API_KEY=a69b8c8f

docker-compose build
docker-compose up -d