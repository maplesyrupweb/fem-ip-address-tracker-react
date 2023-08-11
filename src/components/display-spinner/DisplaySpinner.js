import React from 'react';


import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';
  

import styles from './DisplaySpinner.module.css';

/*
const DisplaySpinner = () => {
  return <FontAwesomeIcon icon={faCircleNotch} className={styles.spinner} />;
};
*/

const DisplaySpinner = () => {
  return <Spinner animation="border" variant="secondary"className={styles.spinner} />
  
  ;
};

export default DisplaySpinner;
<i class="fa-solid fa-circle-notch"></i>