<script>
    import { getContext } from 'svelte';
    import { mapbox, keyApp } from "./mapbox.js";

	const { getMap } = getContext(keyApp);
	const map = getMap();

 map.addControl(new mapbox.AttributionControl({ compact: true }));
</script>