import { addDays, format, formatDistanceToNow, parseISO } from "date-fns";
import { isString } from 'mathjs';

export const getReadableDate = (date: Date | number) => {
	const formatConfig = ' do MMM yyyy';
	return isString(date) ? format(parseISO(date), formatConfig) : format(date, formatConfig);
};