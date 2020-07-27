const mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
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
  },opts
);

// 

workoutSchema.virtual("totalDuration").get(function() {
  let totalDuration = 0;
  for (let i = 0; i < this.exercises.length; i++) {
     totalDuration += this.exercises[i].duration;
  }
  return totalDuration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


