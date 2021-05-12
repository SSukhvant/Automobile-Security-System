const express = require('express');
const Datastore = require('nedb');
const cors = require("cors");
const { request } = require('express');


const app = express();
app.use(cors());
app.listen(3000, () => console.log('running at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

// const authdb = new Datastore('authentication.db');
// authdb.loadDatabase();

app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post('/api', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});




// app.get('/auth', (request, response) => {
//   database.find({}, (err, userdata) => {
//     if (err) {
//       response.end();
//       return;
//     }
//     response.json(userdata);
//   });
// });

// app.post('/auth', async (request, response) => {
//   try {
//     const hashedPassword = await bcrypt.hash(request.body.password, 10)
//     const userdata = { name: request.body.name, password: hashedPassword }
//     authdb.insert(userdata);
//     response.json(userdata);
//     response.status(201).send()
//   } catch {
//     response.status(500).send()
//   }
// })