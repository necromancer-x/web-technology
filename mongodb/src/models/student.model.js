import mongoose from "mongoose";
const { Schema } = mongoose;

const studentSchema = new Schema({
  name: String,
  rollno: Number,
  section: String,
});

export const Student = mongoose.model("studentData", studentSchema);
