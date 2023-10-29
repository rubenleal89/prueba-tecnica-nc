import { CssBaseline } from "@mui/material"
import { IntNavListProps } from "../../utils/interface"
import { ComponentSharedHeader } from "../Shared"

export const ComponentInfo = ({ NavArrLink }: IntNavListProps) => {
  return (
    <>
      <CssBaseline />
      <ComponentSharedHeader NavArrLink={NavArrLink}/>
      Muy Pronto...
    </>
  )
}
