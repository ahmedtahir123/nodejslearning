import express from "express";
import emailQueue from "./reciever";
import emailNotificationService from "./sender";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is node js app");
});

app.post("/comment", (req, res) => {
  const body = req.body;
  emailNotificationService(body);
  res.send("Comment added successfully!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  emailQueue();
});
