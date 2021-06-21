import React from 'react'
import { BodyCard, ListJobsSection, DividerJobs } from './ListJobs.styles'
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'


function ListJobs() {
    const ongs = [
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        ,
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            logo: '/img/mais.jpg',
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        }
    ];

    const vagaLoop = ongs.map((vaga, index) => {
        return (
            <>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Mais logo" src={vaga.logo} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={vaga.vaga}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    <b>{vaga.nome}</b>
                                    {vaga.local}
                                </Typography>

                            </React.Fragment>
                        }
                    />
                </ListItem>
                <DividerJobs variant="inset" />
            </>
        );
    })
    return (
        <BodyCard>
            <ListJobsSection>
                {vagaLoop}
            </ListJobsSection>
        </BodyCard>
    )
}

export default ListJobs
