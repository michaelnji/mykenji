import { getOrSetItem } from '$lib/scripts/dbManager';
import { writable } from 'svelte/store';
// theme store for dark mode
const theme: any = writable('dark');
export default theme;
