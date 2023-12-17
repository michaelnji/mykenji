<script>
// @ts-nocheck
export let portableText;
$: ({ value } = portableText);
	$: ({ asset } = value);
	$: ({ _ref } = asset);
    
</script>
<img class=" rounded-2xl border-4 border-gray-200 dark:border-gray-700 w-full  transition duration-300 hover:shadow-lg" src={`https://cdn.sanity.io/images/5xp71fus/production/${_ref.split('image-')[1].split('-png')[0]}.png`} alt="">