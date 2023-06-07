const asyncHandler = require("express-async-handler");
const Fake = require("./fakeNewsModel");

// Create Prouct
const createFake = asyncHandler(async (req, res) => {
  const { content, detection_result } = req.body;

  //   Validation
  if (!content || !detection_result) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const instance = new Fake({
    content: content,
    detection_result: detection_result,
  });
  console.log(instance.id);

  instance
    .save()
    .then((savedInstance) => {
      console.log(savedInstance.id);
      res.status(201).json(savedInstance); // Access the saved id
    })
    .catch((error) => {
      console.error(error);
    });
});

// Get single product
const getFake = asyncHandler(async (req, res) => {
  const fake = await Fake.findById(req.params.id);
  // if product doesnt exist
  if (!fake) {
    res.status(404);
    throw new Error("Product not found");
  }
  console.log(fake);
  res.status(200).json(fake);
});

module.exports = {
  createFake,
  getFake,
};
