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
    },
    company_website:{
        type:String,
        required:[true,"Please enter company website"]
    },
    photo:{
        public_id: String,
        url: String,
    },
    domain:{
        type: String,
        required:[true,"Please enter domain"]
    },
    hiring: {
        type: String,
        required:[true,"Please enter hiring"]
    },
    hiring_domain:{
        type: String,
        required:[true,"Please enter hiring domain"]
    },
    stipend:{
        type: String,
    },
    salary:{
        type: String,
    },
    total_employee: {
        type: Number,
        required: true,
    },
    total_vacancy: {
        type: Number,
        required:[true,"Please enter total vacancy"]
    },
    company_address:{
        type:String,
        required:[true,"Please enter company address"]
    },
    description : {
        type: String,
        required: true,
    }
});

export const Company = mongoose.model("Company", schema);