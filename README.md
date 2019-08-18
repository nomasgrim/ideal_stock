### Clone Project Locally
```ssh
git clone git@github.com:nomasgrim/ideal_stock.git
```
### Fetch and Checkout Develop Brancbh
```ssh
git fetch; git checkout develop;
```

### Gitflow Workflow
Branch off develop to begin you're own personal changes

`git checkout -b <feature/bugfix/hotfix>/<unique-name-to-change>'`

### Install Dependencies
```ssh
cd client
npm install
cd ../server
npm install
```

### Create Environment variables file
root directory
.env
API_HOST="http://localhost:3000"
APP_SERVER_PORT=9999
REACT_APP_PORT=3000

### Build and Run application
```ssh
docker-compose up --build
```