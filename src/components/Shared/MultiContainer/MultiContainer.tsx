import { Container } from "@mui/material";
import { IntMultContainersProps } from '../../../utils/interface';
import './StyleMultiContainer.css';

export const MultiContainer = ({arrContenido, colums, rows, ClassContPrin}:IntMultContainersProps) => {

    const RowSizeCalcu = `calc(100vw / ${colums})`

  return (
    <Container 
        sx={{
            gridTemplateColumns:`repeat(${colums}, 1fr)`,
            gridTemplateRows:`repeat(${rows},${RowSizeCalcu})`
        }}
        className={`ContainerGrid ${ClassContPrin ?ClassContPrin : ""}`}
    >
        {
            arrContenido.map(({Icon, ContainerTitle, ContainerText,img, classCont}, index) => {
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
                        {Icon === undefined || Icon.length === 0 ? <></> : Icon }
                        {ContainerTitle === undefined || ContainerTitle.length === 0 ? <></> : <h2>{ContainerTitle}</h2> }
                        {ContainerText === undefined || ContainerText.length === 0 ? <></> : <p>{ContainerText}</p> }
                    </Container>
                )
            })
        }
    </Container>
  );
};
