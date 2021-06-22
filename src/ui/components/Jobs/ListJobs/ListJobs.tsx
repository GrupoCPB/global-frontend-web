import React from 'react'
import { BodyCard, ListJobsSection, DividerJobs } from './ListJobs.styles'
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'


function ListJobs() {
    const ongs = [
        {
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            vaga: 'VISUAL DESIGN',
            nome: 'Canoa para Todos',
            local: 'São Paulo'
        },
        {
            vaga: 'Designer De Produto',
            nome: 'Sou do Bem',
            local: 'São Paulo'
        },
        {
            vaga: 'Product Designer',
            nome: 'Cidadania Jovem',
            local: 'São Paulo'
        },
        {
            vaga: 'UI/UX DESIGN',
            nome: 'Amigo Bicho',
            local: 'São Paulo'
        },
        ,
        {
            vaga: 'Product Designer',
            nome: 'ONG BRASIL',
            local: 'São Paulo'
        },
        {
            vaga: 'Design Gráfico',
            nome: 'Cores para vida',
            local: 'São Paulo'
        },
        {
            vaga: 'UX Design',
            nome: 'ABCD’S',
            local: 'São Paulo'
        },
        {
            vaga: 'UI Design',
            nome: 'ONG Ubutu Brasília',
            local: 'São Paulo'
        },
        {
            vaga: 'UX Design',
            nome: 'Abong',
            local: 'São Paulo'
        },
        {
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        },
        {
            vaga: 'UX Design',
            nome: 'MAIS',
            local: 'São Paulo'
        }
    ];

    const vagaLoop = ongs.map((vaga, index) => {
        return (
            <>
                <ListItem alignItems="flex-start" key={index}>
                    <ListItemAvatar>
                        <Avatar src={`/img/ongs_empresas/${vaga.nome}.png`} />
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
                <DividerJobs />
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
