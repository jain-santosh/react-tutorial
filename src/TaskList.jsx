import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function TaskList({tasks}) {

    const theme = useContext(ThemeContext);

    return (
        <div 
            style={{
                background: theme === "light" ? "#eee" : "#333",
                color : theme === "light" ? "#333" : "#fff"
            }}>
            <ul>
                {tasks.map((task, index) => {
                    return <li key={index}> {task} </li>
                })}
            </ul>
        </div>
    );
}

export default TaskList;