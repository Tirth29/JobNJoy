import React,{useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { loadCompany,updateCompany,updateCompanyPhoto } from "../reducer/Actions/UserAction";


const  EditCompany = () => {
const [name,setName] = useState("");
const [company_mail,setCompany_mail] = useState("");
const [domain,setDomain] = useState("");
const [hiring,setHiring] = useState("");
const [hiring_domain,setHiring_domain] = useState("");
const [salary,setSalary] = useState("");
const [stipend,setStipend] = useState("");
const [total_employee,setTotal_employee] = useState(0);
const [total_vacancy,setTotal_vacancy] = useState(0);
const [company_address,setCompany_address] = useState("");
const [description,setDescription] = useState("");
const [photo,setPhoto] = useState(null);
const [successAlert, setSuccessAlert] = useState(false);

const dispatch = useDispatch();
const navigate = useNavigate();

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
const handleAddressChange = (e) => {
    setCompany_address(e.target.value);
};
const handleDescChange = (e) => {
    setDescription(e.target.value);
}; 

const handlePhotoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file",photo)
    dispatch(updateCompanyPhoto(formData));
  };

const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(updateCompany(company_mail,domain,hiring,hiring_domain,stipend,salary,total_employee,total_vacancy,company_address,description));
    
    setSuccessAlert(true);
    setTimeout(() => {
        setSuccessAlert(false);
        navigate("/admin");
    }, 3000);
};

  return (
    <>
    <div className="w-full max-w-lg mx-auto overflow-hidden">
                <div className="p-2 ">
                    <div className="text-lg font-bold text-gray-700">Edit Company Details</div>
                    <hr className="px-2" />
                </div>
                <form className="my-10 " onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-2 max-mx-3">
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-company-email">
                               Enter Company Email ID
                            </label>
                            <input  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                    type="email" 
                                    // placeholder={company_mail}
                                    name="company_email"
                                    onChange={handleEmailChange}
                            />
                        </div>
                    <div className="flex flex-wrap p-2  max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-image">
                                Image
                            </label>
                            <img
                                // src={company}
                                alt="current image"
                                className="h-40 w-40 rounded-full items-center text-center bg-black" 
                            />
                            <div>update image </div>
                            <form onSubmit={handlePhotoSubmit} className=" items-center flex justify-center">
                            <input className="m-2"
                                id="grid-image"
                                type="file"
                                required
                                accept="image/*"
                                onChange={handleProfilePictureChange} />
                                <button 
                                    onClick={handlePhotoSubmit}
                                    type="upload"
                                    className="bg-blue-600 w-28 h-8 text-yellow-50 px-2 rounded"
                                >upload</button>
                                </form>
                        </div>
                    </div>
                        
                    </div>
                    
                    <hr className="my-12 "/>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-domain" >
                                Domain
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"                          
                                type="text" 
                                placeholder={domain}
                                onChange={handleDomainChange}
                                />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Hiring
                            </label>
                            <select 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                placeholder={hiring}
                                onChange={handleHiringChange}
                                >
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
                                type="text"
                                placeholder={hiring_domain}
                                onChange={handleHiringDomainChange}
                                />
                        </div>
                    </div>

                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                stipend
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text" 
                                placeholder={stipend}
                                onChange={handleStipendChange}
                                />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Salary
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text" 
                                placeholder={salary}
                                onChange={handleSalaryChange}
                                 />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Total Employee
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="number" 
                                placeholder={total_employee} 
                                onChange={handleTemployeeChange}
                                />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Total vacancy
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="number" 
                                placeholder={total_vacancy}
                                onChange={handleVacancyChange} 
                                />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Company address
                            </label>
                            <input 
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text" 
                                placeholder={company_address}
                                onChange={handleAddressChange}
                                />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Description
                            </label>
                            <input 
                                className="block w-full px-4 h-10 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text" 
                                placeholder={description} 
                                onChange={handleDescChange}/>
                        </div>
                    </div>
                    <button className="w-32 h-8 mx-5 mb-6 text-white bg-blue-600 rounded" 
                            type="submit"
                            onClick={handleSubmit} >
                                update
                            </button>
                             
                </form>
            </div>
            </>
  )
}

export default EditCompany
