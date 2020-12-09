const express=require('express');
const booksRouter=express.Router();
const app=express();
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);

app.get('/',function(req,res){
     res.render("index",
     {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
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
booksRouter.get('/',function(req,res){
    res.render("books",{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
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
    nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        title:'Library',
        book:books[i]
});
});

app.listen(port,()=>{console.log("Server Ready at"+port)}); //app.listen(5000);