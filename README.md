Uses Vue, vuex Node, express, mongo, mongoose, bootstrap
deployed to heroku at https://ez-cart.herokuapp.com/
This is a shopping cart with a backend implented but not fully integrated into the frontend yet. It is a work in progress.
What you can do and whay it does:

1. currently it has products pre built. You can add those to cart. There is a show cart button and counter. If you click on the cart button it will display all items in the cart and from the cart you can increment or decrement the items you put in cart. If cart is empty it will prompt you to 'look around'. This data will be incorporated to indidual users when i implement users and admin role.
2. the admin page is in progress. You can add, delete, and update products to the products page. it has an activate promotions tab where you can activate or deactivate promotions. At the moment it is only visuals and does not implement data mutation. the UI for it is pretty cool and was fun to do. If you activate the promotions they will show up in the products page. You will also be able to delete soon.

todos:

1. make a login form with roles for users and admin
2. make promotions work and manipulate date ex. buy one get one free
3. checkout page

if you want to git clone this project and make it work then you need to make a mongodb atlas account.
add a dev.js file to the server/config file then include this:
module.exports = {
mongoURI: 'mongodb+srv://<username>:<password>@cluster0-vgyon.mongodb.net/shopping-cart?retryWrites=true&w=majority'
}
You will need to get your own connection string and fill out the username and password with the connection string that Atlas gives you.

once cloned npm install and the connection string is in order you can:
to run in dev:

1. npm run dev --- to start your server
2. npm run serve --- you must go to the client folder. then do - npm run serve - once you start vue then it will prompt you to the local host url that you put into your browser.

to build and deploy to heroku:

1. go to client folder and --- npm run build --- this will build to the server folder and make a public folder where the built client files will go. once the 'public' folder is built in the server folder you can deploy to heroku. Don't forget to put the env variable in heroku and out the atlas connection string as the var.
