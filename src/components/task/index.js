import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Task = ({ text, onRemoveTask }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="Task">
      <div className={`Task__content Task__content${checked ? '--done' : ''}`} onClick={() => setChecked(!checked)}>
        {text}
      </div>
      <div className="Task__delete" onClick={onRemoveTask}>x</div>
    </div>
  );
};

Task.propTypes = {
  text: PropTypes.string.isRequired
};

export default Task;