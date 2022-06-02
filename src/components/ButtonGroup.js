import React from 'react';
import Button from './Button';

const ButtonGroup = (props) => {
  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"row"}}>
        {
            props.category.map((item)=>{
                return (
                    <Button text={item.name} category={item.category} key={item.name}></Button>
            )
            })
        }
    </div>
  )
}

export default ButtonGroup