import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './DisplaySpinner.module.css';

const DisplaySpinner = () => {
  return <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />;
};

export default DisplaySpinner;
