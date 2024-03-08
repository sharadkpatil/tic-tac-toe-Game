import React from "react";
import { useState } from "react";

const GameFC = ({value, eventP}) => {
	return <button onClick={eventP}>{value}</button>;
};

export default GameFC;
