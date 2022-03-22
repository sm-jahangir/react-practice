import React from 'react'
import { multiply } from '../../utilities/calculate';

function Shoes() {
    const first = 85;
    const second = 85;
    const total = multiply(first, second);
  return (
    <div>
        <p>{total}</p>
    </div>
  )
}

export default Shoes