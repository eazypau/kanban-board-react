import React from "react";
import AddTask from "./AddTaskButton";
import NewStickyNote from "./NewStickyNote";

export default function AddTaskControl({ changeNewTaskStatus, columnId, clickedColumnId, addNewTodoIntoColumn }) {
	const changeStatus = () => {
		changeNewTaskStatus(id);
	};
    const id = columnId
    const selectedColumnId = clickedColumnId
	if (id === selectedColumnId) {
		return <NewStickyNote changeNewTaskStatus={changeStatus} addNewTodoIntoColumn={addNewTodoIntoColumn} columnId={id} />;
	} else {
		return <AddTask changeNewTaskStatus={changeStatus} />;
	}
}
