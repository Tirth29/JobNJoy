
import { useState } from 'react'
import sample_image from '../../opportunity/sample_picture.jpg'
import { Box, Typography, styled } from '@mui/material'
import DialogBox from './DialogBox'
import Company from './company/Company'

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

    const [openDialog, setopenDialog] = useState(false)

    const [ComapnyInfo, SetCompanyInfo] = useState({
        CompanyName: 'Project_industryoaoaoao',
        Fields: ['Web Design', 'App Design', 'AutoMation'],
        Website: 'https://www.youtube.com/',
        MoreInfo: 'this comapany want Web designer and app Developers who have experience in react and node js'
    })


    const handleclik = () => {
        setopenDialog(true)
    }
    return (

        <>
            <div className="container overflow-y-auto bg-fuchsia-300	" style={
                { 'height': '625px' }
            }>
                <DialogBox openDialog={openDialog} setopenDialog={setopenDialog} ComapnyInfo={ComapnyInfo} />
                <div className=' my-2  rounded' >
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
                    </div>
                   

                </div>
            </div>
        </>
    )
}

export default Header;
