<template>
    <div class="comment">
        <div class="card-body d-flex flex-column p-2">
            <span>
                <i class="bi bi-person"></i> {{ comment.username }}
            </span>
            <span>
                <i class="bi bi-alarm"></i> {{ comment.time }}
            </span>
            <p>
                {{ comment.body }}
            </p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        comment: {
            type: Object,
            required: true
        }
    });
</script>

<style>
    .comment{
        background-color: rgb(153, 231, 240);
        margin: 20px 10px 10px 40px;
        border-radius: 25px;
        font-size: 17px;
        padding: 5px;
    }
</style>
