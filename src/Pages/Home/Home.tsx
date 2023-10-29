import { ComponentSharedHeader } from '../../components/Shared/HeaderMenu/Header';
// import { ComponentSharedFooter } from '../../components/Shared/FooterComponent/Footer';
import { Container, CssBaseline } from '@mui/material';
import { IntNavListProps } from '../../utils/interface';


export const PageHome = ({ NavArrLink }: IntNavListProps) => {
  return (
    <>
      <CssBaseline />
      <ComponentSharedHeader NavArrLink={NavArrLink}/>

      <Container sx={{ mt:5 }}>
      </Container>
      {/* <hr />
      <ComponentSharedFooter />
      <hr /> */}
    </>
  )
}
