import { Container, CssBaseline } from '@mui/material';
import { ComponentSharedFooter, ComponentSharedHeader } from '../../components/Shared';
import { IntNavListProps } from '../../utils/interface';

export const PageSolution = ({ NavArrLink }: IntNavListProps) => {
  return (
    <>
      <CssBaseline />
      <ComponentSharedHeader NavArrLink={NavArrLink}/>
      
      <Container >
        PageSolution
      </Container>
      
      <ComponentSharedFooter />
    </>
  )
}
