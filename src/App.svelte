<script>
 import "../node_modules/mapbox-gl/dist/mapbox-gl.css";
  import { onDestroy } from "svelte";
  import { stateDrawer } from "./Utils/stores.js";
  import TopBar from "./Panels/TopBar.svelte";
	import Map from "./Components/Map.svelte";
	import MapAttribution from "./Components/MapAttribution.svelte";
  import DrawerLeft from "./Panels/DrawerLeft.svelte";
  import Logo from "./Panels/Logo.svelte";

  import Source from "./Components/Source.svelte";
  import Layer from "./Components/Layer.svelte";
  import Popup from "./Components/Popup.svelte";
  import datos from "./Data/datos.js";
  import datos_MultiPoint from "./Data/datos_MultiPoint.js";
  import datos_MultiLineString from "./Data/datos_MultiLineString.js";
  import datos_MultiPolygon from "./Data/datos_MultiPolygon.js";
  
  let sourceName = "places";
  let sourceNameMultiPoint = "points";
  let sourceNameMultiLineString = "lines";
  let sourceNameMultiPolygon = "polygons";
  

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
  <Map lat={41.732} lon={1.732} zoom={8} style={"https://geoserveis.icgc.cat/contextmaps/icgc.json"}>
    
    <!-- <Source sourceName={sourceName} datos={datos} />
    <Layer sourceName={sourceName} id={sourceName} />
    <Popup {sourceName} /> -->

    <Source sourceNameMultiPoint={sourceNameMultiPoint} datos_MultiPoint={datos_MultiPoint} />
    <Layer sourceNameMultiPoint={sourceNameMultiPoint} id={sourceNameMultiPoint} />
    <Popup sourceNameMultiPoint={sourceNameMultiPoint} />

    <Source sourceNameMultiLineString={sourceNameMultiLineString} datos_MultiLineString={datos_MultiLineString} />
    <Layer sourceNameMultiLineString={sourceNameMultiLineString} id={sourceNameMultiLineString}/>

    <!-- <Source sourceNameMultiPolygon={sourceNameMultiPolygon} data={datos_MultiPolygon} />
    <Layer sourceNameMultiPolygon={sourceNameMultiPolygon} id={sourceNameMultiPolygon} /> -->

   <!--  segueixo exemple samtiago:-->
    <!-- <Source sourceName={sourceNameMultiPoint} datos_MultiPoint={datos_MultiPoint} />
    <Layer sourceName={sourceNameMultiPoint} id={sourceNameMultiPoint} />

    <Source sourceName={sourceNameMultiLineString} datos_MultiLineString={datos_MultiLineString} />
    <Layer sourceName={sourceNameMultiLineString} id={sourceNameMultiLineString} /> -->
    
    <MapAttribution/>
  </Map>
</div>
