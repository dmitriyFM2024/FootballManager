export const setNextDate = (date) => {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'June',
		'July',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec',
	];
	const currentDate = new Date(date);

	currentDate.setDate(currentDate.getDate() + 1);

	return `${months[currentDate.getMonth()]} ${currentDate.getDate()} ${currentDate.getFullYear()}`;
};
