import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './StyleBenefit.css';

export const ComponentBenefit = () => {
  return (
    <>
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

      <div className='containerBeneficios'>
        <h3>LE VIEILLISSEMENT ACTIF</h3>

        <div className='conatinerText'>
          <p>
            IDP SANTE s'occupe du vieillissement actif des personnes pour qu'elles 
            restent aussi longtemps que possible les acteurs de leur propre vie.
          </p>
          <p>
            En vieillissant, nos parents et nos grands-parents changent le rythme de leur vie. 
            Ce processus est inexorable et discret. Lorsque nous prenons soin d'un être cher, 
            nous constatons que l'œil humain passe facilement à côté d'indices subtils qui, 
            s'ils avaient été détectés, nous auraient incités à agir en apportant de l'aide 
            avant qu'un séjour à l'hôpital ne soit nécessaire.
          </p>
          <p>
            En cernant les premiers signes de pertes de robustesse, IDP Santé ouvre des perspectives 
            nouvelles pour améliorer le maintien à domicile plus longtemps, et faciliter les actions 
            préventives des aidants.
          </p>
        </div>

      </div>
    </>
  )
}
