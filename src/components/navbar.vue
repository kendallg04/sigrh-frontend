<script setup>
import iconRh from '@/assets/images/RRHH.png';
import iconUtp from '@/assets/images/LogoUtp512blanco.png';
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light shadow-none">
        <div class="container-fluid position-relative d-flex align-items-center">

            <a class="navbar-brand position-absolute start-50 translate-middle-x d-flex align-items-center" href="#">
                <img :src="iconRh" class=" me-2" alt="Recursos Humanos" style="height: 40px;" />

                <h2 class="h5 mb-0 d-none d-lg-block">
                    Sistema Integrado de Gestión de Recursos Humanos
                </h2>

                <span class="fw-bold d-lg-none">SIGRH</span>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav d-flex flex-row px-3">
                    <li class="nav-item me-3">
                        <a class="nav-link" href="http://www.utp.ac.pa/" target="_blank">Portal UTP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://correo.utp.ac.pa/" target="_blank">Correo UTP</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</template>