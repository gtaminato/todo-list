import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Task = ({ text }) => {
  const [check, setCheck] = useState(false);

  return (
    <div className="Task">
      <label for="default-remember">
        <input type="checkbox" id="default-remember" onClick={() => setCheck(!check)} />{text}
      </label>
    </div>
  );
};

Task.propTypes = {
  text: PropTypes.string.isRequired
};

export default Task;