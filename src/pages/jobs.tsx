import React from 'react'
import Searchjobs from '../ui/components/Jobs/SearchJobs/SearchJobs';

import JobsComponet from '../ui/components/Jobs/Jobs'

import {
    Container
} from '../ui/styles/Jobs.styles';



function Jobs() {
    return (
        <>
            <Container role="section">
                <JobsComponet />
            </Container>
        </>
    );
}
export default Jobs;