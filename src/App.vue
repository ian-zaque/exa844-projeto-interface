<template>
  <div id="app" class="blackened">
    <b-navbar toggleable="lg" type="dark" variant="dark" style="background-color: #242424;">
      <b-navbar-brand>
        KANTI
      </b-navbar-brand>

      <b-navbar-toggle target="sidebar-collapse"></b-navbar-toggle>

      <b-collapse id="sidebar-collapse" is-nav>
        <b-nav style="border-color: #fff;">
            <b-nav-item to="/" exact style="border-radius: 20%; border-color: #fff;">
              <b-icon icon="house-door"></b-icon> Home
            </b-nav-item>

            <b-nav-item to="/library" style="border-radius: 20%; border-color: #fff;">
              <b-icon icon="bookmark"></b-icon> Biblioteca
            </b-nav-item>

            <b-nav-item to="/about" style="border-radius: 20%; border-color: #fff;">
              <b-icon icon="info-lg"></b-icon>  Sobre 
            </b-nav-item>
        </b-nav>
      </b-collapse>

    </b-navbar>

    <div class="main-container">
      <div class="sidebar">
        <Sidebar />
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';

export default {
  name: 'App',

  components: {
    Sidebar,
  },

  methods: {
  },

};
</script>

<style>
#app {
  text-align: left;
}

.blackened {
  background-color: #282828;
}

.main-container {
  display: flex;
  min-height: calc(100vh - 56px);
}

.sidebar {
  width: 240px;
  background-color: #040404;
  color: #fff;
  padding: 20px;
}

.sidebar-nav .nav-link {
  color: #ffffff;
  padding: 10px;
}

.sidebar-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  display: none;
}

@media (max-width: 767px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    transform: translateX(-240px);
    transition: transform 0.1s ease;
  }

  .sidebar-open {
    transform: translateX(0);
  }

  .content {
    margin-left: 240px;
    transition: margin-left 0.3s ease;
  }

  .sidebar-nav .nav-link {
    color: #ffffff;
    padding: 10px;
}

  .sidebar-toggle {
    display: block;
  }
}
</style>