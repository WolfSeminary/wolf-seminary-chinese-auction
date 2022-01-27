import React from 'react'
import Badge from '@mui/material/Badge';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export default function PrizesSum(props) {
    return (
        <Badge badgeContent={props.numOfSelectedPrizes} color="primary">
            <CardGiftcardIcon color="action" />
        </Badge>
    )
}