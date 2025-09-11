import { useEffect, useRef, useState } from "react";
import styles from "./cards.module.css";

export default function CardsTasks({ tasks, onStatusChange, onDelete, onExport }) {

    // Color management
    const colors = ["coral", "turquoise", "sunny", "mint"];

    // Menu '⁝' management
    const [openMenu, setOpenMenu] = useState(null);
    function toggleMenu(id) {
        setOpenMenu(openMenu === id ? null : id);
    }

    // Close menu '⁝'
    const menuRef = useRef({});
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    return (
        <>
            {tasks.map((task, index) => {
                const colorClass = styles[colors[index % colors.length]];

                return (
                    <div key={task.userID} className={`${styles.task_card} ${colorClass}`}>
                        <div className={styles.card_header}>
                            <h5>{task.title}</h5>
                            <button
                                className={styles.export_btn}
                                onClick={() => toggleMenu(task.userID)}
                                title="Export task"
                            >
                                ⁝
                            </button>
                        </div>
                        {openMenu === task.userID && (
                            <div className={styles.dropdown_menu} ref={menuRef}>
                                <button onClick={() => onStatusChange(task.userID, "active")}>Set Active</button>
                                <button onClick={() => onStatusChange(task.userID, "completed")}>Set Completed</button>
                                <button onClick={() => onDelete(task.userID)}>Delete</button>
                                <button onClick={() => onExport(task)}>Export</button>
                            </div>
                        )}
                        <p><strong>Theme:</strong> {task.theme}</p>
                        <p><strong>Description:</strong> {task.desc}</p>
                        <p><strong>Date:</strong> {task.date}</p>
                        <p><strong>Priority:</strong> {task.prior || "medium"}</p>
                    </div>
                )
            })}
        </>
    )
}