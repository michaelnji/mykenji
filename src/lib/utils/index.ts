import speakingurl from 'speakingurl';
const filter = (ast: any[], match: { (node: any): boolean; (arg0: any): any }) =>
	ast.reduce((acc, node) => {
		if (match(node)) acc.push(node);
		if (node.children) acc.push(...filter(node.children, match));
		return acc;
	}, []);

export const findHeadings = (ast: any[]) =>
	filter(ast, (node) => /h\d/.test(node.style)).map((node: { children: any[] }) => {
		const text = getChildrenText(node);
		const slug = speakingurl(text,'-');
		
		return { ...node, text, slug };
	});

const get = (object: { subheadings: never[] }, path: any[]) =>
	path.reduce((prev, curr) => prev[curr], object);

const getObjectPath = (path: any[]) =>
	path.length === 0 ? path : ['subheadings'].concat(path.join('.subheadings.').split('.'));
export const parseOutline = (ast: any[]) => {
	const outline = { subheadings: [] };
	const headings = findHeadings(ast);
	const path: any[] = [];
	let lastLevel = 0;

	headings.forEach((heading: { style: string | any[]; subheadings: never[] }) => {
		const level = Number(heading.style.slice(1));
		heading.subheadings = [];

		if (level < lastLevel) for (let i = lastLevel; i >= level; i--) path.pop();
		else if (level === lastLevel) path.pop();

		const prop = get(outline, getObjectPath(path));
		prop.subheadings.push(heading);
		path.push(prop.subheadings.length - 1);
		lastLevel = level;
	});
	return outline.subheadings;
};

const getChildrenText = (props: { children: any[] }) =>
	props.children.map((node) => (typeof node === 'string' ? node : node.text || '')).join('');