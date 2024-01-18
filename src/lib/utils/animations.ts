// @ts-nocheck
export const animateCSS = (element: string, animation: string, prefix = 'animate__') =>
	// We create a Promise and return it
	new Promise((resolve, reject) => {
		const animationName = `${prefix}${animation}`;
		const node: HTMLElement | null = document.querySelector(element);

		node.classList.add(`${prefix}animated`, animationName);

		function handleAnimationEnd(event: Event) {
			event.stopPropagation();

			node.classList.remove(`${prefix}animated`, animationName);
			resolve('Animation ended');
		}

		node.addEventListener('animationend', handleAnimationEnd, { once: true });
	});

export async function exitElement(el: string,el2:string,el3:string, outro: string, intro:string) {
	let element = document.querySelector(el);
	let element2 = document.querySelector(el2);
	let element3 = document.querySelector(el3);
    
	await animateCSS(el, outro);
	element.classList.remove('z-50');
	element.classList.add('z-0');
	element2.classList.remove('z-10');
    element2.classList.add('z-50');
	element3.classList.add('z-0');
    element3.classList.add('z-10');
    await animateCSS(el, intro);
	await animateCSS(`${el2} .icon-a`, 'jello');
	
	
    
}
