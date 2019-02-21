const faker = require('faker');
const mongoose = require('mongoose');
const { mongoURI } = require('../config/secrets');

const Plant = require('../models/Plant');
const createPlantSeeds = () => {
  let plantSeeds = [];
  for (let i = 0; i < 30; i++) {
    const newPlant = new Plant({
      name: faker.commerce.productName(),
      details: faker.lorem.sentences(),
      avatar: faker.image.cats(),
    });
    plantSeeds.push(newPlant);
  }
  return plantSeeds;
};
const dbConnect = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log('mongodb connected!!'))
    .catch(err => console.log(err));
};

const dbDisconnect = () => {
  mongoose.disconnect(() => console.log('db disconnect'));
};
const savePlantSeeds = plants => {
  let done = 0;
  plants.forEach(plant => {
    plant.save((err, res) => {
      done++;
      console.log('plant added: ', plant);
      if (done === plants.length) {
        dbDisconnect();
      }
    });
  });
};

const run = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      savePlantSeeds(createPlantSeeds());
    })
    .catch(err => console.log(err));
};

run();
