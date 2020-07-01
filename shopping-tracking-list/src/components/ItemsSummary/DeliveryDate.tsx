import React from 'react'
import moment from 'moment'
import { makeStyles, createStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(createStyles({

}))

interface Props {
    dateISO: string
    toColor?: boolean
}

export const DeliveyDate = React.memo((props: Props) => {
    const { dateISO } = props
    const date = new Date(dateISO)
    date.setHours(0, 0, 0, 0)

    const todaysDate = new Date()
    todaysDate.setHours(0, 0, 0, 0)

    //TODO: color
    const text = moment(date).format('DD-MM-YYYY')

    return <Typography>{text}</Typography>
})