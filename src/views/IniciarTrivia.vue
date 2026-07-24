<script setup>
import CrearTrivia from '../components/CrearTrivia.vue';
import HeaderComponent from '../components/HeaderComponent.vue';

</script>

<template>
    <HeaderComponent></HeaderComponent>
    <div class="creacion-container">
        <div class="creacion-text">
            <h2 class="creacion-title">Prepara la trivia</h2>
            <p>Elije las opciones que gustes para crear tu trivia</p>
            <CrearTrivia></CrearTrivia>
        </div>
    </div>
</template>
<style></style>