<template>
    <div :class="{ 'sidebar-open': isSidebarOpen }">
        <b-nav vertical class="sidebar-nav grayBorder" style="border-color: #fff;">
            <b-nav-item to="/" exact style="border-radius: 20%; border-color: #fff;">
                <b-icon icon="house-door"></b-icon> Home
            </b-nav-item>

            <b-nav-item to="/library" style="border-radius: 20%; border-color: #fff;">
                <b-icon icon="bookmark"></b-icon>  Biblioteca 
            </b-nav-item>

            <b-nav-item to="/about" style="border-radius: 20%; border-color: #fff;">
                <b-icon icon="info-lg"></b-icon>  Sobre 
            </b-nav-item>
        </b-nav>
        <div v-if="isSidebarOpen" class="sidebar-toggle" @click="toggleSidebar">
            <i class="bi bi-chevron-left"></i>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Sidebar',

    data() {
        return {
            isSidebarOpen: true,
        };
    },

    methods: {
        toggleSidebar() { this.isSidebarOpen = !this.isSidebarOpen; },
    },
};
</script>
  
<style scoped>
.sidebar {
    height: 100%;
    width: 240px;
    background-color: #040404;
    color: #fff;
    padding: 20px;
    transition: transform 0.3s ease;
    transform: translateX(0);
    border-right-color: #fff;
}

.sidebar-nav .nav-link {
    color: #ffffff;
    padding: 10px;
}

.sidebar-toggle {
    position: absolute;
    top: 20px;
    right: -30px;
    width: 30px;
    height: 30px;
    background-color: #040404;
    color: #fff;
    border-radius: 50%;
    border-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.sidebar-toggle:hover {
    background-color: #1db954;
    color: #fff;
}

.sidebar-toggle i {
    font-size: 20px;
}

@media (max-width: 767px) {
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 240px;
        transform: translateX(-240px);
        z-index: 999;
        transition: transform 0.3s ease;
    }

    .sidebar-open {
        transform: translateX(0);
    }

    .sidebar-toggle {
        right: -20px;
    }
}
</style>