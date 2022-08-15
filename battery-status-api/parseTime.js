export const parseTime = (seconds) => {
	const minutes = seconds / 60;

	const hours = minutes / 60;

	const exactHours = parseInt(hours);
	const exactMinutes = Math.round((hours % 1) * 60);

	const hoursText = exactHours ? `${exactHours}h` : "";
	const minutesText = exactMinutes ? `${exactMinutes}min` : "";

	return `${hoursText} ${minutesText}`;
};
