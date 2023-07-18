import {asyncError} from "../middleware/error.js";
import errorHanlder from "../utils/error.js";
import cloudinary from "cloudinary";
import { Company } from "../models/company.js";
import { getDataUri } from "../utils/features.js";

export const newCompany = asyncError(async (req, res, next) => {
    const {name,company_mail,company_website, domain,hiring, total_employee, stipend, salary ,hiring_domain, total_vacancy , company_address , description } = req.body;
    let photo = undefined;
    if (req.file) {
      const file = getDataUri(req.file);
      // add cloudinary here
      const myCloud = await cloudinary.v2.uploader.upload(file.content);
      console.log(myCloud);
      photo = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }
    const company = await Company.create({ name,company_mail,company_website, domain,hiring, stipend, salary, hiring_domain , total_employee , total_vacancy , company_address , description , photo});
    res.json({
        success: true,
        message: "New Company added successfully",
        company,
    })
});

export const CompanyUpdate = asyncError(async (req, res, next) => {

    const {name,company_mail,company_website, domain,hiring, total_employee, stipend, salary ,hiring_domain, total_vacancy , company_address , description } = req.body;
    let photo = undefined;
    if (req.file) {
      const file = getDataUri(req.file);
      // add cloudinary here
      const myCloud = await cloudinary.v2.uploader.upload(file.content);
      console.log(myCloud);
      photo = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }
    const updatedCompany = await Company.findOneAndUpdate(
        { company_mail: company_mail},
        {
          $set: {
            name: name || undefined,
            company_mail: company_mail || undefined,
            company_website: company_website || undefined,
            domain: domain || undefined,
            hiring: hiring || undefined,
            total_employee: total_employee || undefined,
            stipend: stipend || undefined,
            salary: salary || undefined,
            hiring_domain: hiring_domain || undefined,
            total_vacancy: total_vacancy || undefined,
            company_address: company_address || undefined,
            description: description || undefined,
            photo: photo || undefined,
          },
        },
        { new: true }
      );
    res.json({
        success: true,
        message: "Company details update successfully",
        updatedCompany,
    })
});

export const getCompany = asyncError(async (req, res, next) => {
    const company = await Company.find();
    res.json({
        success: true,
        message: "Fetch Company details successfully",
        company,
    })
});