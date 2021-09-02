<script>
  import { stateDrawer } from "../Utils/stores.js";
  import Modal from "./Modal.svelte";
  import TopAppBar, {
    Row,
    Section,
    Title,
    ShortFixedAdjust
  } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  let dense = false;
  let prominent = false;
  let variant = "fixed";
  let collapsed = false;
  let title = "Svelte-Mapbox-GeoJSON";
  let Adjust = ShortFixedAdjust;

  export let show = false;
  let modal_show = false;

  function changeDrawerState() {
    console.info("update", stateDrawer);

    //tateDrawer.update(n => n = !n);
    stateDrawer.set(function() {
      return true;
    });
  }

  function openInfoDialog() {
    openModalInfo = true;
    
  }
</script>

<style>
  #title { font-size: 20px;
      position: fixed;
      width: 100%;
      top: -6px;
      padding-bottom: 9px;
      justify-items: center;
      display: grid;
      color: #fff;
      }
  </style>

<Modal bind:show={modal_show} />
<div class="top-app-bar-container flexor">
  <TopAppBar variant="short" {dense} {prominent} bind:collapsed>
    <Row>
      <Section align="start" toolbar>
        <IconButton on:click={changeDrawerState} 
          class="material-icons" 
          style="z-index:1000">
          menu
        </IconButton>
        <h1 id ="title">{title}</h1>
      </Section>

      <Section align="end" toolbar>
        <IconButton on:click={() => {modal_show = true; show = false;}}
          class="btinfo material-icons"
          aria-label="Informació">
          info
        </IconButton>
      </Section>
    </Row>
  </TopAppBar>
  <div use:Adjust />
</div>
