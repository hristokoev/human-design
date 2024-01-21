function getLineForConnection(fromIndex, toIndex) {
	const rules = {
			'0-1': 0,
			'1-2': 1,
			'2-5': 2,
			'2-6': 3,
			'2-7': 4,
			'3-4': 5,
			'5-8': 6,
			'6-7': 7,
			'8-7': 8
	};

	const key = `${fromIndex}-${toIndex}`;
	return rules[key] !== undefined ? rules[key] : null;
}

export default function generateRandomPathWithLines(startIndex, centers) {
	let currentPath = [startIndex];
	let currentIndex = startIndex;
	let linesUsed = [];

	while (true) {
			const currentCenter = centers[currentIndex];
			const possibleConnections = currentCenter.connectsTo.filter(targetIndex => 
					centers[targetIndex].acceptsFrom.includes(currentIndex)
			);

			if (possibleConnections.length === 0) {
					break; // No more connections possible
			}

			const randomConnectionIndex = Math.floor(Math.random() * possibleConnections.length);
			const nextIndex = possibleConnections[randomConnectionIndex];

			// Prevent loops by checking if the next index is already in the path
			if (currentPath.includes(nextIndex)) {
					break;
			}

			const line = getLineForConnection(currentIndex, nextIndex);
			if (line !== null) {
					linesUsed.push(line);
			}

			currentPath.push(nextIndex);
			currentIndex = nextIndex;
	}

	return { path: currentPath, lines: linesUsed };
	
}
