"use client"


import React, { useState, useEffect } from 'react';
import Container from './container';
import { IVehicle } from '@/types/vehicle';
import axios from 'axios';
import { registerText, title, url } from '@/mocks/vehicles';
import LinkButton from '../components/linkButton';

const Vehicle = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  useEffect(() => {
    const getVehicles = async () => {
      try {
        const response = await axios.get(url);
        setVehicles(response.data.reverse());
      } catch (error) {
        console.log('Error while trying to fetch vehicles');
      }
    };

    getVehicles();
  }, []);


  const delCallback = (id: number) => {
    const delUrl = `${url}/${id}/`;

    axios.delete(delUrl,{data: {id: id}})
      .then((_) => {
          setVehicles(old => old.filter(vehicle => vehicle.id !== id));
      })
      .catch((_) => {
        console.log("error");
      })
  }


  return (
    <>
      <section className="w-full mt-[60px] ltmd:mt-[68px] h-full mx-auto px-[5%] max-w-4xl">
        <h1 className="mb-12 text-black w-fit text-center bg-white p-4 mx-auto">
            {title}
        </h1>
        <LinkButton href={'vehicles/register'}>
            {registerText}
        </LinkButton>
      </section>
      <section className="w-full h-full mx-auto px-[5%] max-w-4xl">
        <ul className='flex items-center justify-center flex-col gap-y-8'>
          {vehicles.map((v, idx) => (
            <Container 
              key={idx} 
              {...v} 
              delCallback={delCallback}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Vehicle;
