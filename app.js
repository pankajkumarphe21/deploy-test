const express = require('express');
const app = express();
const expressSession=require('express-session');
const passport=require('passport'); 
const usersRouter=require('./models/user');
const path=require('path')
const port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(expressSession({
  saveUninitialized:false,
  resave:false,
  secret:'hey hey hey'
}))
app.use(passport.initialize());
app.use(passport.session());
// passport.serializeUser(usersRouter.serializeUser());
// passport.deserializeUser(usersRouter.deserializeUser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
  res.send('index');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
