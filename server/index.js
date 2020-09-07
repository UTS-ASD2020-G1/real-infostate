const config = require('./utils/config')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const middleware = require('./utils/middleware');
const userRouter = require('./routes/userRoutes'); // to use the express routes
const authRouter = require('./routes/authRoutes'); // to use the express routes
const adminRouter = require('./routes/adminRoutes'); // to use the express routes

console.log('connecting to mongoDB')

mongoose.connect(config.URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })
  
app.use(cors());
app.use(bodyParser.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);
app.use('/users',userRouter);
app.use('/auth',authRouter);
app.use('/admin', adminRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(config.PORT || 8081, () => {
    console.log(`Server is running on port: ${config.PORT}`);
});

module.exports = app