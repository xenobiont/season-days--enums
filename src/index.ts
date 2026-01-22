enum Season {
	SPRING,
	SUMMER,
	AUTUMN,
	WINTER,
}

type EnumObject<T extends PropertyKey, V = string> = Record<T, V>;

type SeasonConfig = {
	label: string;
	days: number;
};

const seasonsConfig: EnumObject<Season, SeasonConfig> = {
	[Season.SPRING]: {
		label: 'Spring',
		days: 92,
	},
	[Season.SUMMER]: {
		label: 'Summer',
		days: 93,
	},
	[Season.AUTUMN]: {
		label: 'Autumn',
		days: 90,
	},
	[Season.WINTER]: {
		label: 'Winter',
		days: 89,
	},
} as const;

for (const [key, value] of Object.entries(seasonsConfig)) {
	console.log('id', key);
	console.log('label', value.label);
	console.log('days', value.days);
}
