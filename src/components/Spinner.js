import React from 'react';
import PropTypes from 'prop-types';
import loader from '../assets/images/loader.gif';
import './Spinner.css';

export const Spinner = ({ status }) => (
  <div className='Spinner'>
    {
      status === 'PENDING' ?
        <img
          src={loader}
          className='Spinner-gif'
          alt="Loading..."
        />
      : <span></span>
    }
  </div>
);
Spinner.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Spinner;
