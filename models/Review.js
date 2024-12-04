const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title for the review"],
    maxlength: 100,
  },
  text: {
    type: String,
    required: [true, "Please add some text "],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, "Please add a rating between 1 and 10"],
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

// Prevent  user from submitting more than one review per bootcamp
ReviewSchema.index({ bootcamp: 1, user: 1 }, { unique: true });


// Static method to get average rating and save
ReviewSchema.statics.getAverageRating = async function (bootcampId) {
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
        averageRating: { $avg: "$rating" },
      },
    },
  ]);

  // console.log(obj);
  try {
    await this.model('Bootcamp').findByIdAndUpdate(bootcampId,{
      averageRating: obj[0].averageRating
    })
  } catch (err) {
    console.log(error)
  }
};

// Call getAverageCost after save
ReviewSchema.post("save", function () {
  this.constructor.getAverageRating(this.bootcamp);
});
// Call getAverageCost before remove
ReviewSchema.post("remove", function () {
  this.constructor.getAverageRating(this.bootcamp);
});

module.exports = mongoose.model("Review", ReviewSchema);
