import { Container } from "@mui/material"
import { EnfermeraAbuelitaPG2, EnfermeraSeñorPG2, IconPrincipal, MadreHijaPG2  } from "../../../assets"
import { MultiContainer } from '../../Shared/MultiContainer/MultiContainer';
import { contMultContainers } from "../../../utils/interface";
import { FavoriteSharp, HomeSharp } from "@mui/icons-material";

export const SectSolution = () => {

  const arrContenido:contMultContainers[] = [
    {
      img:`url(${EnfermeraAbuelitaPG2})`,
      classCont:"containerBgImg"
    },
    {
      Icon:<FavoriteSharp />,
      ContainerTitle:"PROFESSIONNELS DE SANTÉ ET GESTIONNAIRES D'ÉTABLISSEMENTS",
      ContainerText:`Au fur et à mesure que les aînés vieillissent, ils ont besoin d'une assistance accrue ; il est difficile de savoir à quel moment fournir cette assistance pour chaque aîné.
      IDP Santé aide les organisations à dresser un tableau clair des activités de leurs patients ou résidents, en soulignant les changements de comportement au fur et à mesure qu'ils se produisent, leur permettant de gérer des plans de soins efficaces et répondre au mieux à leurs besoins particuliers.
      Le système IDP Santé s'enrichit en permanence de données sur les habitudes quotidiennes de chaque personne âgée et identifient les changements qui pourraient indiquer la nécessité d'augmenter l'aide fournie.`,
      classCont:"containerText SaltoLinea"
    },
    {
      Icon:<HomeSharp />,
      ContainerTitle:"AMÉLIORER L'INTERVENTION DES AIDANTS À DOMICILE",
      ContainerText:"Avec une meilleure connaissance de l'activité de votre patient 24 heures sur 24, vous pouvez immédiatement identifier les besoins et y répondre. Les analyses intelligentes vous donnent une visibilité sur les changements dans les routines quotidiennes et vous aident à identifier d'éventuels problèmes de santé émergents.",
      classCont:"containerText SaltoLinea"
    },
    {
      img:`url(${EnfermeraSeñorPG2})`,
      classCont:"containerBgImg displayImg"
    },
    {
      img:`url(${MadreHijaPG2})`,
      classCont:"containerBgImg"
    },
    {
      Icon:<FavoriteSharp />,
      ContainerTitle:"APPORTER LA TRANQUILLITÉ D'ESPRIT AUX FAMILLES",
      ContainerText:`Grâce à l'utilisation 24h/24 et 7j/7 des données enregistrées à l'intérieur ou à l'extérieur du domicile, le système de prévention à domicile Homepredict d'IDP Santé permet d'alerter non seulement les chutes et les malaises, mais aussi de comprendre le rythme quotidien et les changements imperceptibles de chaque individu.`,
      classCont:"containerText SaltoLinea"
    },
  ]

  return (
    <>

      <MultiContainer arrContenido={arrContenido} colums={2} rows={3} ClassContPrin='ContainerAreaEnd' />

      <Container sx={{display:"flex", flexDirection:"column",alignItems:"center", padding:"40px", textAlign:"center"}}>
        <img src={IconPrincipal} alt="IconPrincipal" />
        <h2>NOUS PRESERVOND VOTRE ROBUSTESSE</h2>
      </Container>
    </>
  )
}
