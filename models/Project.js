import mongoose from "mongoose";
const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    textEng: {
      type: String,
      required: true,
    },
    inst: {
      type: String,
      required: true,
    },
    imgMainDesk: {
      type: String,
      required: true,
    },
    imgMainMob: {
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
    usedItems: Array,
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
