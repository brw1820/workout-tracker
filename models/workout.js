const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          enum: ["resistance", "cardio"],
          required: "Enter an exercise type",
          allowNull: false
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        weight: {
          type: Number,
          allowNull: false
        },
        reps: {
          type: Number,
          allowNull: true
        },
        sets: {
          type: Number,
          allowNull: true
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes",
          allowNull: true
        },
        distance: {
          type: Number,
          allowNull: true
        }
      }
    ]
  },
  {
    toJSON: {
        virtuals: true
    }
}
);

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
  }, 0);
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;