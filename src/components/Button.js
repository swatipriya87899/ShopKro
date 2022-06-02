import React from 'react';
import './Button.css';
import { filterProduct } from '../redux/actions/productActions';
import { useDispatch } from 'react-redux';

const Button = (props) => {
  const dispatch = useDispatch();
  return (
    <div className='button' style={props.button_styling}  onClick={()=>dispatch(filterProduct(props.category))}>{props.text}</div>
  )
}

export default Button