import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const NewTask = ({ onAdd }) => {
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      onAdd(event.target.value);

      event.target.value = '';
    }
  };

  return (
    <div className="NewTask">
      <input type="text" className="pure-input-1" placeholder="Type a new task" onKeyDown={handleKeyDown} />
    </div>
  );
};

NewTask.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default NewTask;