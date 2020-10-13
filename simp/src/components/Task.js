import React from 'react';

const Task = (props) => (
    <div>
        <h1>{props.name}</h1>
        <h3>{props.status}</h3>
    </div>
);

export default Task;