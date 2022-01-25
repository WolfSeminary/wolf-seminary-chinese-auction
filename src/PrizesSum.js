import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const PrizesSum = (props) => {
    return (
        <Badge badgeContent={props.numOfSelectedPrizes} color="primary">
            <MailIcon color="action" />
        </Badge>
    )
}

export default PrizesSum