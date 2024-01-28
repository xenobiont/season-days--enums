enum Season {
	SPRING = 'Spring',
	SUMMER = 'Summer',
	AUTUMN = 'Autumn',
	WINTER = 'Winter',
}

const seasonDays = {
	[Season.SPRING]: 92,
	[Season.SUMMER]: 93,
	[Season.AUTUMN]: 90,
	[Season.WINTER]: 89,
};

function calculateTotalDaysInSeason(season: Season): number {
	return seasonDays[season] ?? 0;
}

// Test cases
// console.log(calculateTotalDaysInSeason('Invalid')); // Expected output: 0

for (const [key, value] of Object.entries(Season)) {
	console.log(key, value);
	console.log(calculateTotalDaysInSeason(value));
}
