const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const curDir = process.cwd();
const preFind = require(`${curDir}/Middlewares/toursMiddlewares/queryMiddlewares/preFind.js`);
const postFind = require(`${curDir}/Middlewares/toursMiddlewares/queryMiddlewares/postFind.js`);
const preAggregate = require(`${curDir}/Middlewares/toursMiddlewares/aggregationMiddlewares/preAggregate.js`);

const toursSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
      maxlength: [44, 'A tour must have less than or equat to 44'],
      minlength: [12, 'A tour must have a name More than or Equal to 12'],
      // validate: [validator.isAlpha, 'A name must have only characters'],
    },
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a grou size'],
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty'],
      enum: {
        values: ['easy', 'difficult', 'medium'],
        message: 'A difficulty either easy, medium or difficult.',
      },
    },
    ratingAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'A rating must be more than or equal to 1'],
      max: [5, 'A rating must be less than or equal to 5'],
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          console.log(val);
          return val <= this.price;
        },
        message: 'The discount ({VALUE}) must less than or equal price',
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a Summary'],
    },
    description: {
      type: String,
      required: [true, 'A tour must have a description'],
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image'],
      trim: true,
    },
    images: [String],
    slug: String,
    secretTour: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
toursSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

toursSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

toursSchema.pre(/^find/, preFind);
toursSchema.post(/^find/, postFind);
toursSchema.pre('aggregate', function (next) {
  console.log('dd');
  this.pipeline().unshift({
    $match: {
      secretTour: {
        $ne: true,
      },
    },
  });
  next();
});
// toursSchema.post('save', function (next, doc) {
//   console.log(doc);
//   doc();
// });

// toursSchema.pre('save', function (next) {
//   console.log("Will Save Document ");
//   next();
// });
const Tour = mongoose.model('Tour', toursSchema);

module.exports = Tour;
