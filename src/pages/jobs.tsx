import React from 'react'
import Searchjobs from '../ui/components/Jobs/Searchjobs/Searchjobs';

import {
    Container,
    JobsArea,
    JobsResult,
    JobsInfoArea
} from '../ui/styles/Jobs.styles';

import InfoJobs from '../ui/components/Jobs/Infojobs/InfoJobs'



function Jobs() {
    return (
        <>
            <Container role="section">
                <JobsArea>
                    <Searchjobs />
                    <JobsResult>
                        <div>...</div>
                        <JobsInfoArea>
                            <InfoJobs />
                        </JobsInfoArea>
                    </JobsResult>
                </JobsArea>
            </Container>
        </>
    );
}
export default Jobs;