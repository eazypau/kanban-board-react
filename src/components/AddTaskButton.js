import React from "react";

export default function AddTask({ changeNewTaskStatus }) {
	const changeStatus = () => {
		changeNewTaskStatus();
	};
	return (
		<div>
			<button type="button" className="text-gray-500 hover:text-black cursor-pointer" onClick={changeStatus}>
				<i className="bi bi-plus-lg"></i> New Task
			</button>
		</div>
	);
}
