import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PlantCardNum({
  commonName,
  habit,
  duration,
  image,
  plantId,
}) {
  //create plant Id when making all the regular plant cards
  const dispatch = useDispatch();
  const plant = useSelector((state) => state.plant);
  const incrementPlant = (plantId) => dispatch(incrementPlant(plantId));
  const decrementPlant = (plantId) => dispatch(decrementPlant(plantId));

  function handleAdd(e) {
    // e.preventDefault(); // what do we pass in as e?
    incrementPlant();
  }

  function handleMinus(e) {
    e.preventDefault();
    decrementPlant();
  }

  return (
    <div className="plantcard">
      <div>
        <img src={image} alt="happy little flowers" />
        <p className="plantName">Name: {commonName}</p>
        {/* <p className='habit'>Plant-Type: {habit}</p>
        <p className='duration'>Duration: {duration}</p> */}
      </div>
      <div>
        <button className="add" onClick={handleAdd}>
          +
        </button>
        <button className="minus" onClick={handleMinus}>
          -
        </button>
      </div>
    </div>
  );
}
