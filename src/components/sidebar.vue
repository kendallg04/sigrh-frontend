<template>
    <div id="sidebar-wrapper" :class="{ collapsed: !expanded }" @mouseenter="expanded = true"
        @mouseleave="expanded = false">
        <!-- Panel Usuario -->
        <div class="user-panel text-center py-4">
            <div class="user-info">
                <img :src="user.image" alt="Foto Usuario" class="user-img mb-2" />
                <div class="user-name text-white fw-bold">{{ user.name }}</div>
                <div class="user-department text-secondary small">{{ user.department }}</div>
            </div>
        </div>

        <!-- Menú -->
        <ul class="sidebar-nav nav-pills nav-stacked">
            <li v-for="(item, index) in menu" :key="index" :class="{ active: item.open }">
                <a href="javascript:void(0)" @click="toggleItem(index)">
                    <span class="fa-stack fa-lg pull-left">
                        <FontAwesomeIcon :icon="item.icon" class="fa-stack-1x" />
                    </span>
                    <span class="menu-text">{{ item.label }}</span>
                </a>

                <!-- Submenú -->
                <transition name="slide">
                    <ul v-show="item.children?.length && item.open" class="nav-pills nav-stacked"
                        style="list-style-type:none;">
                        <li v-for="link in item.children" :key="link">
                            <a href="#">{{ link }}</a>
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>

        <!-- Logout -->
        <div class="logout-section mt-auto text-center">
            <button class="btn btn-danger w-100 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon :icon="faRightFromBracket" rotation=180 />
                <span class="logout-text ms-2">Salir</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faDashboard,
    faFlag,
    faCloudDownload,
    faCartPlus,
    faUser,
    faWrench,
    faServer,
    faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

const expanded = ref(false);

const user = reactive({
    name: "Juan Pérez",
    department: "Departamento de TI",
    image: "https://media.istockphoto.com/id/1171169099/es/foto/hombre-con-brazos-cruzados-aislados-sobre-fondo-gris.jpg?s=612x612&w=0&k=20&c=8qDLKdLMm2i8DHXY6crX6a5omVh2IxqrOxJV2QGzgFg="
});

const menu = reactive([
    { label: "Dashboard", icon: faDashboard, open: false, children: ["link1", "link2"] },
    { label: "Shortcut", icon: faFlag, open: false, children: ["link1", "link2"] },
    { label: "Overview", icon: faCloudDownload, children: [] },
    { label: "Events", icon: faCartPlus, children: [] },
    { label: "About", icon: faUser, children: [] },
    { label: "Services", icon: faWrench, children: [] },
    { label: "Contact", icon: faServer, children: [] }
]);

const toggleItem = (index) => {
    menu.forEach((item, i) => {
        if (i !== index) item.open = false;
    });
    menu[index].open = !menu[index].open;
};
</script>


<style>
#sidebar-wrapper {
    width: 50px;
    background: #000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    overflow-x: hidden;
}

#sidebar-wrapper:hover,
#sidebar-wrapper.expanded {
    width: 250px;
}

/* Menú colapsado: ocultar texto */
#sidebar-wrapper.collapsed .menu-text {
    opacity: 0;
    width: 0;
    overflow: hidden;
    transition: all 0.3s ease;
}

#sidebar-wrapper.collapsed .user-name,
#sidebar-wrapper.collapsed .user-department {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
}

#sidebar-wrapper .menu-text,
#sidebar-wrapper .user-name,
#sidebar-wrapper .user-department {
    transition: all 0.3s ease;
}

.user-panel {
    flex: 0 0 auto;
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 15px 0;
    text-align: center;
}

.user-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
    transition: all 0.3s ease;
}

.user-info .user-name,
.user-info .user-department {
    opacity: 1;
    max-height: none;
    overflow: visible;
}

.sidebar-nav {
    flex: 1 1 auto;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    position: relative;
}

.sidebar-nav li a {
    display: flex;
    align-items: center;
    color: #999;
    text-decoration: none;
    padding: 10px;
    white-space: nowrap;
    transition: all 0.3s ease;
}

.sidebar-nav li a .menu-text {
    opacity: 1;
    margin-left: 5px;
}

.sidebar-nav li a:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white;
}

.sidebar-nav ul {
    padding-left: 20px;
}

.logout-section {
    flex: 0 0 auto;
    margin-top: auto;
    padding: 10px;
}

.logout-section .btn {
    border-radius: 20px;
    font-size: 14px;
    width: 100%;
}

.logout-section .btn:hover {
    background-color: #c82333;
    color: #fff;
}

/* Animación colapsado submenús */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
}

.slide-enter-to,
.slide-leave-from {
    max-height: 200px;
    opacity: 1;
}
</style>
