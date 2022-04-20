import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { createCard, flipCard, check } from "../redux/cardSlice";
import React from 'react'

const CardList = () => {
  const items = useSelector((state) => state.cards.items);
  const cards = useSelector((state) => state.cards.list);
  const opened = useSelector((state) => state.cards.opened);
  const dispatch = useDispatch();
  const [shuffle, setShuffle] = useState([...items].sort((a, b) => 0.5 - Math.random()));

  useEffect(() => {
    if (cards.length < 16) {
      setShuffle([...items].sort((a, b) => 0.5 - Math.random()));
      shuffle.map((card) => dispatch(
        createCard({
          id: nanoid(),
          name: card,
          opened: false,
          completed: false,
      })));
    }
  }, [cards]);

  const handleClick = (card) => {
    if (card.completed === true) return;
    if (opened.length === 2) return false;
    if (card.opened === true) {
      dispatch(flipCard(card));
      return;
    }
    dispatch(flipCard(card));
  }

  if (opened.length === 2) {
    setTimeout(() => dispatch(check([opened[0], opened[1]])), 500);
  }
  return cards ? (
    <div className="container mx-auto pb-1">
      <div className="grid grid-cols-6 md:grid-cols-6 gap-3">
        {
          cards.map((card, index) =>{
            return (
              <div key={index}
              className={`bg-slate-900 hover:bg-slate rounded-xl flex h-28 card m-auto relative ${ card.opened && "opened"} ${card.completed ? " completed" : ""}`}
              onClick={() => handleClick(card)}>
                <div
                  className="front bg-slate-800 hover:bg-slate-900 rounded-xl text-gray-500 text-5xl cursor-pointer">
                  ?
                </div>
                <div className="back">
                  <img src={require(`../assets/${card.name}.png`)} alt={card.name}
                  className="w-3/5 md:w-1/2 lg:w-2/5 m-auto"/>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  ) : ""
    
}

export default CardList