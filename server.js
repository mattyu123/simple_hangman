const express = require('express')
const morgan = require('morgan')

const hostname = '127.0.0.1';
const PORT = 3000;

const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));

//Simple get route here
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html'));
})

app.use(express.static(path.join(__direname, 'public')));

app.listen(PORT, () => {
  console.log(`Hangman app is listening on port ${PORT}`)
});