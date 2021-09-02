<script>
  import { onMount, setContext } from "svelte";
  import { mapbox, keyApp } from "./mapbox.js";

  setContext(keyApp,{
    getMap: () => map
  });

  export let lat;
  export let lon;
  export let zoom;
  export let style;

  let container;
  let map;

  onMount(() => {
   
      map = new mapbox.Map({
        container,
        style,
        hash: true,
        center: [lon, lat],
		zoom,
		attributionControl: false
      });

      
});
</script>

<style>
 #map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
  }
</style>

<div id="map" bind:this={container}>
  {#if map}
    <slot />
  {/if}
</div>
