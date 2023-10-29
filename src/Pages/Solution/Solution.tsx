import { CssBaseline } from '@mui/material';
import { ComponentSharedHeader } from '../../components/Shared';
import { IntNavListProps } from '../../utils/interface';

export const PageSolution = ({ NavArrLink }: IntNavListProps) => {
  return (
    <>
      <CssBaseline />
      <ComponentSharedHeader NavArrLink={NavArrLink}/>
      PageSolution
    </>
  )
}
