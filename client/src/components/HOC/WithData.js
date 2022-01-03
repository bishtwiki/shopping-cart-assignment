import React from 'react';
import { useEffect, useState } from 'react';
export const HocWrapper = (Component,datasource) => {
  
  const Wrapper = (props) => {
   const [Banner, Setbanner] = useState([])
   useEffect(() => {
      fetch(datasource)
         .then(res => res.json())
         .then(json => Setbanner(json))
   }, [])

   function sortByProperty(property) {
      return function (a, b) {
         if (a[property] > b[property])
            return 1;
         else if (a[property] < b[property])
            return -1;
         return 0;
      }
   }
   const SortBanner = Banner.sort(sortByProperty('order'));
    
    return (
      <Component
        data={SortBanner}
        {...props}
      />
    );
  };

  return Wrapper;
}
