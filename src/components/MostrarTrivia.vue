<script setup>
import { onMounted, ref } from 'vue';
import { useTriviaStore } from '../stores/trivia';

const triviaStore = useTriviaStore();

const posicionTrivia = ref(0);

onMounted(() => {
    console.log('onMounted ejecutado');

    triviaStore.obtenerTrivia();

    console.log('obtenerTrivia terminó');
})

const seleccionarRespuesta = () => {
    posicionTrivia.value++;

}

const decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

</script>

<template>
    <div class="tarjeta-trivia" v-if="triviaStore.trivias.length > 0">
        <div class="cabecera-trivia">
            <h2 class="titulo-trivia">{{ decodeHtml(triviaStore.trivias[posicionTrivia].question) }}</h2>
            <div class="info-trivia">
                <p>Categoría: {{ triviaStore.trivias[posicionTrivia].category }}</p>
                <p>Dificultad: {{ triviaStore.trivias[posicionTrivia].difficulty }}</p>
            </div>
            <div class="detalle-trivia">
                <p>
                    Pregunta <span>{{ posicionTrivia + 1 }}</span> de <span>{{ triviaStore.trivias.length }}</span>
                </p>
                <p>
                    Puntuación: <span>0</span>
                </p>
            </div>
        </div>
        <div class="respuestas-container">
            <button class="btn-respuesta" @click="seleccionarRespuesta()" v-for="respuesta in triviaStore.trivias[posicionTrivia].respuestas">
                {{ respuesta }}
            </button>
        </div>
    </div>
</template>

<style></style>