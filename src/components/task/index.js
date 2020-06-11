import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

import './styles.scss';

const Task = ({ text, onRemoveTask }) => {
  const [check, setCheck] = useState(false);

  return (
    <div className="Task">
      <label for="default-remember">
        <input type="checkbox" id="default-remember" onClick={() => setCheck(!check)} />{text}
      </label>
      <div class="Task__delete">
        <Button onClick={onRemoveTask} text="Delete" className="Task__delete-btn" />
      </div>
    </div>
  );
};

Task.propTypes = {
  text: PropTypes.string.isRequired
};

export default Task;