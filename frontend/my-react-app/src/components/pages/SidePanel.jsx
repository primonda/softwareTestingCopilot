import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function SidePanel(props){
    return <Tabs
        orientation='vertical'
        variant='scrollable'
        aria-label="Vertical tabs example"
        sx={{ borderRight: 3, borderColor: 'divider' }}
        className='tabs'
    >
        <Tab label="Portfolios"></Tab>
        <Tab label="OKRs"></Tab>
        <Tab label="Roadmaps"></Tab>
        <Tab label="AgilePlace"></Tab>
    </Tabs>
}