<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">YOU ARE THE GOAT, S.L.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/"> Home </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/collatz"> Collatz</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/tablamultiplicar"> Tabla </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <!-- <div>
    <ul id="menu">
        <li>
            <router-link to="/"> Home |</router-link>
            <router-link to="/collatz"> Collatz |</router-link>
            <router-link to="/tablamultiplicar"> Tabla |</router-link>
        </li>
    </ul>
  </div> -->
</template>

<script>
export default {
    name:"MenuComponent"
}
</script>

<style>
    ul#menu li {
        display: inline
    }
</style>