const path = require("path");
const db = require("../models/workout.js")

module.exports = function (app) {

app.get("/api/workouts", function (req, res) {
    db.Workout.find({})
    .then(data => {
      res.json(data)
  })
    .catch(err => {
      res.json(err)
  })
    });
  
    app.get("/api/config", (req, res) => {
      Workout.find({}).then((foundWorkouts) => {
          res.json({
              success: true,
              data: foundWorkouts,
          });
      });
  });

  app.post("/api/workouts", function(req,res)  {
  Workout.create(req.body).then(createdWorkout => {
    res.json({
        error: false,
        data: createdWorkout,
        message: "Successfully created new workout.",
    })
  });
}).catch(err => {
    console.log(err);
    res.json({
        error: true,
        data: null,
        message: "Unable to create new workout."
    })
})
}
