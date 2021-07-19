import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/holi.jpeg'
              text='Travel Expert Recommended Fabulous Winter Holiday Destinations'
              label='Holiday spots'
              path='/holidays'
            />
            
            <CardItem
              src='images/adv1.jpeg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/adventure'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/mystery'
            />
            
            <CardItem
              src='images/safari.jpg'
              text='Evening Desert Safari With Live Bar,B,Q Buffet Dinner Free Camel Riding'
              label='Adrenaline'
              path='/adrenaline'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;