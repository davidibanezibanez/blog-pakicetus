<template>
        <div class="card mb-2" id="post">
            <div class="card-body">
            <router-link :to="`/post/${post.id}`" class="text-decoration-none text-secondary">
                    {{ post.body }}
            </router-link>
            </div>
            <div class="card-footer bg-white d-flex justify-content-between align-items-center">
                <span>
                    <i class="bi bi-person"></i> {{ post.username }}
                </span>
                <span @click="storeLike" style="cursor: pointer">
                    <i class="bi bi-heart"></i> {{ getPostLikes(post.id) }}
                </span>
                <span @click="storeDislike" style="cursor: pointer">
                    <i class="bi bi-emoji-frown"></i> {{ getPostDislikes(post.id) }}
                </span>
                <router-link :to="`/post/${post.id}`" class="text-decoration-none text-dark">
                    <span>
                        <i class="bi bi-chat"></i> {{ getPostcomments(post.id).length }}
                    </span>
                </router-link>
                <button type="button" class="btn btn-warning" @click="editPost(post.id)">
                    <i class="bi bi-pencil"></i>
                </button>
                <button type="button" class="btn btn-danger" @click="deletePost(post.id)">
                    <i class="bi bi-trash"></i>
                </button>
                <span>
                    <i class="bi bi-alarm"></i> {{ post.time }}
                </span>
            </div>
        </div>
</template>

<script setup>
        import { ref } from 'vue'
        import { useLikeStore } from '../stores/useLikeStore'
        import { useCommentStore } from '../stores/useCommentStore'
        import { v4 as uuidv4 } from 'uuid';
        import { useDislikeStore } from '../stores/useDislikeStore'
        import { usePostStore } from '../stores/usePostStore'

        const { addLike, getPostLikes } = useLikeStore();
        const { getPostcomments } = useCommentStore();
        const { addDislike, getPostDislikes } = useDislikeStore();
        const { removePost } = usePostStore();

        const props = defineProps({
            post: {
                type: Object,
                required: true
            }
        });

        const storeLike = () => {
            const like = {
                id: uuidv4(),
                post_id: props.post.id
            }
            addLike(like);
        }

        const storeDislike = () => {
            const dislike = {
                id: uuidv4(),
                post_id: props.post.id
            }
            addDislike(dislike);
        }
        const deletePost = (postId) => {
            removePost({ id: postId });
        };
</script>

<style>
    #post{
        margin: 20px 0px 0px 0px;
    }
</style>
