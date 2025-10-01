const express = require('express');
const cors = require('cors');
const Port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const Users = [
    {email:'akula@gmail',password:'12345'},
    {email:'hello@gmail',password:'67890'}
];

const checkuser = (req,res,next) => {
    const {email} = req.body;
    const user = Users.find( u => u.email === email)
    req.user = user
    next();
}

app.post('/signup', checkuser, (req,res) => {
   const {email,password} = req.body;
   if (req.user) {
    return res.status(400).json({ message: "User already exists!" });
  }
   const newuser = {email,password};
   Users.push(newuser);
   return res.status(200).json({ message: "User created successfully!" });
})

app.post('/login', checkuser, (req,res) => {
   const {password} = req.body;
   if (!req.user) {
    return res.status(404).json({ message: "User not found. Please signup first!" });
  }
  if (req.user.password !== password) {
    return res.status(401).json({ message: "Invalid password!" });
  }
   res.json(Users);
})

let Blogs = [
    {
      id:1,
      title:'Taj Mahal',
      body:'The Taj Mahal is one of the Seven Wonders of the World, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is a UNESCO World Heritage site and a symbol of eternal love.',
      image:"https://blog.thomascook.in/wp-content/uploads/2014/09/Taj-Mahal-in-Agra.jpg"
    },
    {
      id:2,
      title: "The Pink City",
      body: "Jaipur, the capital of Rajasthan, is famous for its pink-colored buildings, palaces, forts, and vibrant markets. Popular attractions include Hawa Mahal, Amber Fort, and City Palace.",
      image: "https://www.cityguidepage.com/wp-content/uploads/2024/11/rajput-heritage-in-Jaipur.jpg"
    },
    {
      id:3,
      title: "Leh Ladakh",
      body: "Leh Ladakh is famous for its breathtaking landscapes, Buddhist monasteries, and adventure activities. It’s a paradise for bikers and nature lovers.",
      image:"https://tse2.mm.bing.net/th/id/OIP.gsY0AnI9qJiCDjGNBmdC0gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id:4,
      title: "Goa Beaches",
      body: "Goa is popular for its golden beaches, Portuguese heritage, vibrant nightlife, and seafood. It’s one of the most visited destinations in India for relaxation and parties.",
      image:"https://wallpapers.com/images/hd/goa-beach-pictures-fdrkfo9lo8kjktwh.jpg"
    }
]

app.get('/blog', (req,res) => {
    res.json(Blogs)
})

app.post('/blog', (req,res) => {
    const newblog = {
        id: Blogs.length + 1,
        title:req.body.title,
        body:req.body.body,
        image:req.body.image
    };
    Blogs.push(newblog);
    res.json(Blogs);
})

app.put('/blog/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const blog = Blogs.find(b => b.id === id);
    blog.title = req.body.title;
    blog.body = req.body.body;
    blog.image = req.body.image;
    res.json(Blogs);
});

app.delete('/blog/:id', (req,res) => {
    const id = parseInt(req.params.id);
    Blogs = Blogs.filter(b => b.id !== id);
    res.json(Blogs);
});


app.listen(Port, () => {
    console.log(`Server runing in http://localhost:${Port}`)
});