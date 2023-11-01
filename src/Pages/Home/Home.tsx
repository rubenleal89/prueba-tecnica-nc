import { ComponentSharedHeader } from '../../components/Shared/HeaderMenu/Header';
import { ComponentSharedFooter } from '../../components/Shared/FooterComponent/Footer';
import { Container, CssBaseline } from '@mui/material';
import { IntNavListProps } from '../../utils/interface';
import { ComponentBenefit } from '../../components/BenefitSection/Benefit';
import { ComponentPrevention } from '../../components/PreventionSection/Prevention';


export const PageHome = ({ NavArrLink }: IntNavListProps) => {
  return (
    <>
      <CssBaseline />
      <ComponentSharedHeader NavArrLink={NavArrLink}/>

      <ComponentBenefit />
      <ComponentPrevention />
      
      <ComponentSharedFooter />
    </>
  )
}
