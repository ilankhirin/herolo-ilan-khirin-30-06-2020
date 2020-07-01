import { AppBar, makeStyles, Tab, Tabs, Theme } from '@material-ui/core';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import React, { useState } from 'react';
import { ItemsList } from './ItemsList';
import { StoresAggregations } from './StoresAggregations';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%'
    },
}));

const LIST_TAB = 'list'
const STORE_AGGREGATION_TAB = 'stores-aggregations'

type TabValue = typeof LIST_TAB | typeof STORE_AGGREGATION_TAB

export const ItemsSummary = () => {
    const [tabValue, setTabValue] = useState<TabValue>('list')
    const classes = useStyles()

    return <div className={classes.root}>
        <TabContext value={tabValue}>
            <AppBar position="static">
                <Tabs variant='fullWidth' value={tabValue} onChange={(e, newValue: TabValue) => setTabValue(newValue)}>
                    <Tab label='List' value={LIST_TAB} />
                    <Tab label='Stores Aggregations' value={STORE_AGGREGATION_TAB} />
                </Tabs>
            </AppBar>
            <TabPanel value={LIST_TAB}>
                <ItemsList />
            </TabPanel>
            <TabPanel value={STORE_AGGREGATION_TAB}>
                <StoresAggregations />
            </TabPanel>
        </TabContext>
    </div >
}