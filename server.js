const express = require('express');
const bodyParser = require("body-parser");
const override = require("method-override");
const logger = require("morgan");
const session =require('express-session')
const db = require("./models")
const SequelStore = require('sequelstore-connect')(session);
// app routes
const routes = require("./controller/apiRoutes.js"); 
// passport for user loggin
const passport = require('passport');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');

// create react instance
const app = express();

// Sets an initial port. 
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(cookieParser());
app.use(session({
	secret:'xnoxwfjskl',
	resave: false,
	saveUninitialized: false,
	store: new SequelStore({ database: db.sequelize}),
	cookie: { maxAge: 180 * 60 *1000}

}));



// passport local setup
// app.use(session({ secret: 'its a secret',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.static("public"));

app.get("/", function(req, res) {
	console.log("index works")
		res.sendFile(__dirname+ "/public/index.html");
	});
app.use("/api/post", routes);

// passport setup
const User = require("./models/users");
// passport.use(New LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser())

// passport.use((req, res, next) => {
// 	const err = new Error("Not Found");
// 	err.status = 404;
// 	next(err);
// })

// MongoDB Configuration configuration 
// mongoose.connect("localhost:27017/frutix");
// var db = mongoose.connection;

// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });

// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });


// Listener
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

