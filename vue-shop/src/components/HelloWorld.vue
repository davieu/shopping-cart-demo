<template>
  <div class="hello">
    <p>Apple</p><b-button variant="outline-primary">Button</b-button>
    <p>Orange</p><b-button variant="outline-primary">Button</b-button>


    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="4">
          <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
            <b-card-text>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first.
            </b-card-text>
            <div slot="footer"><small class="text-muted"><b-button variant="outline-primary">Button</b-button></small></div>
          </b-card>
        </b-col>

        <b-col>
              <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
      </b-card-text>
      <div slot="footer"><small class="text-muted"><b-button variant="outline-primary">Button</b-button></small></div>
    </b-card>
        </b-col>
        <b-col>
              <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
      </b-card-text>
      <div slot="footer"><small class="text-muted"><b-button variant="outline-primary">Button</b-button></small></div>
    </b-card>
        </b-col>
        
      </b-row>
    </b-container>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
