import { Typography } from '@material-ui/core'
import moment from 'moment'
import React from 'react'

interface Props {
    dateISO: string
    toColor?: boolean
}

export const DeliveryDate = React.memo((props: Props) => {
    const { dateISO, toColor } = props
    const date = new Date(dateISO)
    date.setHours(0, 0, 0, 0)
    const dateUnixTimestamp = date.getTime()

    const todaysDate = new Date()
    todaysDate.setHours(0, 0, 0, 0)
    const todaysDateUnixTimestamp = todaysDate.getTime()

    let color
    if (toColor) {
        if (dateUnixTimestamp < todaysDateUnixTimestamp) {
            color = 'red'
        } else if (dateUnixTimestamp === todaysDateUnixTimestamp) {
            color = 'orange'
        } else {
            color = 'green'
        }
    }

    const text = moment(date).format('DD-MM-YYYY')

    return <Typography style={{ color }}>{text}</Typography>
})