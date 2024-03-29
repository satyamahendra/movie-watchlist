import React from "react";

import { BsX } from "react-icons/bs";

const PosterModal = ({ poster, setTogglePosterModal }) => {
	return (
		<div
			onClick={() => setTogglePosterModal(false)}
			className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full gap-4 bg-gray-500 bg-opacity-50"
		>
			<button className="flex items-center justify-center w-12 h-12 text-2xl text-white bg-gray-300 rounded-full hover:bg-white hover:text-red-400">
				<BsX />
			</button>
			<img
				onClick={(e) => e.stopPropagation()}
				src={poster}
				alt=""
				className="rounded-xl"
			/>
		</div>
	);
};

export default PosterModal;
