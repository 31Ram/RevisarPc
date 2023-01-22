const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const bodyParse = require('body-parser');
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!",
};

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage];

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/messages", (request, response) => {
  const result = messages;
  response.status(200).json(result);
});

app.post("/messages", (request, response) => {
  const messageId = messages.length > 0 ? messages[messages.length-1].id + 1: 0;

  if(!request.body.from || !request.body.text){ 
    response.status(400).json("Not valid");
  } else{ 
    const newMessage = {
      id: messageId,
      from: request.body.from,
      ...request.body
    }

  messages.push(newMessage);
  response.status(201).json(newMessage);
}});

/* 

*/
app.get("/messages/search", (request, response) => {
  const data = request.query.text;
  
  const author = messages.map((objeto)=>{ objeto.text.includes(data)
    return(author.text);
  });
  console.log(author);
  response.send(author);
});
 
//
app.get("/messages/:message_id", (request, response) => {
  const id = request.params.message_id;
  const elemt = messages.find(q => q.id == id);
  if (elemt) {
    response.status(200).json(messages[id]);
  } else {
    response.status(404).send("Not Found 32");
  }
});

app.delete("/messages/:message_id", (request, response) => {
  const id = request.params.message_id;
  const quoteIdx = messages.findIndex(q => q.id == id);
  if (quoteIdx > -1) {
    messages.splice(quoteIdx, 1);
    response.status(200).json(messages);
  } else {
    response.status(404).send("Not Found 31");
  }
});

app.listen(3001, () => {
   console.log("Listening on port 3001")
  });
