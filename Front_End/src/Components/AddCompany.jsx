import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addcompany} from "../reducer/Actions/UserAction";

const  AddCompany = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [company_mail, setCompany_mail] = useState("");
    const [photo, setPhoto] = useState(null);
    const [domain, setDomain] = useState("");
    const [hiring, setHiring] = useState("");
    const [hiring_domain, setHiring_domain] = useState("");
    const [salary, setSalary] = useState(0);
    const [stipend, setStipend] = useState(0);
    const [total_employee, setTotal_employee] = useState(0);
    const [total_vacancy, setTotal_vacancy] = useState(0);
    const [company_address, setCompany_address] = useState("");
    const [description, setDescription] = useState("");
    const [company_site, setCompany_site] = useState("");

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);
    };

    const handleNamechange = (e) => {
        setName(e.target.value);
      };
    const handleEmailChange = (e) => {
        setCompany_mail(e.target.value);
      };
    const handleDomainChange = (e) => {
        setDomain(e.target.value);
      };
    const handleHiringChange = (e) => {
        setHiring(e.target.value);
    };
    const handleHiringDomainChange = (e) => {
        setHiring_domain(e.target.value);
    };    
    const handleStipendChange = (e) => {
        setStipend(e.target.value);
    };
    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    };
    const handleTemployeeChange = (e) => {
        setTotal_employee(e.target.value);
    };
    const handleVacancyChange = (e) => {
        setTotal_vacancy(e.target.value);
    };
    const handleSiteChange = (e) => {
        setCompany_site(e.target.value);
    };
    const handleAddressChange = (e) => {
        setCompany_address(e.target.value);
    };
    const handleDescChange = (e) => {
        setDescription(e.target.value);
    }; 

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",name);
        formData.append("company_mail",company_mail);
        formData.append("company_site",company_site);
        formData.append("domain",domain);
        formData.append("hiring",hiring);
        formData.append("hiring_domain",hiring_domain);
        formData.append("salary",salary);
        formData.append("stipend",stipend);
        formData.append("total_employee",total_employee);
        formData.append("total_vacancy",total_vacancy);
        formData.append("company_address",company_address);
        formData.append("description",description);
        console.log(photo);
        formData.append("file",photo);

        console.log(formData);
        dispatch(addcompany(formData));
        // console.log("New Company Added")

        // navigate("/Admin");
    }


    return (
        <>
            <div className="w-full max-w-lg mx-auto overflow-hidden">
                <div className="p-2 ">
                    <div className="text-lg font-bold text-gray-700"> Company Details</div>
                    <hr className="px-2" />
                </div>
                <form className="my-10 " onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-company-name">
                                Company Name
                            </label>
                            <input  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white" 
                                    id="grid-company-name" 
                                    type="string" 
                                    name="name"
                                    placeholder="Company Name"
                                    value={name}
                                    onChange={handleNamechange}
                                    required />
                            {/* <p className="text-xs italic text-red-500">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-company-email">
                                Company Email ID
                            </label>
                            <input  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-company-email" 
                                    type="string" 
                                    placeholder="company@example.com"
                                    name="company_email"
                                    value={company_mail}
                                    onChange={handleEmailChange}
                                    required 
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2  max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-image">
                                Image
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                // id="grid-image"
                                type="file"
                                // value={photo}
                                onChange={handleProfilePictureChange} 
                                />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                    <div className="w-full px-3 mb-6  md:mb-0">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-company-email">
                                Company WebSite
                            </label>
                            <input  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-company-email" 
                                    type="string" 
                                    placeholder="www.google.com"
                                    name="company_site"
                                    value={company_site}
                                    onChange={handleSiteChange}
                                    required 
                            />
                        </div>
                        </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                    
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-domain" >
                                Domain
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-domain" 
                                type="string" 
                                placeholder="Domain"
                                name="domain"
                                value={domain}
                                onChange={handleDomainChange}
                                required />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Hiring
                            </label>
                            <select 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-hiring" 
                                placeholder="Hiring"
                                name="hiring"
                                value={hiring}
                                onChange={handleHiringChange}
                                required >
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-domain" >
                                Hiring Domain
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-domain" 
                                type="string" 
                                placeholder="Domain"
                                name="hiring_domain"
                                value={hiring_domain}
                                onChange={handleHiringDomainChange}
                                required />
                        </div>
                    </div>

                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                stipend
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-hiring" 
                                type="string" 
                                placeholder="stipend"
                                name="stipend"
                                value={stipend} 
                                onChange={handleStipendChange}
                                required/>
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Salary
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-hiring" 
                                type="string" 
                                placeholder="salary"
                                name="salary"
                                value={salary}
                                onChange={handleSalaryChange}
                                required />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Total Employee
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-hiring" 
                                type="number" 
                                placeholder="employees" 
                                name="total_employee"
                                value={total_employee}
                                onChange={handleTemployeeChange}
                                required/>
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Total vacancy
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-hiring" 
                                type="number" 
                                placeholder="vacancy"
                                name="total_vacancy"
                                value={total_vacancy}
                                onChange={handleVacancyChange} 
                                required/>
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Company address
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-hiring" 
                                type="text" 
                                placeholder="Address"
                                name="comapny_address"
                                value={company_address}
                                onChange={handleAddressChange}
                                required />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Description
                            </label>
                            <input 
                                className="block w-full px-4 h-10 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-hiring" 
                                type="textarea" 
                                placeholder="Description" 
                                name="description"
                                value={description}
                                onChange={handleDescChange}/>
                        </div>
                    </div>
                    <button className="w-32 h-8 mx-5 mb-6 text-white bg-blue-600 rounded" 
                            type="submit"
                            onClick={handleSubmit} 
                            >submit</button>
                </form>
            </div>
        </>
    )
}

export default AddCompany
