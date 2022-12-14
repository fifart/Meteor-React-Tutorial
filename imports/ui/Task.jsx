import React from 'react';

export const Task = ({task, onCheckboxClick, onDeleteClick}) => {
    return <li>
        <input
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
        <san>{task.text}</san>
        <button onClick={ () => onDeleteClick(task) }>&times;</button>
        </li>
};
 