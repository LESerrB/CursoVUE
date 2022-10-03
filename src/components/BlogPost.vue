<script setup>
    defineProps(["title", "id", "body", "colorText"]);
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5
                class="card-tittle"
                :class="`text-${colorText}`"
                >{{id}} - {{title}}</h5>
            <p>Si vis pacem parabellum.</p>
        </div>
    </div>
</template>