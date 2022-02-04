import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
	const dummyTasks = [
		{ id: String(Math.random()), content: "task 1" },
		{ id: String(Math.random()), content: "task 2" },
		{ id: String(Math.random()), content: "task 3" },
		{
			id: String(Math.random()),
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati alias numquam molestias reiciendis architecto labore optio sed, nesciunt porro voluptatem vitae in maiores culpa, doloremque eos! Veritatis, esse totam!",
		},
		{
			id: String(Math.random()),
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati alias numquam molestias reiciendis architecto labore optio sed, nesciunt porro voluptatem vitae in maiores culpa, doloremque eos! Veritatis, esse totam!",
		},
	];
	const columnsList = {
		columnOne: {
			name: "Tasks",
			items: dummyTasks,
		},
		columnTwo: {
			name: "In Progress",
			items: [],
		},
		columnThree: {
			name: "On Hold",
			items: [],
		},
		columnFour: {
			name: "Completed",
			items: [],
		},
	};
	const [columns, setColumns] = useState(columnsList);

	const onDragEnd = (result, columns, setColumns) => {
		console.log(result);
		if (!result.destination) return;
		// extract source and destination from result
		const { source, destination } = result;
		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = columns[source.droppableId];
			const destColumn = columns[destination.droppableId];
			const sourceItems = [...sourceColumn.items];
			const destItems = [...destColumn.items];
			const [removed] = sourceItems.splice(source.index, 1);
			destItems.splice(destination.index, 0, removed)
			setColumns({
				// this is spread syntax to tell that the rest of the object remains the same
				...columns,
				[source.droppableId]:{
					...sourceColumn,
					items: sourceItems
				},
				[destination.droppableId]: {
					...destColumn,
					items: destItems
				}
			})
		} else {
			// reference to column's key
			const column = columns[source.droppableId];
			const copiedItems = [...column.items];
			// removed is equal to the item that is removed
			const [removed] = copiedItems.splice(source.index, 1);
			// switch the position of that item(removed)
			copiedItems.splice(destination.index, 0, removed);
			setColumns({
				...columns,
				[source.droppableId]: {
					...column,
					items: copiedItems,
				},
			});
		}
	};
	// const [columns, setColumns] = useState(columnsList);
	return (
		<div className="py-10 px-10 bg-green-200 h-screen">
			<h1 className="text-center text-5xl font-bold py-5 rounded-md bg-green-100 shadow">Task List</h1>
			<div className="mt-8 grid grid-cols-4 gap-x-5" style={{ height: "85%" }}>
				{/* id in Droppable and Draggable must be a string */}
				{/* cannot directly style Droppable and Draggable */}
				<DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
					{Object.entries(columns).map(([id, column]) => {
						return (
							<Droppable droppableId={id} key={id}>
								{(provided, snapshot) => {
									return (
										<div className="h-full statusColoumn overflow-hidden">
											<h2 className="statusText">{column.name}</h2>
											<div {...provided.droppableProps} ref={provided.innerRef} className="overflow-auto" style={{ height: "95%" }}>
												{/* <h2 className="statusText">{column.name}</h2> */}
												{column.items.map((item, index) => {
													return (
														<Draggable key={item.id} draggableId={item.id} index={index}>
															{(provided, snapshot) => {
																return (
																	<div
																		ref={provided.innerRef}
																		{...provided.draggableProps}
																		{...provided.dragHandleProps}
																		className="w-full h-36 mt-2 bg-yellow-200 rounded px-4 py-2 relative"
																	>
																		<p className="h-24 overflow-auto example">{item.content}</p>
																		<div className="absolute bottom-0 right-0 mr-2 mb-1">
																			<i className="bi bi-check-square mr-1 text-xl hover:text-green-500"></i>
																			<i className="bi bi-trash text-xl hover:text-red-600"></i>
																		</div>
																	</div>
																);
															}}
														</Draggable>
													);
												})}
											</div>
											{provided.placeholder}
										</div>
									);
								}}
							</Droppable>
						);
					})}
				</DragDropContext>
			</div>
		</div>
	);
}

export default App;
