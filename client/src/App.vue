<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/admin-page">Admin Page</router-link>
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<style lang="scss">
#nav {
  text-align: center;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>