import React from "react";

export default function StickNote() {
	return (
		<div className="w-full h-36 mt-2 bg-yellow-200 rounded p-2 relative">
			<p>Sample text</p>
			<div className="absolute bottom-0 right-0 mr-2 mb-1">
				<i class="bi bi-check-square mr-1 text-xl text-green-500"></i>
				<i class="bi bi-trash text-xl text-red-600"></i>
			</div>
		</div>
	);
}
