<script>
 import "../node_modules/mapbox-gl/dist/mapbox-gl.css";
  import { onDestroy } from "svelte";
  import { stateDrawer } from "./Utils/stores.js";
  import TopBar from "./Panels/TopBar.svelte";
	import Map from "./Components/Map.svelte";
	import MapAttribution from "./Components/MapAttribution.svelte";
  import DrawerLeft from "./Panels/DrawerLeft.svelte";
  import Logo from "./Panels/Logo.svelte";
  

  let toggle = false;
  let openModalInfo;

  const unsubscribe = stateDrawer.subscribe(value => {
    //console.info($stateDrawer);
    //console.info(value);
    toggle = value;
  });
  function activate() {
    alert("hola");
  }
</script>

<style>

</style>

<div class="container">
 
  <TopBar bind:openModalInfo />
  <DrawerLeft />
  <Logo/>
  <Map
lat={41.732} 
lon={1.732} 
zoom={8}
style={"https://tilemaps.icgc.cat/tileserver/styles/water.json"}>
<MapAttribution/>
</Map>
</div>
