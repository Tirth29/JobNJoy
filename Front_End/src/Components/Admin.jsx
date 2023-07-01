import React from 'react'

export default function Admin() {
    return (
        <>
            <div>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap mb-6 -mx-3">
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
                    <div className="flex flex-wrap mb-6 -mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-image">
                                Image
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image" type="file" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6 -mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-domain" >
                                Domain
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-domain" type="text" placeholder="Domain" /> 
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6 -mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Hiring (Internship/Job)
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-hiring" type="text" placeholder="Hiring (Internship/Job)" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6 -mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Hiring (Internship/Job)
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-hiring" type="text" placeholder="Hiring (Internship/Job)" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6 -mx-3">
                        <div className="w-full px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-hiring">
                                Hiring (Internship/Job)
                            </label>
                            <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-hiring" type="text" placeholder="Hiring (Internship/Job)" />
                        </div>
                    </div>
                    </form>

            </div>
        </>
    )
}
