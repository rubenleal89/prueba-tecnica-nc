import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './StyleBenefit.css';

export const ComponentBenefit = () => {
  return (
    <div className="containerInfoSolutions">
      <h2>Protegemos tu capital sanitario</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa unde aliquid qui laboriosam quam, voluptatibus libero distinctio nostrum cupiditate asperiores eius, autem temporibus corporis ipsam dolorum neque cumque voluptatem sit.</p>
      
      <div className='containerButton'>
        <Button
          sx={{marginBottom:"25px"}}
          component={NavLink}
          to="/solutions"
        >Nuestras soluciones</Button>
        <Button
          component={NavLink}
          to="/funcionalidad"
        >Cómo funciona</Button>
      </div>
    </div>
  )
}
