import React, { useEffect, useMemo, useState } from 'react';
import { Phone } from '../../types';
import { PhonesContext } from './PhonesContext';
import { getPhones } from '../../api/dataFromServer';

interface Props {
  children: React.ReactNode;
}

export const PhonesContextProvider: React.FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
    .then(setPhones)
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const values = useMemo(
    () => ({
      phones,
    }),
    [phones],
  );

  return (
    <PhonesContext.Provider value={values}>{children}</PhonesContext.Provider>
  );
};
