import { StyledDonationMainPageWrapper } from "../../../../styles/donation/DonationMainPage.styles";
import Banner from './Banner';
import EmpresaOuConsumidor from './EmpresaOuConsumidor';
import MetasEmDestaque from "./MetasEmDestaque";
import EmpresasApoio from "../../../../styles/donation/EmpresasApoiam";

export default function Index() {
    return (
        <StyledDonationMainPageWrapper>
            <Banner />
            <EmpresaOuConsumidor />
            <MetasEmDestaque />
            <EmpresasApoio />
        </StyledDonationMainPageWrapper>
    )
}