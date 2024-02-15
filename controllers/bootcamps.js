//Bootcamp Controllers (used in /routes/bootcamps)

//@desc Show all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps.' });
};

//@desc Show one bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show one bootcamp ${req.params.id}.` });
};

//@desc Create new bootcamp
//@route Post /api/v1/bootcamps
//@access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create a bootcamp.' });
};

//@desc Update a bootcamp
//@route Put /api/v1/bootcamps/:id
//@access Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}.` });
};

//@desc Delete a bootcamp
//@route Delete /api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}.` });
};
