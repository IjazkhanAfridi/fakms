import styled from '@emotion/styled';
import { Add, Close } from '@mui/icons-material';
import { Fab, Modal } from '@mui/material';
import React from 'react';
import { useState } from 'react';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useContext } from 'react';
import { StateContext } from '../context/StateContext';

const StyleModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
});
export default function Addpost() {
  const [dwc, setDwc] = useState(false);
  const [fak, setFak] = useState(false);
  const [bay, setBay] = useState(false);
  const [lms, setLms] = useState(false);
  const [fly, setFly] = useState(false);

  const { open, setOpen } = useContext(StateContext);

  return (
    <div>
      <button
        onClick={(e) => setOpen(true)}
        title='Add'
        style={{
          position: 'fixed',
          bottom: 20,
          right: 40,
        }}
      >
        <Fab color='primary' aria-label='Add'>
          <Add style={{ color: 'white !important' }} />
        </Fab>
      </button>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div
          className='h-screen p-3 rounded bg-sky-50'
          borderRadius={5}
          style={{ overflowY: 'auto', width: '25%' }}
        >
          <button
            onClick={(e) => setOpen(false)}
            title='close'
            style={{
              position: 'fixed',
              top: 10,
              right: 40,
            }}
          >
            <Close style={{ color: 'white !important' }} />
          </button>
          <h3 style={{ marginTop: '40px' }}>FAK ULD Location</h3>

          <div className='mt-2'>
            <div
              onClick={() => setDwc(!dwc)}
              class='bg-white overflow-hidden px-4 py-2  flex items-center hover:cursor-pointer'
            >
              {dwc ? <ExpandLess /> : <ExpandMore />}
              <span className='ml-2'> MS BULK AREA </span>
            </div>

            <div
              class={`${
                dwc ? `w-100 opacity-100 visible h-100` : 'invisible hidden'
              }  w-full   border-light bg-white px-5 py-2 shadow-card transition-all`}
            >
              <input
                type='text'
                className='w-full flex justify-center border rounded p-3 my-1'
                placeholder='Location'
                required
              />
              <input
                type='text'
                className='w-full flex justify-center border rounded p-3'
                placeholder='Description'
                required
              />
              <div className='w-100 my-2 flex justify-between '>
                <div>
                  <button
                    type='button'
                    class='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                  >
                    Delete
                  </button>{' '}
                </div>
                <div>
                  <button
                    type='button'
                    class='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                  >
                    Cancel
                  </button>{' '}
                  <button
                    type='button'
                    class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                  >
                    Save
                  </button>{' '}
                </div>
              </div>
            </div>
          </div>

          <div className='mt-2'>
            <div
              onClick={() => setFak(!fak)}
              class='bg-white overflow-hidden px-4 py-2  flex items-center hover:cursor-pointer'
            >
              {fak ? <ExpandLess /> : <ExpandMore />}
              <span className='ml-2'> DWC Bay Area </span>
            </div>

            <div
              class={`${
                fak ? `w-100 opacity-100 visible h-100` : 'invisible hidden'
              }  w-full   border-light bg-white px-5 py-2 shadow-card transition-all`}
            >
              <input
                type='text'
                className='w-full flex justify-center border rounded p-3 my-1'
                placeholder='Location'
                required
              />
              <input
                type='text'
                className='w-full flex justify-center border rounded p-3'
                placeholder='Description'
                required
              />
              <div className='w-100 my-2 flex justify-between '>
                <div>
                  <button
                    type='button'
                    class='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                  >
                    Delete
                  </button>{' '}
                </div>
                <div>
                  <button
                    type='button'
                    class='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                  >
                    Cancel
                  </button>{' '}
                  <button
                    type='button'
                    class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                  >
                    Save
                  </button>{' '}
                </div>
              </div>
            </div>
          </div>
          <div className='mt-2'>
            <div
              onClick={() => setBay(!bay)}
              class='bg-white overflow-hidden px-4 py-2  flex items-center hover:cursor-pointer'
            >
              {bay ? <ExpandLess /> : <ExpandMore />}
              <span className='ml-2'>
                Fake Holding/Staging Area opposie C-64 Bay Near Concourse{' '}
              </span>
            </div>

            <div
              class={`${
                bay ? `w-100 opacity-100 visible h-100` : 'invisible hidden'
              }  w-full   border-light bg-white px-5 py-2 shadow-card transition-all`}
            >
              <input
                type='text'
                className='w-full flex justify-center border rounded p-3 my-1'
                placeholder='Location'
                required
              />
              <input
                type='text'
                className='w-full flex justify-center border rounded p-3'
                placeholder='Description'
                required
              />
              <div className='w-100 my-2 flex justify-between '>
                <div>
                  <button
                    type='button'
                    class='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                  >
                    Delete
                  </button>{' '}
                </div>
                <div>
                  <button
                    type='button'
                    class='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                  >
                    Cancel
                  </button>{' '}
                  <button
                    type='button'
                    class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                  >
                    Save
                  </button>{' '}
                </div>
              </div>
            </div>
          </div>
          <div className='mt-2'>
            <div
              onClick={() => setLms(!lms)}
              class='bg-white overflow-hidden px-4 py-2  flex items-center hover:cursor-pointer'
            >
              {lms ? <ExpandLess /> : <ExpandMore />}
              <span className='ml-2'>Flying Out/In to STNS/DXB DWC</span>
            </div>

            <div
              class={`${
                lms ? `w-100 opacity-100 visible h-100` : 'invisible hidden'
              }  w-full   border-light bg-white px-5 py-2 shadow-card transition-all`}
            >
              <input
                type='text'
                className='w-full flex justify-center border rounded p-3 my-1'
                placeholder='Location'
                required
              />
              <input
                type='text'
                className='w-full flex justify-center border rounded p-3'
                placeholder='Description'
                required
              />
              <div className='w-100 my-2 flex justify-between '>
                <div>
                  <button
                    type='button'
                    class='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                  >
                    Delete
                  </button>{' '}
                </div>
                <div>
                  <button
                    type='button'
                    class='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                  >
                    Cancel
                  </button>{' '}
                  <button
                    type='button'
                    class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                  >
                    Save
                  </button>{' '}
                </div>
              </div>
            </div>
          </div>
          <div className='mt-2'>
            <div
              onClick={() => setFly(!fly)}
              class='bg-white overflow-hidden px-4 py-2  flex items-center hover:cursor-pointer'
            >
              {fly ? <ExpandLess /> : <ExpandMore />}
              <span className='ml-2'> Bay G21 </span>
            </div>

            <div
              class={`${
                fly ? `w-100 opacity-100 visible h-100` : 'invisible hidden'
              }  w-full   border-light bg-white px-5 py-2 shadow-card transition-all`}
            >
              <input
                type='text'
                className='w-full flex justify-center border rounded p-3 my-1'
                placeholder='Location'
                required
              />
              <input
                type='text'
                className='w-full flex justify-center border rounded p-3'
                placeholder='Description'
                required
              />
              <div className='w-100 my-2 flex justify-between '>
                <div>
                  <button
                    type='button'
                    class='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                  >
                    Delete
                  </button>{' '}
                </div>
                <div>
                  <button
                    type='button'
                    class='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                  >
                    Cancel
                  </button>{' '}
                  <button
                    type='button'
                    class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                  >
                    Save
                  </button>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyleModal>
    </div>
  );
}
