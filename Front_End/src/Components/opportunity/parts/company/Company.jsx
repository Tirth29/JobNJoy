import { Box } from "@mui/material"
import CenteredTabs from "./menus";
import { useState } from "react";
import sample_picture from '../../../opportunity/sample_picture.jpg'
import Requirment from "./Requirment";
import About from "./about";
import History from "./History";

const Company = () =>{

    const [value, setValue] = useState(0);
    const [pic,setpic] = useState(sample_picture)
    const [Historyval,sethistory] = useState({

        founder:'prince,tirth,jay',
        start:'seven memoirs by Maya Angelou (pictured). Published in 1974, the book begins just after the events of I Know Why the Caged Bird Sings, and follows Angelou from the ages of 17 to 19. Written three years after Caged Bird, the book "depicts a single mother',
        failiures:'seven memoirs by Maya Angelou (pictured). Published in 1974, the book begins just after the events of I Know Why the Caged Bird Sings, and follows Angelou from the ages of 17 to 19. Written three years after Caged Bird, the book "depicts a single mother',
        success:'seven memoirs by Maya Angelou (pictured). Published in 1974, the book begins just after the events of I Know Why the Caged Bird Sings, and follows Angelou from the ages of 17 to 19. Written three years after Caged Bird, the book "depicts a single mother',

    });
    const [Requirementval,setRequirMent] = useState({
            jobs:{
                job1:'cs engineer',
                job2:'it engineer',
                job3:'A bitch',
            },
            internships:'portstar,cse,mech',
            salary:{
                salary1:'10000',
                salary2:'10000',
                salary3:'500000'
            },
            aboutJob:{
                job1:'computer bases',
                job2:'computer bases',
                job3:'fuck by worker'
            }

    });
    const [aboutval,setabout] = useState({
        company:{
            type:'softwear',
            networth:'$2000 billion',
            ceo:'Tunnu ',
            manager:'tirth,prince and jay',
        },
        fields:{
            f1:'computer field',
            f2:'mechanical field',
            f3:'porn field',
        }

    })

    

    return(
        <Box>
          <CenteredTabs value={value} setValue={setValue}/>
            {
                value === 0 ? <History Historyval={Historyval} pic={pic}/> :
                value == 1 ? <Requirment Requirementval={Requirementval} pic={pic}/> :
                <About aboutval={aboutval} pic={pic}/>
            }
        </Box>
    )
}

export default Company;