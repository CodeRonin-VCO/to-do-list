import { useEffect, useState } from "react";
import styles from "./home.page.module.css";
import CardsTasks from "./components/cards.jsx";

export default function MainHomePage() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    // Get from localStorage
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    // Filter tasks
    const filteredTasks = tasks.filter(task => {
        if (filter === "all") return true;
        return task.status === filter;
    });

    // Status management
    function updateStatus(id, newStatus) {
        const updated = tasks.map(task =>
            task.userID === id ? { ...task, status: newStatus } : task
        );
        setTasks(updated);
        localStorage.setItem("tasks", JSON.stringify(updated));
    }

    // Delete managemet
    function deleteTask(id) {
        const updated = tasks.filter(task => task.userID !== id);
        setTasks(updated);
        localStorage.setItem("tasks", JSON.stringify(updated));
    }

    // Export management
    function exportTask(task) {
        const blob = new Blob([JSON.stringify(task, null, 2)], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `task-${task.userID}.json`;
        link.click();

        URL.revokeObjectURL(url);
    }

    return (
        <main className={styles.main}>
            <aside className={styles.lateral_menu}>
                <h4 className={styles.title_sm}>Filter tasks :</h4>
                <div className={styles.btn_container}>
                    <button className={`${styles.btn} ${filter === "all" ? styles.active : ""}`} onClick={() => setFilter("all")}                    >
                        All tasks
                    </button>
                    <button className={`${styles.btn} ${filter === "active" ? styles.active : ""}`} onClick={() => setFilter("active")}                    >
                        Active
                    </button>
                    <button className={`${styles.btn} ${filter === "completed" ? styles.active : ""}`} onClick={() => setFilter("completed")}                    >
                        Completed
                    </button>
                </div>
            </aside>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2>Here is all my content</h2>
                    <div className={styles.task_list}>
                        <CardsTasks
                            tasks={filteredTasks}
                            onStatusChange={updateStatus}
                            onDelete={deleteTask}
                            onExport={exportTask}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}