import React from 'react';
import Task from './Task';

const DayView = (props) => {
    const tasks = [
        {name: "Chores", status: "Incomplete"},
        {name: "Homework", status: "Complete"},
        {name: "Test 9AM", status: "Complete"},
        {name: "Do 448 HW", status: "Incomplete"},
        {name: "Eat lunch", status: "Complete"}
    ];

    

    return(
        <section className="dayview">
            
        <h2>Tasks for </h2>
            
            {tasks.map(task => (
                <Task name={task.name} status={task.status} />
            ))}
        </section>
    );
    
};

export default DayView;