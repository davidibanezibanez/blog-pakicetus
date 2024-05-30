<template>
  <div>
      <div>
            <form class="submit-post">
                
                <div class="mb-3" id="submit-post-label-1">
                    <label for="username" class="form-label">Usuario</label>
                    <input
                        v-model="data.post.username"
                        placeholder="Usuario" 
                        type="text" 
                        class="form-control" 
                        id="username">
                </div>
                
                <div class="mb-3" id="submit-post-label-2">
                    <label for="body" class="form-label">Post</label>
                    <textarea 
                        v-model="data.post.body"
                        placeholder="Post" 
                        rows="3" 
                        cols="50" class="form-control" id="body"></textarea>
                </div>

                <div class="submit-post-button">
                    <button 
                    @click.prevent="storePost"
                    :disabled="!data.post.username || !data.post.body"
                    type="submit" class="btn btn-sm btn-primary">
                    Postear
                    </button>
                </div>
                
            </form>
      </div>
  </div>
</template>

<script setup>
    import { reactive } from 'vue'
    import { usePostStore } from '../stores/usePostStore'
    import moment from 'moment';
    import { v4 as uuidv4 } from 'uuid';

    const { addPost } = usePostStore();

    const data = reactive({
      post: {
        username: '',
        body: ''
      }
    });

    const storePost = () => {
        const post = data.post;
        post.id = uuidv4();
        post.time = moment().format('MMMM Do YYYY, h:mm:ss a');
        addPost(post);
        data.post = {
            username: '',
            body: ''
        };
    }
</script>

<style>
.submit-post{
    background-color: rgb(255, 240, 220);
    padding: 20px;
    border-radius: 25px;
    margin: 15px;
    font-size: 17px;
}
#submit-post-label-1{
    margin: 10px;
}
#submit-post-label-2{
    margin: 10px;
}
.submit-post-button{
    display: flex;
    justify-content: center;
    margin: 20px 0px 0px 0px;
}
</style>
