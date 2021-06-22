import React from 'react'
import InfoJobs from './Infojobs/InfoJobs'
import ListJobs from './ListJobs/ListJobs'
import SearchJobs from './SearchJobs/SearchJobs'

import { BodyCard, ContainerSearch, JobsInfos } from './Jobs.styeles'

function Jobs() {
    return (
        <ContainerSearch>

            <BodyCard>

                <SearchJobs />


                <JobsInfos>
                    <ListJobs />

                    <InfoJobs />
                </JobsInfos>


            </BodyCard>

        </ContainerSearch>
    )
}

export default Jobs
