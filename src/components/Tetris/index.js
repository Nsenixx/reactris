import React, { useState } from "react";

import StartPage from "src/components/StartPage";
import Game from "src/components/Game";

const Tetris = () => {
	const [runing, setRuning] = useState(false);
	return runing ? (
		<Game stopClick={() => setRuning(false)} />
	) : (
		<StartPage startClick={() => setRuning(true)} />
	);
};

export default Tetris;
