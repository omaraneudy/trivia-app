<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useTriviaStore } from '../stores/trivia';
import { useRouter } from 'vue-router'

const router = new useRouter();

const triviaStore = useTriviaStore();

const handleSubmit = () => {
    triviaStore.configurarTrivia(numeroPreguntas.value, categoriaPregunta.value, dificultad.value, tipoPregunta.value);
    router.push('trivia');
}

const numeroPreguntas = ref(10);
const categoriaPregunta = ref("any");
const dificultad = ref("any");
const tipoPregunta = ref("any");


onMounted(async () => {
    await triviaStore.obtenerCategorias();
})
</script>

<template>
    <form class="trivia-form" @submit.prevent="handleSubmit">

        <label for="numero-preguntas">Elige el número de preguntas</label>
        <input type="number" class="campo" v-model="numeroPreguntas">

        <label for="categoria">Elige la categoría</label>
        <select id="categoria" class="campo" v-model="categoriaPregunta">
            <option value="any">Cualquier categoría</option>
            <option v-for="categoria in triviaStore.categorias" :key="categoria.id" :value="categoria.id">{{
                    categoria.name }}</option>
        </select>

        <label for="dificultad">Elige la dificultad</label>
        <select id="dificultad" class="campo" v-model="dificultad">
            <option value="any">Cualquier dificultad</option>
            <option value="easy">Fácil</option>
            <option value="medium">Medio</option>
            <option value="hard">Difícil</option>
        </select>

        <label for="tipo">Elige el tipo de pregunta</label>
        <select id="tipo" class="campo" v-model="tipoPregunta">
            <option value="any">Cualquier tipo</option>
            <option value="multiple">Elección multiple</option>
            <option value="boolean">Verdadero o Falso</option>
        </select>
        <button class="btn btn-creacion">Crear Trivia</button>
    </form>
</template>
<style></style>