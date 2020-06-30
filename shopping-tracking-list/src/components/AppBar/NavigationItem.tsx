import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface Props {
    title: string
    icon: ReactElement
    route: string
    onClick(): void
}

export const NavigationItem = (props: Props) => {
    const { icon, route, title, onClick } = props
    const location = useLocation()
    const history = useHistory()

    const isSelected = route === location.pathname
    const navigate = () => {
        history.push(route)
        onClick()
    }

    return <ListItem button selected={isSelected} onClick={navigate}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
    </ListItem>
}