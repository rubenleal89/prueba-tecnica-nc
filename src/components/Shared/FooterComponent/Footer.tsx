import { Typography } from '@mui/material';
import './StyleFooter.css';

export const ComponentSharedFooter = () => {
  return (
    <div className='containerFooter'>
      <Typography sx={{textAlign:"end", width:"100%"}}>
        ©copyright 2019 <a href="#">IDP Sante</a>
      </Typography>
      <div className="infoLegales">
        <p>Aviso Legal |</p>
        <p>Condiciones de uso |</p>
        <p>Política de privacidad |</p>
        <p>Contáctenos: info@idpsante.com</p>
      </div>
    </div>
  )
}
