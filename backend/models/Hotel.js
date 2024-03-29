import { mongoose } from "mongoose";

const { Schema } = mongoose;

//  define a Hotel Schema
const HotelSchema = new Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	city: { type: String, required: true },
	address: { type: String, required: true },
	distance: { type: String, required: true },
	photos: { type: [String], required: true },
	desc: { type: String, required: true },
	// provide extra information about hotel in individual page
	details: { type: [String], required: true },
	rating: { type: Number },
	reviews: Number,
	feedback: String,
	rooms: { type: [String], required: true },
	cheapestPrice: { type: Number, required: true },
	featured: { type: Boolean, default: false },
});

// create a Hotel Model
export default mongoose.model("Hotel", HotelSchema);
