<template>
    <header class="top-bar">
        <div class="title-header">
            <button class="principal-title-button" @click="$router.push('/')">Blog Pakicetus</button>
        </div>
    </header>
</template>

<script setup>
</script>

<style>
.title-header {
    display: flex;
    justify-content: center;
}
.principal-title-button {
    font-size: 45px;
    border: none;
    border-radius: 25px;
    background-color: rgb(153, 231, 240);
    margin: 15px;
    padding: 15px;
}
</style>
