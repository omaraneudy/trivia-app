<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<template>
    <HeaderComponent></HeaderComponent>
    <div class="home-container">
        <div class="home-text">
            <h2 class="home-title">Home page</h2>
            <p>Preparate para responder a estas trivias</p>
            <router-link class="btn" to="/trivias">Empezar trivia</router-link>
        </div>
    </div>
</template>

<style></style>