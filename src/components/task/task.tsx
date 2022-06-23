import React from 'react';
import TaskModel from '../../models/taskModel';
import './task.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';


const Task = (props: TaskModel) => {
    return (
        <div className="task">
            <p className={props.isCompleted ? 'done' : 'notDone'}>Task : {props.todo}</p>
            <section className="button-section">
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete />
                </span>
                <span className="icon">
                    <MdDone />
                </span>
            </section>
        </div>

    );
}

export default Task;