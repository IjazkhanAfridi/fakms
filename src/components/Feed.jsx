import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import { StateContext } from '../context/StateContext';
import Table from './Table';


const currencies = [
  {
    value: 'FAK ULD Location',
    label: 'FAK ULD Location',
  },
  {
    value: 'FAK Exception Types',
    label: 'FAK Exception Types',
  },
  {
    value: 'Daily FAK Email',
    label: 'Daily FAK Email',
  },
  {
    value: 'Daily FAK Email CC',
    label: 'Daily FAK Email CC',
  },
  {
    value: 'Upliftment station Email',
    label: 'Upliftment station Email',
  },

  {
    value: 'Plan remarks',
    label: 'Plan remarks',
  },
  {
    value: 'Supplier',
    label: 'Supplier',
  },
  {
    value: 'Default Upliftment To Email',
    label: 'Default Upliftment To Email',
  },
  {
    value: 'Default Upliftment CC Email',
    label: 'Default Upliftment CC Email',
  },
  {
    value: 'Base station',
    label: 'Base station',
  },
];

export default function Feed() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { title, setTitle } = useContext(StateContext);

  const [currency, setCurrency] = React.useState();

  const handleChange = (e) => {
    setTitle(e.target.value);
    setCurrency(e.target.value);
  };


  // const filterdata = data.data?.filter((items) => {
  //   return items.value === e.target.value;
  // });
  // console.log(currency);

  return (
      <div style={{marginTop:"120px"}}>
        <div>
          <h1 className='h1'>Adminstration</h1>

          <div className='d-flex'>
            <button
              style={{
                border: 'none',
                fontSize: '16px',
                borderRadius: '5px',
                padding: '5px',
                marginRight: '16px',
              }}
            >
              Group
            </button>
            <button
              style={{
                border: 'none',
                fontSize: '16px',
                borderRadius: '10%',
                padding: '5px',
                marginRight: '16px',
              }}
            >
              Users
            </button>
            <button
              style={{
                border: 'none',
                fontSize: '16px',
                borderRadius: '10%',
                padding: '5px',
                marginRight: '16px',
              }}
            >
              Fleets and spare Availabity
            </button>
            <button
              style={{
                border: 'none',
                fontSize: '16px',
                backgroundColor: '#4f92eb',
                borderRadius: '5px',
                padding: '5px',
                marginRight: '16px',
                color: 'white',
              }}
            >
              Master Data
            </button>
          </div>
        </div>
        <h2>Master Data category</h2>
        <div style={{ mb: '10px', display: 'flex', alignItems: 'center' }}>
          <TextField
            sx={{ mt: '10px', mb: '10px', mr: '10px', width: 220 }}
            id='outlined-select-currency'
            select
            label='Select'
            value={currency}
            onChange={handleChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
        <div class="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
    </div>
</form>
 

        </div>

        <div className='card' style={{ width: '100%' }}>
          <Table />
        </div>
      </div>
  );
}
