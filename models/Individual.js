import mongoose from "mongoose";
const { Schema } = mongoose;

const IndividualSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      required: true,
    },
    seatheight: {
      type: String,
      required: true,
    },
    volume: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    frame: {
      type: String,
      required: true,
    },
    frameEng: {
      type: String,
      required: true,
    },
    legs: {
      type: String,
      required: true,
    },
    legsEng: {
      type: String,
      required: true,
    },
    upholstery: {
      type: String,
      required: true,
    },
    upholsteryEng: {
      type: String,
      required: true,
    },
    categoryname: {
      type: String,
      required: true,
    },
    categorynameEng: {
      type: String,
      required: true,
    },
    img1: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    img3: {
      type: String,
      required: true,
    },
    img4: {
      type: String,
      required: true,
    },
    images: Array,
  },
  { timestamps: true }
);

export default mongoose.models.Individual ||
  mongoose.model("Individual", IndividualSchema);
