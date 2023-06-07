const mongoose = require("mongoose");

const fakeSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    detection_result: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Fake", fakeSchema);
