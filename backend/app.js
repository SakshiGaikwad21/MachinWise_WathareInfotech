const express = require('express');

const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(express.json());

const dataRoutes = require('./routes/dataRoutes');

const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//    .then(() => console.log("MongoDB connected"))
//    .catch(err => console.log(err));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error('Failed to connect to MongoDB', err));


app.use('/api/data' , dataRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

