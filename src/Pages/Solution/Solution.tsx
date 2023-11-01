import { CssBaseline } from '@mui/material';
import { ComponentSharedFooter, ComponentSharedHeader } from '../../components/Shared';
import { IntNavListProps } from '../../utils/interface';
import { SectBenefitSolution } from '../../components/CompPageSolution/BenefitSolution/SectBenefit.tsx';
import { SectSolution } from '../../components/CompPageSolution/SolutionsSection/SectSolution.tsx';

export const PageSolution = ({ NavArrLink }: IntNavListProps) => {
  return (
    <>
      <CssBaseline />
      <ComponentSharedHeader NavArrLink={NavArrLink}/>
      
      <SectBenefitSolution />
      <SectSolution />
      
      <ComponentSharedFooter />
    </>
  )
}
