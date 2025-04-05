import { useState } from 'react'


const Banlist = ({list, onRemove}) => {

    return (
        <div style={{ border: '1px solid gray', padding: '1em', marginTop: '1em' }}>
      <h3>Ban List</h3>
      {list.length === 0 && <p>No banned items yet!</p>}
      {list.map(value => (
        <button key={value} onClick={() => onRemove(value)}>
          {value} (Click to Remove)
        </button>
      ))}
    </div>
    )
}

export default Banlist;