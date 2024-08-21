const express = require('express');
const router = express.Router();
const { format } = require('date-fns');

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
  router.get("/", (req, res, next) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
  });
  
  router.get('/new', function(req, res, next) {
    res.render('form', { title: "Add a message"});
  });
  
  
  router.post("/new", function (req, res) {
      const newMessage = {
        user: req.body.user,
        text: req.body.text,
        added: format(new Date(), "MMM d, yyyy, h:mm a"),
      };
    
      messages.push(newMessage);
      res.redirect("/");
    });

module.exports = router;

