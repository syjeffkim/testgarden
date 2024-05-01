import React, { useState } from 'react';
import PlantCardSelect from './PlantCardSelect.jsx';
import plantDatabase from '../staticObject.js';
import { useSelector } from 'react-redux';

export default function SelectPlants() {
  //fetch all plants from database via url
  //for loop nonsense here
  const plantData = useSelector((state) => state.plants.plantList);
  //not sure if plantData auto updates render below
  console.log(plantData);
  // const array = [];
  // for (const ele of plantData) {
  //   array.push(
  //     <PlantCardSelect
  //       commonName={ele.CommonName}
  //       species={ele.Species}
  //       habit={ele.Habit}
  //       duration={ele.Duration}
  //       image={ele.Thumb}
  //       light={ele.Light}
  //       water={ele.Water}
  //       plantId={ele._id}
  //       key={ele._id}
  //     />
  //   );
  // }
  return (
    <div className='plant-list'>
      {plantData}
      <button>Get to garden page</button>
    </div>
  );
}
