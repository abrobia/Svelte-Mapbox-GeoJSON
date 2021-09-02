<script>
    import { getContext } from "svelte";
    import { mapbox, keyApp } from "./mapbox.js";

    export let datos;
    export let sourceName;

    export let datos_MultiPoint;
    export let sourceNameMultiPoint;

    export let datos_MultiLineString;
    export let sourceNameMultiLineString;

    export let datos_MultiPolygon;
    export let sourceNameMultiPolygon;

    const { getMap } = getContext(keyApp);
    const map = getMap();

    /* map.on("load", () => {
      map.addSource(sourceName, {
        type: "geojson",
        data: datos,
      });
    });  */

    map.on("load", () => {
      map.addSource(sourceNameMultiPoint, {
        type: "geojson",
        data: datos_MultiPoint,
      });
     }); 

    map.on("load", () => {
      map.addSource(sourceNameMultiLineString, {
        type: "geojson",
        data: datos_MultiLineString,
      });
    });

    /* map.on("load", () => {
      map.addSource(sourceNameMultiPolygon, {
        type: "geojson",
        data: datos_MultiPolygon,
      });
    }); */
  </script>