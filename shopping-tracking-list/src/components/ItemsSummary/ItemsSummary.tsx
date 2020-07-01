import { AppBar, makeStyles, Tab, Tabs, Theme } from '@material-ui/core';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import React, { useState } from 'react';
import { ItemsList } from './ItemsList/ItemsList';
import { StoresAggregations } from './StoresAggregations/StoresAggregations';
import { StoreItem } from '../../models/StoreItem';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%'
    },
}));

const LIST_TAB = 'list'
const STORE_AGGREGATION_TAB = 'stores-aggregations'

type TabValue = typeof LIST_TAB | typeof STORE_AGGREGATION_TAB

interface Props {
    items: StoreItem[]
}

export const ItemsSummary = (props: Props) => {
    const { items } = props
    const [tabValue, setTabValue] = useState<TabValue>('list')
    const classes = useStyles()
    const orderedByDeliveryDate = items.sort((a, b) => new Date(a.deliveryDateISO).getTime() - new Date(b.deliveryDateISO).getTime())

    return <div className={classes.root}>
        <TabContext value={tabValue}>
            <AppBar position="static">
                <Tabs variant='fullWidth' value={tabValue} onChange={(e, newValue: TabValue) => setTabValue(newValue)}>
                    <Tab label='List' value={LIST_TAB} />
                    <Tab label='Stores Aggregations' value={STORE_AGGREGATION_TAB} />
                </Tabs>
            </AppBar>
            <TabPanel value={LIST_TAB}>
                <ItemsList items={orderedByDeliveryDate} />
            </TabPanel>
            <TabPanel value={STORE_AGGREGATION_TAB}>
                <StoresAggregations items={orderedByDeliveryDate} />
            </TabPanel>
        </TabContext>
    </div >
}