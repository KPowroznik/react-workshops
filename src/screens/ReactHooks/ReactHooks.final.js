import React from 'react';
import { useDropdown } from './hooks/useDropdown.final';

export const ReactHooks = () => {
  const values = [
    {
      id: 1,
      name: 'Apple',
    },
    {
      id: 2,
      name: 'Watermelon',
    },
    { id: 3, name: 'Orange' },
  ];

  const [Dropdown, selectedValue, resetValue, ResetButton] = useDropdown(
    values,
    'name'
  );

  return (
    <>
      <Dropdown />
      <button className='button' onClick={resetValue}>
        Reset
      </button>
      <ResetButton />
      <pre className='codeblock'>{JSON.stringify(selectedValue, null, 2)}</pre>
    </>
  );
};
