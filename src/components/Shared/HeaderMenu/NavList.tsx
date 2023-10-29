import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { IntNavListProps } from '../../../utils/interface';
import { NavLink } from 'react-router-dom';

export const ComponentSharedNavList = ({ NavArrLink }: IntNavListProps) =>{

    return (
        <Box sx={{width:250, bgcolor:"#ffff"}}>
            <nav>
                <List>
                    {NavArrLink.map( ({title, path}) => (
                        <ListItem key={title}>
                            <ListItemButton component={NavLink} to={path}>
                                <ListItemText>
                                    {title}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )) }
                </List>
            </nav>
        </Box>
    )
}

ComponentSharedNavList.prototype
