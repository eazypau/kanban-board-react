import React from "react";
import AddTask from "./AddTaskButton";
import NewStickyNote from "./NewStickyNote";

export default function AddTaskControl({ isAdding, changeNewTaskStatus, columnId, clickedColumnId, addNewTodoIntoColumn }) {
	const changeStatus = () => {
		changeNewTaskStatus(id);
	};
	const isAddStatus = isAdding;
    const id = columnId
    const selectedColumnId = clickedColumnId
	if (isAddStatus && id === selectedColumnId) {
		return <NewStickyNote changeNewTaskStatus={changeStatus} addNewTodoIntoColumn={addNewTodoIntoColumn} columnId={id} />;
	} else {
		return <AddTask changeNewTaskStatus={changeStatus} />;
	}
}
