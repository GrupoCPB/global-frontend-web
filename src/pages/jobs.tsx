import React from 'react'

import {Container} from '../ui/styles/Jobs.styles';

import Searchjobs from '../ui/components/Jobs/Searchjobs/Searchjobs'

function Jobs() {
    return(
        <>            
            <Container role="section">
                <Searchjobs/>
                <div>
                    ...
                </div>
                
            </Container>
        </>

        

    );
}
export default Jobs;