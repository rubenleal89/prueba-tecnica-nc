import './StylePrevention.css';
import { Container, List, ListItem, Stack, Typography } from '@mui/material';
import  {CheckBoxOutlineBlankSharp, CheckSharp } from '@mui/icons-material';
import { ThreeContainer } from '../Shared/ThreeContainerComponent/ThreeContainer';
import { contMultContainers } from '../../utils/interface';
import { TresMujeres, ParejaAdultoMayor } from '../../assets/index';

export const ComponentPrevention = () => {

  const arrList = [
    {
      Id:"text1",
      text:"La prise en charge des déterminants de la fragilité peut réduire ou retarder ses conséquences.",
    },
    {
      Id:"text2",
      text:"La fragilité précède la perte d'autonomie.",
    },
    {
      Id:"text3",
      text:"Le repérage de la fragilité permet d'identifier un état de 'pré-dépendance'."
    },
  ]

  const arrContenido1:contMultContainers[] = [
    {
      ContainerTitle: "CRITÈRES DE FRIED",
      ContainerText: "Le modèle repose sur une analyse des changements physiologiques, provoqués par la sénescence et les changements musculaires liés au vieillissement. Le phénotype de fragilité identifié par Fried comporte les cinq dimensions suivantes : perte de poids non intentionnelle, force de préhension, vitesse de marche, fatigue, faible activité physique.",
      classCont:"containerText ColorBlueTitle"
    },
    {
      ContainerTitle: "LES CRITÈRES DE LA FRAGILITÉ",
      classCont:"containerTitle"
    },
    {
      img:`url(${ParejaAdultoMayor})`,
      classCont:"containerBgImg"
    },
  ]

  const arrContenido2:contMultContainers[] = [
    {
      ContainerTitle: "ACCENTUER LA PRÉVENTION",
      ContainerText: "IDP SANTE développe des solutions digitales intelligentes pour quantifier le comportement, détecter les changements de l'état de santé, la dynamique des personnes et les accompagner dans un programme de soins personnalisé. Ces informations permettent aux familles, aux professionnels de santé, aux associations, aux services de soins à domicile, d'être plus proactifs en prenant soin de leurs résidents âgés.",
      classCont:"containerBlue containerText GridAreaText1"
    },
    {
      ContainerTitle: "FACILITER LA DÉTECTION ET PRÉVENIR LES RISQUES",
      ContainerText: "Grâce à un suivi continu à l'intérieur ou à l'extérieur du domicile, un apprentissage automatique approfondi et une analyse prédictive, IDP Sante fournit des informations précieuses sur les changements dans les activités importantes de la vie quotidienne.",
      classCont:"containerBlue containerText GridAreaText2"
    },
    {
      ContainerTitle: "ANTICIPER LA DÉGRADATION DE L'ÉTAT DE SANTÉ DES PERSONNES",
      ContainerText: "Les algorithmes d'intelligence artificielle artificielle fournissent des éléments synthétiques et factuels sur l'évolution de l'état du patient et apportent de puissantes analyses prédictives des dégradations imminentes de la santé ou de l'état fonctionnel. Ces données exploitables mettent en évidence des tendances qui pourraient mener à des problèmes plus conséquents, telles que l'augmentation du risque de chute, les infections des voies urinaires, la malnutrition, la dépression, etc.",
      classCont:"containerBlue containerText GridAreaText3"
    },
  ]

  const arrContenido3:contMultContainers[] = [
    
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

      <ThreeContainer arrContenido={arrContenido1} colums={3} rows={1} />
      <ThreeContainer arrContenido={arrContenido2} colums={3} rows={1} ClassContPrin="ContainerGridBlue" />

    </>
  )
}
