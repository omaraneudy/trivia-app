import { defineStore } from "pinia";
import { ref } from "vue";

export const useTriviaStore = defineStore("trivias", () => {
    const API_URL = "https://opentdb.com/";

    const trivias = ref([]);
    const categorias = ref([]);

    const cargando = ref(false); 
    const error = ref(false);

    const obtenerCategorias = async () => {
        try {
            cargando.value = true;
            
            const response = await fetch(API_URL+"api_category.php");
            const data = await response.json();

            categorias.value = data.trivia_categories;

            cargando.value = false;
            error.value = false;
        }
        catch (e) {

        }
    }

    return {
        categorias,
        obtenerCategorias
    }


});
