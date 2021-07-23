const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();
const Drones = require("../models/Drone.model");

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
Drones.find()
.then((droneList)=>{
  res.render("drones/list.hbs",{
    drone:droneList,
  })
})
.catch(e =>console.log(e))

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

  Drones.create(req.body)
  .then(()=>{
    res.redirect('/drones');
  })
  .catch(e =>console.log(e))

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drones.findById(req.params.id)
  .then((oneDrone)=>{
    res.render("drones/update-form.hbs", {
      drone : oneDrone})
  })
  .catch(e =>console.log(e))
  });

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drones.findByIdAndUpdate(req.params.id, req.body)
  .then( ()=>{
    res.redirect('/drones')
  })
  .catch(()=>{
    res.redirect('/drones/'+ req.params.id + "/edit")
  } )
});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drones.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect("/drones");
  })
  .catch(e => console.log(e))
});

module.exports = router;
