const path = require("path");
const db = require("../models/workout.js")

module.exports = function (app) {

app.get("/api/workouts", function (req, res) {
    db.Workout.find()
    .then(data => {
      res.json(data)
  })
    .catch(err => {
      res.json(err)
  })
    });
  

  app.post("/api/workouts", function(req,res)  {
    db.Workout.create({})
    .then(data => {
      res.json(data)
  })
  .catch(err => {
      res.json(err)
  })
});
}
