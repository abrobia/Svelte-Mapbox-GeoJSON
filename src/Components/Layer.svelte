<script>
    import { getContext } from "svelte";
    import { mapbox, keyApp } from "./mapbox.js";
  
    export let id;
    export let id1;
    export let id2;
    export let sourceName;
    export let sourceNameMultiPolygon;  
    export let sourceNameMultiLineString;
    export let sourceNameMultiPoint;
  
    const { getMap } = getContext(keyApp);
    const map = getMap();
  
    //---MULTIPOINTS---//

    map.on("load", () => {
      map.addLayer({
        id: id,
        type: "circle",
        source: sourceNameMultiPoint,
        paint: {
          "circle-radius": 6,
          "circle-color": '#B42222'
        },
      });
    });

    //Style point definit a datos.js
   /*  map.on("load", () => {
      map.addLayer({
        id: id,
        type: "symbol",
        source: sourceName,
        layout: {
          "icon-image": `{icon}`,
          "icon-allow-overlap": true,
        },
      });
    }); */

    //Style point propietat circle
    /* map.on("load", () => {
      map.addLayer({
        id: id,
        type: "circle",
        source: sourceName,
        paint: {
          "circle-radius": 6,
          "circle-color": '#B42222'
        },
      });
    }); */

    //Style point URL custom-markers
   /*  map.on("load", () => {
        // Add an image to use as a custom marker
        map.loadImage(
            'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
            (error, image) => {
                if (error) throw error;
                map.addImage('custom-marker', image);
        // Add a symbol layer from custom markers          
        map.addLayer({
            id: id,
            type: "symbol",
            source: sourceName,
            layout: {
            "icon-image": 'custom-marker',
            "icon-allow-overlap": true
            },
      });
    });
   }); */

   //---POLYLINES---//

    map.on("load", () => {
      map.addLayer({
        id: id,
        type: "line",
        source: sourceNameMultiLineString,
        layout: {
            "line-join": 'round',
            "line-cap": 'round'
        },  
        paint: {
          "line-color": '#888',
          "line-width": 2
        }
      });
    });

    //---POLYGONS---//
    
    /* map.on("load", () => {
      map.addLayer({
        id: id,
        type: "fill",
        source: sourceNameMultiPolygon,
        layout: {},  
        paint: {
          "fill-color": '#0080ff',
          "fill-opacity": 0.5
        }
      });
    }); */

  </script>