import { useState } from 'react'

    const Discovery = ({ item, onBan }) => {
        if (!item) {
        return <p>Click "Discover!" to get started!</p>;
        }
    
        // Extract breed info when available
        const breedInfo = item.breeds && item.breeds.length > 0 ? item.breeds[0] : null;
    
        return (
        <div style={{ border: '1px solid black', padding: '1em', marginTop: '1em' }}>
            <h2>{breedInfo ? breedInfo.name : 'Unknown Cat'}</h2>
            <img
            src={item.url}
            alt={breedInfo ? breedInfo.name : 'Cat image'}
            style={{ width: '200px' }}
            />
            {/* Make attributes clickable*/}
            <p onClick={() => onBan(breedInfo ? breedInfo.name : null)} style={{ cursor: 'pointer' }}>
            Breed: {breedInfo ? breedInfo.name : 'Unknown'}
            </p>
            <p onClick={() => onBan(breedInfo ? breedInfo.origin : null)} style={{ cursor: 'pointer' }}>
            Origin: {breedInfo ? breedInfo.origin : 'Unknown'}
            </p>
            <p onClick={() => onBan(breedInfo ? breedInfo.weight.metric : null)} style={{ cursor: 'pointer' }}>
            Weight: {breedInfo ? breedInfo.weight.metric : 'Unknown'}
            </p>
            <p onClick={() => onBan(breedInfo ? breedInfo.life_span : null)} style={{ cursor: 'pointer' }}>
            Lifespan: {breedInfo ? breedInfo.life_span : 'Unknown'}
            </p>
        </div>
        )
    }
  

export default Discovery;