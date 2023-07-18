
import { useState,useEffect } from 'react'
import sample_image from '../../opportunity/sample_picture.jpg'
import { Box, Typography, styled } from '@mui/material'
import DialogBox from './DialogBox'
import Company from './company/Company'
import { useDispatch ,useSelector } from 'react-redux';
import { loadCompany } from "../../../reducer/Actions/UserAction";

const Image = styled('img')({
    width: '100%',
    height: '170px',
    marginRight: 0,


})

const Text = styled(Typography)`
    margin:3px 0px 3px 0px;
    font-weight:550;
    font-family:inherit;

    width: 19vh;
   
    white-space: nowrap;
   
    overflow: hidden;
  
    text-overflow: ellipsis;
    text-align: center;
    
`
const Wrapper = styled(Box)`
    background:white;
    margin-left:20px;
    margin-right:20px;
    margin-top:4px;
`

const Header = () => {
    let t=0;
    const dispatch = useDispatch();

    useEffect (()=>{
        const timer = setTimeout (()=>{
            dispatch(loadCompany());
        },50000);
        return ()=> clearTimeout(timer);
    });
    const {company} = useSelector((state) => state.user)
    // console.log(company);

    const [openDialog, setopenDialog] = useState(false)
    const [name,setName] = useState(null);
    const [hiring_domain, setHiring_domain] = useState(null);

    const [ComapnyInfo, SetCompanyInfo] = useState({
        CompanyName: 'Project_industryoaoaoao',
        Fields: ['Web Design', 'App Design', 'AutoMation'],
        Website: 'https://www.youtube.com/',
        MoreInfo: 'this comapany want Web designer and app Developers who have experience in react and node js'
    })


    const handleClik = (name,hiring_domain) => {    
        setName(name);
        setHiring_domain(hiring_domain);
        setopenDialog(true);
    }
    return (

        <>
            <div className=" ">
                <div className=" text-2xl m-1 text-center text-white underline bg-blue-400 rounded-md p-2">Opportunities:</div>
                    <DialogBox 
                        openDialog={openDialog}
                        setopenDialog={setopenDialog}
                        companyDomain={hiring_domain}
                        companyName={name}
                         />
                <div className=' my-10 rounded flex justify-around sm:mx-20' >
                        {company?.map((company)=>(
                            <div className='rounded flex w-1/2 justify-center '  onClick={()=>handleClik(company.name,company.hiring_domain)}>
                                <Wrapper className="sm:w-72 sm:h-100 w-40">
                                    <img src={sample_image} alt="image" className='  aspect-square w-full' />
                                    <div className="bg-gray-100  " >
                                        <div className="m-auto" style={{ textAlign: 'center' }}>-{company.name}-</div>
                                        <div className="m-auto" style={{ textAlign: 'center' }}>{company.hiring_domain}</div>
                                        <div className="m-auto" style={{ textAlign: 'center' }}>{company.salary}</div>
                                    </div>
                                </Wrapper>
                            </div>
                        ))}
                    {/* <div className='rounded  flex'  onClick={handleclik}>
                        <Wrapper>
                        <Image src={sample_image} alt="image" className='rounded' />
                        <Box>
                            <Text style={{ textAlign: 'center' }}>-{ComapnyInfo.CompanyName}-</Text>
                            <Text style={{ textAlign: 'center' }}>Development</Text>
                        </Box>
                        </Wrapper>
                        <Wrapper>
                        <Image src={sample_image} alt="image" className='rounded' />
                        <Box>
                            <Text style={{ textAlign: 'center' }}>-{ComapnyInfo.CompanyName}-</Text>
                            <Text style={{ textAlign: 'center' }}>Development</Text>
                        </Box>
                        </Wrapper>
                    </div>
                    <div className='rounded  flex'  onClick={handleclik}>
                        <Wrapper>
                        <Image src={sample_image} alt="image" className='rounded' />
                        <Box>
                            <Text style={{ textAlign: 'center' }}>-{ComapnyInfo.CompanyName}-</Text>
                            <Text style={{ textAlign: 'center' }}>Development</Text>
                        </Box>
                        </Wrapper>
                        <Wrapper>
                        <Image src={sample_image} alt="image" className='rounded' />
                        <Box>
                            <Text style={{ textAlign: 'center' }}>-{ComapnyInfo.CompanyName}-</Text>
                            <Text style={{ textAlign: 'center' }}>Development</Text>
                        </Box>
                        </Wrapper>
                    </div>
                    <div className='rounded  flex'  onClick={handleclik}>
                        <Wrapper>
                        <Image src={sample_image} alt="image" className='rounded' />
                        <Box>
                            <Text style={{ textAlign: 'center' }}>-{ComapnyInfo.CompanyName}-</Text>
                            <Text style={{ textAlign: 'center' }}>Development</Text>
                        </Box>
                        </Wrapper>
                        <Wrapper>
                        <Image src={sample_image} alt="image" className='rounded' />
                        <Box>
                            <Text style={{ textAlign: 'center' }}>-{ComapnyInfo.CompanyName}-</Text>
                            <Text style={{ textAlign: 'center' }}>Development</Text>
                        </Box>
                        </Wrapper>
                    </div> */}
                   

                </div>
            </div>
        </>
    )
}

export default Header;
