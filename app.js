const express=require('express');
const booksRouter=express.Router();
const authorsRouter=express.Router(); // authors
const signupRouter=express.Router(); 
const loginRouter=express.Router(); 
const app=express();
const port=process.env.PORT || 2000;
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);


app.get('/',function(req,res){
     res.render("index",
     {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/signup',name:'SignUp'},{link:'/login',name:'Login'}],
        title:'Library'
 
     });
});

var books=[
    {
        title:'Tom and Jerry',
        author:'Joseph Barbera',
        genre:'Cartoon',
        img:"tom.png"
    },
    {
        title:'Harry Potter',
        author:'JK Rowling',
        genre:'Fantasy',
        img:"harry.jpg"
    },
    {
        title:'Pathummayude AAdu',
        author:'Vaikom Mhmd Basheer',
        genre:'Drama',
        img:"basheer.jpg"
    }
]

var authors=[
    {
        author:'Joseph Barbera',
        title:'Tom and Jerry',
        genre:'Cartoon',
        img:"tom.png"
    },
    {
        author:'JK Rowling',
        title:'Harry Potter',
        genre:'Fantasy',
        img:"harry.jpg"
    },
    {
        author:'Vaikom Mhmd Basheer',
        title:'Pathummayude AAdu',
        genre:'Drama',
        img:"basheer.jpg"
    }
]

booksRouter.get('/',function(req,res){
    res.render("books",{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/signup',name:'SignUp'},{link:'/login',name:'Login'}],
        title:'Library',
        books
    });
});



// booksRouter.get('/single',function(req,res){
//     res.send("Hey I am a single book");
// });

booksRouter.get('/:i',function(req,res) {
    const i=req.params.i;
res.render('book',{
    nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/signup',name:'SignUp'},{link:'/login',name:'Login'}],
        title:'Library',
        book:books[i]
});
});


authorsRouter.get('/',function(req,res){
    res.render("authors",{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/signup',name:'SignUp'},{link:'/login',name:'Login'}],
        title:'Library',
        books,
        authors
    });
});


authorsRouter.get('/:i',function(req,res) {
    const i=req.params.i;
res.render('author',{
    nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/signup',name:'SignUp'},{link:'/login',name:'Login'}],
        title:'Library',
        books,
        author:authors[i]
});
});


loginRouter.get('/',function(req,res){
    res.render("login",{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/signup',name:'SignUp'},{link:'/login',name:'Login'}],
        title:'Library'
    });
});

loginRouter.post('/login', function(req, res) {
    var username = req.body.user;
    var password = req.body.pass;
    if (username && password) {
       
            if (username == "admin" && password =="12345") {
                req.session.loggedin = true;
                res.redirect('/books');
            } else {
                res.send('Incorrect Username and/or Password!');
            }           
            res.end();
       
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

signupRouter.get('/',function(req,res){
    res.render("signup",{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/signup',name:'SignUp'},{link:'/login',name:'Login'}],
        title:'Library',
        books
    });
});


app.listen(port,()=>{console.log("Server Ready at"+port)}); //app.listen(5000);