import React from 'react';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import DepartureBoardOutlinedIcon from '@mui/icons-material/DepartureBoardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FireTruckOutlinedIcon from '@mui/icons-material/FireTruckOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import CastOutlinedIcon from '@mui/icons-material/CastOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const LeftBar = () => {
  return (
    <div className='container'>
      <ul className='menu-bar'>
        <li><img src='logo.svg' /></li>
        <li><WidgetsOutlinedIcon /></li>
        <li><AddToQueueOutlinedIcon /></li>
        <li><LabelImportantOutlinedIcon /></li>
        <li><TextSnippetOutlinedIcon /></li>
        <li><DepartureBoardOutlinedIcon /></li>
        <li><LocalShippingOutlinedIcon /></li>
        <li><FireTruckOutlinedIcon /></li>
        <li><BusinessCenterOutlinedIcon /></li>
        <li><WorkHistoryOutlinedIcon /></li>
        <li><CastOutlinedIcon /></li>
        <li><SettingsOutlinedIcon /></li>
      </ul>
    </div>
  )
}

export default LeftBar
