import React from 'react';
import { Tabs, Tab } from '@mui/material';
import BotContent from '../components/app/BotContent';

export default function BotTabs() {
  const [tab, setTab] = React.useState(0);
  const categories = ["crop", "weather", "pest", "market", "season"];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <div className='bot-tabs container p-4 d-flex gap-3 align-items-center justify-content-center flex-column'>
      <Tabs value={tab} onChange={handleChange} centered>
        {categories.map((category, index) => (
          <Tab key={index} label={category.charAt(0).toUpperCase() + category.slice(1)} />
        ))}
      </Tabs>
      <BotContent category={categories[tab]} />
    </div>
  )

}