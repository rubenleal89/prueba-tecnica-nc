import { Container } from "@mui/material";
import { IntMultContainersProps } from '../../../utils/interface';
import './StyleThreeContainer.css';

export const ThreeContainer = ({arrContenido, colums, rows, ClassContPrin}:IntMultContainersProps) => {

    const RowSizeCalcu = `calc(100vw / ${colums})`

  return (
    <Container 
        sx={{
            gridTemplateColumns:`repeat(${colums}, 33.33vw)`,
            gridTemplateRows:`repeat(${rows},${RowSizeCalcu})`
        }}
        className={`ContainerGrid ${ClassContPrin}`}
    >
        {
            arrContenido.map(({ContainerTitle, ContainerText,img, classCont}, index) => {
                if (img !== undefined && img.length > 5) {
                    return (
                    <Container
                        key={index}
                        className={classCont}
                        sx={{ backgroundImage:img }}>
                    </Container>
                    )
                }
                return (
                    <Container className={classCont} key={index} sx={{display:"flex"}}>
                        {ContainerTitle === undefined || ContainerTitle.length === 0 ? <></> : <h2>{ContainerTitle}</h2> }
                        {ContainerText === undefined || ContainerText.length === 0 ? <></> : <p>{ContainerText}</p> }
                    </Container>
                )
            })
        }
    </Container>
  );
};
