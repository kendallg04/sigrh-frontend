<template>
    <div class="card shadow-sm bg-secondary-subtle" style="width: 550px;height: auto;">
        <form @submit.prevent="iniciarSesion">
            <div class="card-header text-bg-primary mb-3">
                <h3 class="card-title my-2 text-center">Login</h3>
            </div>

            <img :src="iconUtp" class="d-block mx-auto mb-3" alt="Recursos Humanos" style="height: 150px;" />

            <div class="px-5 mb-3">
                <label for="floatingInput">Cédula ej. 0-000-0000</label>
                <input class="form-control form-control-lg" v-model="form.cedula" />
            </div>

            <div class="px-5 mb-3">
                <label for="floatingInput2">Contraseña</label>
                <input type="password" class="form-control form-control-lg" v-model="form.password" />
            </div>

            <div class="mb-3">
                <div class="d-flex justify-content-center">
                    <a class="icon-link icon-link-hover px-5 fw-bold fs-5"
                        style="--bs-link-hover-color-rgb: 25, 135, 84; " href="#">
                        <FontAwesomeIcon :icon="faKey" />Generar
                        Contraseña
                    </a>
                    <a class="icon-link icon-link-hover px-5 fw-bold fs-5"
                        style="--bs-link-hover-color-rgb: 25, 135, 84; " href="#">
                        <FontAwesomeIcon :icon="faAddressCard" />Registro
                    </a>
                </div>
            </div>

            <div class="mb-3 p-4 mx-auto text-center">
                <button class="btn btn-secondary btn-lg m-1"><i class="fa-solid fa-broom"></i> Limpiar</button>
                <button type="submit" class="btn btn-primary btn-lg m-1">Ingresar</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import iconUtp from '@/assets/images/LogoUtp512blanco.png';
import { reactive, ref } from 'vue';
import { handleApiError } from '../../config/errorHandler';
import { showError } from '../../utils/alerts';
import { LoginPost } from '../../services/authService';
import { useRouter } from 'vue-router';

const form = reactive({
    cedula: "",
    password: ""
});

const message = ref("");

const router = useRouter();

const iniciarSesion = async () => {
    try {
        const data = await LoginPost(form);
        router.push('/dashboard');
    } catch (error) {
        handleApiError(error, showError);
    }
}
</script>