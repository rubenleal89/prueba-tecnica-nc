import './StyleHeader.css';
import { AppBar, Box, Button, Container, Drawer, IconButton } from "@mui/material"
import { Menu } from "@mui/icons-material"

import IconPrincipal from '../../../assets/icon/icono.png';
import { useState } from "react"
import { ComponentSharedNavList } from "./NavList"
import { IntNavListProps } from "../../../utils/interface";
import { NavLink } from 'react-router-dom';


export const ComponentSharedHeader = ({ NavArrLink }: IntNavListProps) => {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <AppBar position="static" className='AppBar' >

        <IconButton component={NavLink} to="/" sx={{ "&:hover": { backgroundColor: "inherit" } }}>
          <Container
            component="img"
            src={IconPrincipal}
            alt="IconPrincipal"
            sx={{ width: '180px', margin:"0px", padding:"20px"}}
          />
        </IconButton>

        <Container sx={{ width: 'auto', margin:"0px"}}>
          <Box className="displayNavMenu" >
            {
              NavArrLink.map( ({title, path}) => (
                <Button
                  color="inherit"
                  key={title}
                  component={NavLink}
                  to={path}
                >
                  {title}</Button>
              ))
            }
          </Box>
          
          <IconButton
            onClick={()=> setOpen(!open)}
            className="displayIconMenu"
            color="inherit"
          >
            <Menu />
          </IconButton>
        </Container>

      </AppBar>

      <Drawer
        open={open}
        anchor="right"
        className="displayDrawer"
        onClose={()=> setOpen(false)}
      >
        <Button onClick={()=> setOpen(!open)} color="inherit" >
          <Menu />
        </Button>
        <ComponentSharedNavList NavArrLink={NavArrLink} />
      </Drawer>
    </>
  )
}


