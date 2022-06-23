import React, {useRef} from 'react';
import './inputField.css';

type Props ={
    taskname: string;
    setTaskname: React.Dispatch<React.SetStateAction<string>>;
    addTask: (e: React.FormEvent) => void
};

const InputField = ({taskname, setTaskname, addTask}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    return (
        <form className="input-form" onSubmit={e => {
            addTask(e);
            inputRef.current?.blur();
        }}>
            <label htmlFor="taskname">Task Name</label><br/>
            <input 
                type="text" 
                value={taskname}
                ref={inputRef}
                onChange={e => setTaskname(e.target.value)}
                placeholder="Enter a task name" 
                autoComplete="off"
                id="taskname" />
            <button type="submit" className="go-btn">Go</button> 
        </form>
    );
}

export default InputField;