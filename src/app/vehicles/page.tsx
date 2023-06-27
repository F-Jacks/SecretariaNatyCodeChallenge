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
        setVehicles(response.data);
      } catch (error) {
        console.log('Error while trying to fetch vehicles');
      }
    };

    getVehicles();
  }, []);

  return (
    <>
      <section className="mx-auto px-[5%] w-full mt-[60px] ltmd:mt-[68px]">
        <h1 className="mb-12 text-black w-fit text-center bg-white p-4 mx-auto">
            {title}
        </h1>
        <LinkButton href={'vehicles/register'}>
            {registerText}
        </LinkButton>
      </section>
      <section>
        <ul>
          {vehicles.map((v, idx) => (
            <Container key={idx} {...v} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Vehicle;
