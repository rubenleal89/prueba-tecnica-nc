import './StylePrevention.css';
import { Container, List, ListItem, Stack, Typography } from '@mui/material';
import  {CheckBoxOutlineBlankSharp, CheckSharp, EditCalendar, FavoriteSharp, HomeSharp } from '@mui/icons-material';
import { MultiContainer } from '../Shared/MultiContainer/MultiContainer';
import { contMultContainers } from '../../utils/interface';
import { TresMujeres, MadreHija, EnfermeraAbuelita, ReunionFamiliar, IconPrincipal } from '../../assets/index';
import { arrContenido1, arrContenido2, arrList } from './ArrContCard';

export const ComponentPrevention = () => {

  const arrContenido3:contMultContainers[] = [
    {
      Icon:<EditCalendar />,
      ContainerTitle:"IDENTIFIER LES ANOMALIES AVANT LES SITUATIONS D'URGENCE!",
      ContainerText:`IDP Santé utilise des données de capteurs en temps réel et des algorithmes intelligents pour établir des modèles d'activité et identifier les anomalies et les situations d'urgence.

      Les données sont regroupées dans un outil de visualisation et d'aide à la décision à destination des professionnels de santé dans le cadre du suivi de l'autonomie d'un résident, de la rééducation d'un patient et dans une application, pour permette aux aidants familiaux de suivre les évolutions, d'être immédiatement informés ce cas d'anomalie, de renforcer les liens sociaux avec leurs proches et d'optimiser le partage d'informations des différents intervenants au domicile.
      
      Les aidants reçoivent un aperçu de l'état de santé de leur proche et les activités de leur vie quotidienne.`,
      classCont:"containerText SaltoLinea"
    },
    {
      img:`url(${MadreHija})`,
      classCont:"containerBgImg"
    },
    {
      img:`url(${EnfermeraAbuelita})`,
      classCont:"containerBgImg displayImg"
    },
    {
      Icon:<FavoriteSharp />,
      ContainerTitle:"AMÉLIORER LA QUALITÉ DU SUIVI DES PERSONNES AGÉES",
      ContainerText:"Que vous soyez un aidant, un professionnel de santé ou employé dans des résidences pour personnes âgées, la plupart des technologies permettent de surveiller les évènements, comme l'ouverture des portes, la présence au lit, la fréquence cardiaque, etc, mais elles ne sont pas capable d'identifier les signaux faibles, les évolutions imperceptibles à l'œil dans les habitudes d'une personne, qui pourraient indiquer un changement dans le temps plus important dans sa santé ou son état fonctionnel.",
      classCont:"containerText SaltoLinea"
    },
    {
      Icon:<HomeSharp />,
      ContainerTitle:"AMÉLIORER LE MAINTIEN À DOMICILE",
      ContainerText:`La solution IDP Santé mesure vos indicateurs de robustesse, surveille vos habitudes de vie et utilise l'intelligence artificielle pour apprendre les habitudes quotidiennes uniques de chaque individu.

      L'analyse personnalisée des tendances et la détection précoce des changements de l'état de robustesse et dans les activités de la vie quotidienne fournissent aux professionnels de santé des données factuelles permettant la mise en place d'un parcours spécifiquement adapté et améliorer la qualité des soins.`,
      classCont:"containerText SaltoLinea"
    },
    {
      img:`url(${ReunionFamiliar})`,
      classCont:"containerBgImg"
    },
  ]

  return (
    <>
      <div className='seccionOnePrevention'>
        <Container className='containerBgImg' sx={{backgroundImage:`url(${TresMujeres})`}}>
        </Container>

        <div className="containerText">
        
          <p>
            Une équipe de chercheurs pluridisciplinaires dirigée par le Professeur 
            Pierre-Paul Vidal a développé un système de détection des signaux faibles
            de la pré-fragilité basé sur les travaux de Linda Fried.
          </p>
          <Typography margin="20px 0">
            La fragilité est un processus dynamique potentiellement réversible:
          </Typography>

          <List>
          {
            arrList.map(({Id, text}) => (
              <ListItem sx={{padding:"0"}} key={Id}>
                <Stack direction="column" spacing={-3.2}>
                  <CheckBoxOutlineBlankSharp color="primary" fontSize='small' />
                  <CheckSharp color="primary" />
                </Stack>
                <Typography className='ListCheckIcon'> {text} </Typography>
              </ListItem>
            ))
          }
          </List>
        </div>

        <div className='containerTitle'>
          <h2>
            LA FRAGILITÉ EST UN ÉTAT RÉVERSIBLE SI ELLE EST DÉPISTÉE PRÉCOCEMENT
          </h2>
        </div>

      </div>

      <MultiContainer arrContenido={arrContenido1} colums={3} rows={1} />
      <MultiContainer arrContenido={arrContenido2} colums={3} rows={1} ClassContPrin="ContainerGridBlue" />
      <MultiContainer arrContenido={arrContenido3} colums={2} rows={3} ClassContPrin='ContainerAreaEnd' />

      <Container sx={{display:"flex", flexDirection:"column",alignItems:"center", padding:"40px", textAlign:"center"}}>
        <img src={IconPrincipal} alt="IconPrincipal" />
        <h2>NOUS PRESERVOND VOTRE ROBUSTESSE</h2>
      </Container>

    </>
  )
}
