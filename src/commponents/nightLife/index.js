import React from 'react';
import './nightlife.css';
import { nightLife } from '../../data/nightlife';
import Collection from '../common/collection';
import Filters from '../common/filter';
import ExploreSection from '../common/exploreSection';

const collectionList = [
  {
    id:1,
    title:"12 Thrilling Live Cricket Screenings",
    cover:"https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680161022.png",
    places:"15 places",
  },
  {
    id:2,
    title:"11 Romantic Dining Places",
    cover:"https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
    places:"13 places",
  },
  {
    id:3,
    title:"10 Newly Opened Restaurants",
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg",
    places:"9 places",
  },
  {
    id:4,
    title:"8 Places for Iftari Meals",
    cover:"https://b.zmtcdn.com/data/collections/14236dac5ff419ea77e0ff52904a9d0a_1679657498.jpg",
    places:"8 places",
  },
  {
    id:5,
    title:"10 Picturesque Cafes",
    cover:"	https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1674826835.jpg",
    places:"9 places",
  },
  {
    id:6,
    title:"22 Serene Rooftop Places",
    cover:"	https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
    places:"23 places",
  },
  {
    id:7,
    title:"10 Trending Restaurants ",
    cover:"	https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
    places:"10 places",
  },
  {
    id:8,
    title:"22 Finest Microbreweries",
    cover:" https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
    places:"22 places",
  },
];

const nightFilters=[
  {
    id:1,
    title:"Filters",
  },
  {
    id:2,
    title:"Rating:4.0+",
  },
  {
    id:3,
    title:"Safe and Higenic",
  },
  {
    id:4,
    title:"Pure Veg",
  },
  {
    id:5,
    title:"Delivery Time",
  },
  {
    id:6,
    title:"Great Offers",
  }
];

const nightList = nightLife;

const NightLife = () => {
  return (
    <div>
    <Collection list={collectionList}/>
    <div className='max-width'>
      <Filters filterList={nightFilters}/>
    </div>
    <ExploreSection list={nightList} collectionName="Nightlife Restaurants in Kalasipalya, Bangalore, Karnataka"/>
  </div>
  )
}

export default NightLife