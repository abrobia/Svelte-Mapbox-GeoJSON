 <script>
  import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
  import Button, {Label} from '@smui/button';
  import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
  import H6 from '@smui/common/H6.svelte';
  import { createEventDispatcher } from 'svelte';
  import { stateDrawer } from '../Utils/stores.js';
  const dispatch = createEventDispatcher();
  let clicked = 'nothing yet';
  let myDrawer;
  let myDrawerOpen = false;
  let active = 'Gray Kittens';
  let myDrawer2;
  export let myDrawer2Open = false;
  let active2 = 'Inbox';
  function setActive(value) {
    active = value;
    myDrawerOpen = false;
  }
  function setActive2(value) {
    active2 = value;
    myDrawer2Open = false;
    console.info(myDrawer2Open);
  }


 const unsubscribe = stateDrawer.subscribe(value => {
		myDrawer2Open = value;
	});


</script>

<style>

</style>
 
 <div class="drawer-container">
      <Drawer variant="modal" bind:this={myDrawer2} bind:open={myDrawer2Open}>
        <Header>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Header>
        <Content>
          <List>
            <Item href="javascript:void(0)" on:click={() => setActive2('Inbox')} activated={active2 === 'Inbox'}>
              <Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
              <Text>Map</Text>
            </Item>

            <Separator nav />
            <Subheader component={H6}>Layers</Subheader>
            <Item href="javascript:void(0)" on:click={() => setActive2('Family')} activated={active2 === 'Family'}>
              <Graphic class="material-icons" aria-hidden="true">done_outline</Graphic>
              <Text>Buildings</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Friends')} activated={active2 === 'Friends'}>
              <Graphic class="material-icons" aria-hidden="true">done_outline</Graphic>
              <Text>Networks</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Work')} activated={active2 === 'Work'}>
              <Graphic class="material-icons" aria-hidden="true">done_outline</Graphic>
              <Text>Rivers</Text>
            </Item>
          </List>
        </Content>
      </Drawer>

      <Scrim />
     
    </div>
 
