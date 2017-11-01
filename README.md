This is a web app 'Tic Tac Toe' built in React JS. <br>
<a href= 'https://tic-tac-toe-in-react.herokuapp.com/'> Click to check web app </a> <br>
I use the create-react-app to create react apps with no build configuration. <br>
<a href='https://github.com/facebookincubator/create-react-app'>
https://github.com/facebookincubator/create-react-app</a> <br>
Then, deploy it to Heorku with zero-configuration. 
<a href ='https://blog.heroku.com/deploying-react-with-zero-configuration'>
https://blog.heroku.com/deploying-react-with-zero-configuration</a>

Create and Deploy a React App in Two Minutes on Heroku.

npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open


