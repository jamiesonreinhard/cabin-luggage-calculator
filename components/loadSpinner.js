import React from 'react';
import spinner from '../styles/Spinner.module.scss'

const LoadSpinner = () => (
  <div className={spinner.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
);

export default LoadSpinner;