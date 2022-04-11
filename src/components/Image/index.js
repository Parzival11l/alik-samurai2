import React from 'react'

function Image({src,...props}) {
  return (
    <img
      {...props}
      src={src}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = "https://images.genius.com/7bba7fb33da7e8a14012a4ec6edd734a.1000x1000x1.jpg";
      }}
    />
  )
}
export default Image;
