const db = require("../models");

module.exports = function(app) {

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
    }).catch(err => {
      console.log(err);
      res.status(500);
});
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .limit(7)
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
        console.log(dbWorkouts);
    });
});

app.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log(req.body);
    db.Workout.findByIdAndUpdate(id, {$push: {"exercises": req.body}},{ new: true }).then((dbWorkouts) => {
        res.json(dbWorkouts);
    });
});

app.post("/api/workouts", (req, res) => {  
    db.Workout.create(req.body).then(dbWorkouts => {
        res.json(dbWorkouts);
        console.log(dbWorkouts, "Successfully created workout");
    }).catch(err => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Workout Failed."
        });
    });
});
};
