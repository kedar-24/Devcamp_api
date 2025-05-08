const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a course title"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  weeks: {
    type: Number,
    required: [true, "Please add number of weeks"],
  },
  tuition: {
    type: Number,
    required: [true, "Please add tuition cost"],
  },
  minimumSkill: {
    type: String,
    required: [true, "Please enter a minimum skill required"],
    enum: ["beginner", "intermediate", "advanced"],
  },
  scholarshipsAvailable: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  bootcamp: {
    type: mongoose.Schema.ObjectId,
    ref: "Bootcamp",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

// Static method to get average of course tuitions
CourseSchema.statics.getAverageCost = async function (bootcampId) {
  // console.log("Calculating avg cost".blue);

  // here this refers to current object course
  const obj = await this.aggregate([
    {
      // left bootcamp is attribute of the Course Model
      // right bootcampId is the fn parameter
      $match: { bootcamp: bootcampId },
    },
    {
      $group: {
        // here we want to create the calculated object
        _id: "$bootcamp",
        // here $avg is the function and we give the column for which we want average for , here it is tuition fee
        averageCost: { $avg: "$tuition" },
      },
    },
  ]);

  // console.log(obj);
  try {
    await this.model('Bootcamp').findByIdAndUpdate(bootcampId,{
      averageCost: Math.ceil(obj[0].averageCost/10)*10
    })
  } catch (err) {
    console.log(error)
  }
};

// Call getAverageCost after save
CourseSchema.post("save", function () {
  this.constructor.getAverageCost(this.bootcamp);
});
// Call getAverageCost before remove
CourseSchema.post("remove", function () {
  this.constructor.getAverageCost(this.bootcamp);
});

module.exports = mongoose.model("Course", CourseSchema);
