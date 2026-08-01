import { defineStore } from "pinia";
import { ref } from "vue";

export const useTriviaStore = defineStore("trivias", () => {
    const API_URL = "https://opentdb.com/";

    const trivias = ref([]);
    const categorias = ref([]);
    const parametrosTrivia = ref("");

    // trivias.value = [
    //     {
    //         type: "boolean",
    //         difficulty: "medium",
    //         category: "Sports",
    //         question: "During Wimbledon, spectators in the grounds can buy the tennis balls that have been used in matches.",
    //         correct_answer: "True",
    //         incorrect_answers: [
    //             "False"
    //         ]
    //     }
    // ];

    const cargando = ref(false);
    const error = ref(false);

    const obtenerCategorias = async () => {
        try {
            cargando.value = true;

            const response = await fetch(API_URL + "api_category.php");
            const data = await response.json();

            categorias.value = data.trivia_categories;

            cargando.value = false;
            error.value = false;
        }
        catch (e) {

        }
    }

    const configurarTrivia = (numeroPreguntas, categoria, dificultad, tipoPregunta) => {
        parametrosTrivia.value = "";
        parametrosTrivia.value += "amount=" + numeroPreguntas;
        parametrosTrivia.value += categoria === "any" ? "" : "&category=" + categoria;
        parametrosTrivia.value += dificultad === "any" ? "" : "&difficulty=" + dificultad;
        parametrosTrivia.value += tipoPregunta === "any" ? "" : "&type=" + tipoPregunta;

    }

    const obtenerTrivia = async () => {

        try {
            cargando.value = true;

            const response = await fetch(API_URL + "api.php?" + parametrosTrivia.value);
            const data = await response.json();

            trivias.value = data.results;

            trivias.value.forEach(trivia => {
                trivia.respuestas = shuffle(
                    trivia.incorrect_answers,
                    trivia.correct_answer
                );
            });

            cargando.value = false;
            error.value = false;
        }
        catch (e) {

        }

        // trivias.value = [
        //     {
        //         type: "boolean",
        //         difficulty: "medium",
        //         category: "Sports",
        //         question: "During Wimbledon, spectators in the grounds can buy the tennis balls that have been used in matches.",
        //         correct_answer: "True",
        //         incorrect_answers: [
        //             "False"
        //         ]
        //     },
        //     {
        //         "type": "multiple",
        //         "difficulty": "medium",
        //         "category": "General Knowledge",
        //         "question": "Linus Pauling, one of the only winners of multiple Nobel Prizes, earned his Nobel Prizes in Chemistry and what?",
        //         "correct_answer": "Peace",
        //         "incorrect_answers": [
        //             "Physics",
        //             "Economics",
        //             "Physiology/Medicine"
        //         ]
        //     }
        // ];

        // trivias.value.forEach(trivia => {
        //     trivia.respuestas = shuffle(
        //         trivia.incorrect_answers,
        //         trivia.correct_answer
        //     );
        // });

    }

    const shuffle = (array, newElement) => {

        let newArray = [];
        newArray = array;
        newArray.push(newElement);
        let currentIndex = newArray.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [newArray[currentIndex], newArray[randomIndex]] = [
                newArray[randomIndex], newArray[currentIndex]];
        }

        return newArray;
    }

    return {
        categorias,
        obtenerCategorias,
        trivias,
        obtenerTrivia,
        configurarTrivia
    }


});
