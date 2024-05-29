const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/:name',(req,res)=>{
  res.send(`Hi ${req.params.name}`)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
