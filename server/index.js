const config = require('./utils/config')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const middleware = require('./utils/middleware');

// to use the express routes
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const adminRouter = require('./routes/adminRoutes');
const suburbRouter = require('./routes/suburbRoutes');
const propertyRouter = require('./routes/propertyRoutes');

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
app.use('/suburb', suburbRouter);
app.use('/property', propertyRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);


app.listen(config.PORT || 8081, () => {
    console.log(`Server is running on port: ${config.PORT}`);
});

module.exports = app