import React from 'react';

export default function Sidebar() {
  return (
    <>
      <aside class='w-64 mt-10' aria-label='Sidebar'>
        <div class='overflow-y-auto py-4 h-screen px-3 bg-gray-50 rounded dark:bg-gray-800'>
          <ul class='space-y-2'>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span class='ml-3'>FAKMS</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span class='flex-1 ml-3 whitespace-nowrap'>Pages</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span class='flex-1 ml-3 whitespace-nowrap'>Group</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <span class='flex-1 ml-3 whitespace-nowrap'>Drafts</span>
              </a>
            </li>
          </ul>
          <ul
            class='space-y-2 border-t border-gray-200 dark:border-gray-700'
            style={{ marginTop: '55vh' }}
          >
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'
              >
                <span class='ml-4'>Reports</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'
              >
                <span class='ml-3'>Admin</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
