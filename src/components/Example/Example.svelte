<Button on:click={() => alert('Clicked!')}>Just a Button</Button>
<br />
<Button variant="raised"><Label>Raised Button, Using a Label</Label></Button>
<br />
<Button some-arbitrary-prop="placed on the actual button">Button</Button>
<br />

<Fab on:click={() => alert('Clicked!')} extended>
    <Icon class="material-icons" style="margin-right: 12px;">favorite</Icon>
    <Label>Extended FAB</Label>
</Fab>
<br />

<Textfield
        bind:value={superText}
        label="Super Text"
        input$aria-controls="super-helper"
        input$aria-describedby="super-helper"
/>
<HelperText id="super-helper">What you put in this box will become super!</HelperText>

<style lang="scss">
    @import "./Example.scss";
</style>
<script>
    import Button from '@smui/button';
    import Fab from '@smui/fab';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import { Icon } from '@smui/common';
    import {Label } from '@smui/common';

    let superText = '';
</script>