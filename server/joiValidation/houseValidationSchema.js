import Joi from "joi";

export const houseValidationSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(3)
    .max(100)
    .required()
    .messages({
      "string.empty": "House name is required",
      "string.min": "House name must be at least 3 characters",
    }),

  images: Joi.array()
    .items(Joi.string().uri().optional())
    .optional(),

  description: Joi.string()
    .trim()
    .max(1000)
    .optional(), 

  category: Joi.string()
    .valid("Villa", "Apartment", "House", "Cottage")
    .optional(),

  owner: Joi.string()
    .hex()
    .length(24)
    .optional(),

  pricePerNight: Joi.number()
    .positive()
    .required()
    .messages({
      "number.base": "Price must be a number",
      "number.positive": "Price must be greater than 0",
    }),

  location: Joi.string()
    .trim()
    .required(),

  coordinates: Joi.object({
    lat: Joi.number()
      .min(-90)
      .max(90)
      .optional(),
    long: Joi.number()
      .min(-180)
      .max(180)
      .optional(),
  }).optional(),

  amenities: Joi.array()
    .items(Joi.string().trim())
    .optional(),

  houseRules: Joi.string()
    .trim()
    .max(500)
    .optional(),

  maxGuests: Joi.number()
    .integer()
    .positive()
    .optional(),

  bedrooms: Joi.number()
    .integer()
    .min(0)
    .optional(),

  baths: Joi.number()
    .integer()
    .min(0)
    .optional(),

  availability: Joi.array().items(
    Joi.object({
      checkIn: Joi.date().required(),
      checkOut: Joi.date()
        .greater(Joi.ref("checkIn"))
        .required()
        .messages({
          "date.greater": "Check-out date must be after check-in date",
        }),
    })
  ).optional(),

  reviews: Joi.array()
    .items(Joi.string().hex().length(24))
    .optional(),
});
