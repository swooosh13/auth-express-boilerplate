const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');

app.use('/api', userRouter);
app.use('/api', authRouter);

const start = async () => {
   try {
      app.listen(PORT, () => {
         console.log("server started on port " + PORT);
      });
   } catch(e) {
      console.log("smthing went wrong: ",e);
   }
}

start();