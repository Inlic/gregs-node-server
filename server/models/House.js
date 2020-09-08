import mongoose from "mongoose";
const Schema = mongoose.Schema;


const House = new Schema(
  {
    bedrooms: { type: String, required: true },
    bathrooms: { type: String, required: true },
    levels: { type: Number, required: true },
    squarefeet: { type: Number, required: true, min: 1 },
    imgUrl: { type: String, default: "https://placehold.it/200x200" },
    description: { type: String, default: "No description Provided" },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House;