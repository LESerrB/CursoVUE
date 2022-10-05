<script setup>
defineProps(["inicio", "fin", "maxLenght"]);

const emit = defineEmits(['next', 'prev'])

const actvSig = () =>{
    console.log("Siguiente");
    emit("next");
}
</script>

<template>
    <div class="btn-group" role="group" aria-label="Basic exanple">
        <button type="button"
            class="btn btn-outline-primary"
            @click="emit('prev')"
            :disabled="inicio === 0">
                Prev {{inicio}}
        </button>
        
        <button type="button"
            class="btn btn-outline-primary"
            @click="emit('next')"
            :disabled="fin >= maxLenght">
                Sig {{fin}}
        </button>
    </div>
</template>