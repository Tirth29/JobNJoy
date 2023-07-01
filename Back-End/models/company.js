import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: "String",
        required:[true,"Please enter company name"]
    },
    company_mail: {
        type: String,
        required:[true,"Please enter email"],
        unique: [true,"Email already exists"],
        validate:validator.isEmail,
    }
});

export const Company = mongoose.model("Company", schema);