import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export const conditionColorGenerator = (condition: number): string => {
	if (condition > 8) {
		return '#33ff33';
	}

	if (condition >= 6 && condition <= 8) {
		return '#80ff80';
	}

	if (condition >= 4 && condition <= 6) {
		return '#ffff33';
	}

	if (condition >= 2 && condition <= 4) {
		return '#ffa31a';
	}

	if (condition <= 2) {
		return '#e65c00';
	}
};

export const conditionIconGenerator = (condition: number) => {
	if (condition >= 9) {
		return <InsertEmoticonIcon />;
	}

	if (condition >= 8) {
		return <MoodIcon />;
	}

	if (condition >= 7) {
		return <SentimentSatisfiedIcon />;
	}

	if (condition >= 5) {
		return <SentimentDissatisfiedIcon />;
	}

	if (condition >= 3.5) {
		return <SentimentVeryDissatisfiedIcon />;
	}

	if (condition <= 3.4) {
		return <MoodBadIcon />;
	}
};
