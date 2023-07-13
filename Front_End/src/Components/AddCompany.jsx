import React from 'react'

function AddCompany() {
  return (
    <>
      <div className="w-full max-w-lg mx-auto overflow-hidden">
                <div className="p-2 ">
                    <div className="text-lg font-bold text-gray-700"> Company Details</div>
                    <hr className="px-2"/>
                </div>
                <form className="my-10 ">
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-company-name">
                                Company Name
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white" id="grid-company-name" type="text" placeholder="Company Name" />
                                {/* <p className="text-xs italic text-red-500">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-company-email">
                                Company Email ID
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-company-email" type="email" placeholder="company@example.com" />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2  max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-image">
                                Image
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image" type="file" />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-domain" >
                                Domain
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-domain" type="text" placeholder="Domain" /> 
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Hiring 
                            </label>
                            <select className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-hiring" placeholder="Hiring">
                                <option value="internship">Yes</option>
                                <option value="Job">No</option>
                            </select> 
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-domain" >
                                Hiring Domain 
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-domain" type="text" placeholder="Domain" /> 
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                            stipend 
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-hiring" type="number" placeholder="stipend" />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                            Salary
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-hiring" type="number" placeholder="salary" />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                            Total Employee
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-hiring" type="number" placeholder="employees" />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                            Total vaccancy 
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-hiring" type="number" placeholder="vaccancy" />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                            Company address
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-hiring" type="text" placeholder="Address" />
                        </div>
                    </div>
                    <div className="flex flex-wrap p-2 max-mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                            Description
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-hiring" type="textarea" placeholder="Description" />
                        </div>
                    </div>
                    <button className="w-32 h-8 mx-5 mb-6 text-white bg-blue-600 rounded">submit</button>
                    </form>
            </div>
    </>
  )
}

export default AddCompany
