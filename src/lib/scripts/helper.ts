
import toast from 'svelte-french-toast';

function addToast(message:string, type:string, duration:number = 4500) {
	const config = {
		duration,

		style: 'border-radius: 10px; font-size: 12px !important; background: #fff; color: #111;'
	};
	if (type === 'success') {
		toast.success(message, config);
	} else if (type === 'error') {
		toast.error(message, config);
	} else {
		toast(message, config);
	}
}

export default addToast;
