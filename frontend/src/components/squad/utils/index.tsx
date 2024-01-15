export const squadService: Object = {
	tableHead: [
		{ name: 'AP', fullName: 'Active position', isSorted: true },
		{ name: 'Info' },
		{ name: 'Player Name', isSorted: true, sortBy: 'name' },
		{ name: 'POS', fullName: 'Position', isSorted: true, sortBy: 'position' },
		{ name: 'SHP', fullName: 'Match sharpness' },
		{ name: 'Morale' },
		{ name: 'PTH', fullName: 'Playing time happiness' },
		{ name: 'Last 5 games' },
		{ name: 'APPS', fullName: 'Appearances' },
		{ name: 'Goals' },
		{ name: 'Assists' },
		{ name: 'AV RAT', fullName: 'Average rating per season' },
	],
	sortHandler: (column: object, dataService: object) => {
		const { dataSquad, setDataSquad, sortDirection, setSortDirection } = dataService;
		const alphabetOrder = ['Player Name', 'POS'];

		setSortDirection(!sortDirection);

		if (alphabetOrder.includes(column.name)) {
			sortDirection
				? setDataSquad(
						[...dataSquad].sort((a: any, b: any) =>
							a[column.sortBy].localeCompare(b[column.sortBy]),
						),
				  )
				: setDataSquad([...dataSquad].reverse());
		}
	},
};
