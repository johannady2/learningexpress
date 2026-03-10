import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});



app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>This is my website.</p>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1><p>You can reach me at abc_example@gmail.com</p>');
});



app.listen(port, ()=>{
    console.log(`server running on port http://localhost:${port}`);
});