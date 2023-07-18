import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";


const Highlight = styled(Typography)`
        color:#100da8;
        font-size:15px;
        text-decoration: underline;
        padding:20px 0px 0px 2px;
        font-weight:600;
        font-family:inherit;


    `

const Head = styled(Typography)`
    margin:10px 0px 0px 10px;
    font-size:18px;
    font-weight:600;
`

const More = styled(Box)`
    padding:0px 5px 3px 5px;
    color:white;
    background:#757575;
    border-radius:3px;
`

const MoreInfo = styled(Typography)`
    margin:10px 2px 10px 2px;
    color:blue;
    
`

const Bio = ({ ComapnyInfo }) => {

    const navigate = useNavigate();


    return (

        <Box>
             <Typography style={{margin:'3px 0px 2px 10px'}}>
               Web Site : <a href={ComapnyInfo} style={{color:'blue',textDecoration:'underline',fontSize:'15px'}}>Youtube.com</a>
            </Typography>
            <Head >Fields For Opportunity :</Head>
            <Box style={{margin:'0px 70px 2px 20px',padding:'2px 2px 3px 3px'}}>    
                <Typography style={{fontWeight:'550'}}>{ComapnyInfo}</Typography>
                    
            </Box>
            <More>
                <Typography style={{fontFamily:'Verdana',}}>
                    {ComapnyInfo}
                </Typography>
            </More>
           
            <MoreInfo onClick={()=>navigate('/opportunity/CompanyPage')}>For more Info</MoreInfo>
        </Box>
    )
}

export default Bio;