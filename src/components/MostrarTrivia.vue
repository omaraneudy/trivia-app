<script setup>
import { onMounted, ref } from 'vue';
import { useTriviaStore } from '../stores/trivia';

const triviaStore = useTriviaStore();

const posicionTrivia = ref(0);
const puntuacion = ref(0);

const respuestaSeleccionada = ref(null);

onMounted(async () => {
    console.log('onMounted ejecutado');

    await triviaStore.obtenerTrivia();

    console.log('obtenerTrivia terminó');
})

const seleccionarRespuesta = (respuesta, respuestaCorrecta) => {
    respuestaSeleccionada.value = respuesta;
    if (respuesta === respuestaCorrecta) {
        puntuacion.value++;
    }

    setTimeout(() => {
        posicionTrivia.value++;
    }, 2000);
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
                <p>Categoría: {{ decodeHtml(triviaStore.trivias[posicionTrivia].category) }}</p>
                <p>Dificultad: {{ decodeHtml(triviaStore.trivias[posicionTrivia].difficulty) }}</p>
            </div>
            <div class="detalle-trivia">
                <p>
                    Pregunta <span>{{ posicionTrivia + 1 }}</span> de <span>{{ triviaStore.trivias.length }}</span>
                </p>
                <p>
                    Puntuación: <span>{{ puntuacion }}</span>
                </p>
            </div>
        </div>
        <div id="respuestas-container" class="respuestas-container">
            <button v-for="(respuesta, index) in triviaStore.trivias[posicionTrivia].respuestas" :key="index" :class="[{
                'respuesta-correcta': respuestaSeleccionada === decodeHtml(respuesta) && decodeHtml(respuesta) === decodeHtml(triviaStore.trivias[posicionTrivia].correct_answer),
                'respuesta-incorrecta': respuestaSeleccionada === respuesta && respuesta !== decodeHtml(triviaStore.trivias[posicionTrivia].correct_answer)
            }, 'btn-respuesta']"
                @click="seleccionarRespuesta(decodeHtml(respuesta), decodeHtml(triviaStore.trivias[posicionTrivia].correct_answer))">
                {{ decodeHtml(respuesta) }}
            </button>
        </div>
    </div>
</template>

<style></style>