import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material"

const Image = styled(Box)`
    border-radius:50%;
    margin-right:10px;
    

`

const Wrapper = styled(Box)`
    display:flex;
    margin:10px 0px 5px 10px;
`

const Start = styled(Box)`
    margin:10px;
`



const history = ({ Historyval, pic }) => {

    const Founder = Historyval.founder.split(',');

    return (
        <Box style={{height:'78vh',overflow:'scroll'}}>
                <Typography style={{fontSize:'18px',fontWeight:550,margin:'10px 0px 5px 10px'}}>Founders : </Typography>
            <Box style={{ margin: '10px' }}>
                {
                    Founder.map(founder => (
                        <Wrapper>
                            <Image>
                                <img src={pic} alt="" style={{ width: 40, height: 40, borderRadius: '50%' }} />
                            </Image>
                            <Box>
                                <Typography>{founder}</Typography>
                            </Box>
                        </Wrapper>
                    ))
                }
            </Box>
            <Start >
                <Typography style={{fontSize:'20px'}}>Founation</Typography>
                <Typography>
                    {Historyval.start}
                </Typography>

            </Start>
            <Start >
                <Typography style={{fontSize:'20px'}}>Failiures</Typography>
                <Typography>
                    {Historyval.failiures}
                </Typography>

            </Start>
            <Start >
                <Typography style={{fontSize:'20px'}}>Success</Typography>
                <Typography>
                    {Historyval.success}
                </Typography>

            </Start>

        </Box>

    )
}
export default history;
