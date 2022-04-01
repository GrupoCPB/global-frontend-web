import { Select, MenuItem, styled } from '@material-ui/core';

const StyledSelect = styled(Select)`
    margin: 0 10px 0 5px;

    fieldset {
        border: none;
    }

    .MuiSvgIcon-root path {
        color: ${(({theme}) => theme.palette.secondary.light)};
    }
`

type DateInputType = {
    type: 'Data' | 'Mês' | 'Ano'
}

const dias = [];

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const anos = []

for (let i = 1; i <= 31; i++) {
    dias.push(i);
    anos.length > 10 ? false : anos.push(i + 2021);
}

export default function DateInput({ type }: DateInputType) {
    if (type === 'Data') {
        return (
            <label>
                <strong>{type}:</strong>
                <StyledSelect defaultValue={1}>
                    {
                        dias.map(el => {
                            return (
                                <MenuItem value={el}>{el}</MenuItem>
                            )
                        })
                    }
                </StyledSelect>
            </label>
        )
    }

    if (type === 'Mês') {
        return (
            <label>
                <strong>{type}:</strong>
                <StyledSelect defaultValue={'Janeiro'}>
                    {
                        meses.map(el => {
                            return (
                                <MenuItem value={el}>{el}</MenuItem>
                            )
                        })
                    }
                </StyledSelect>
            </label>
        )
    }

    if (type === 'Ano') {
        return (
            <label>
                <strong>{type}:</strong>
                <StyledSelect defaultValue={2022}>
                    {
                        anos.map(el => {
                            return (
                                <MenuItem value={el}>{el}</MenuItem>
                            )
                        })
                    }
                </StyledSelect>
            </label>
        )
    }
}