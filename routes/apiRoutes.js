const path = require("path");
const db = require("../models/workout.js")

module.exports = function (app) {

app.get("/api/workouts", function (req, res) {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout)
  })
    .catch(err => {
      res.json(err)
  })
    });

    app.post("/api/workouts", (req, res) => {
    
      Workout.create(req.body).then(createdWorkout => {
          res.json(createdWorkout)
      }).catch(err => {
          console.log(err);
          res.json({
              error: true,
              data: null,
              message: "Unable to create new workout."
          })
      })
  })
  

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  db.Workout.findByIdAndUpdate(id, {$push: {"exercises": req.body}}, {new:true})
    .then(updateWorkout => {
      res.json(updateWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
}

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
