import React from "react";

export default function NewStickyNote({ changeNewTaskStatus }) {
	const changeStatus = () => {
		changeNewTaskStatus();
	};
	return (
		<div className="w-full h-36 mt-2 bg-yellow-200 rounded px-4 py-2 relative">
			<textarea className="bg-yellow-50 w-full h-4/5 resize-none p-1"></textarea>
			<div className="absolute bottom-0 right-0 mr-4 mb-1">
				<i className="bi bi-check-circle text-xl mr-2 cursor-pointer hover:opacity-60"></i>
				<i onClick={changeStatus} className="bi bi-x-circle text-xl cursor-pointer hover:opacity-60"></i>
			</div>
		</div>
	);
}
