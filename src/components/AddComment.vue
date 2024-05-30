<template>
  <div>
      <div>
            <form class="submit-comment">
                
                <div class="mb-3" id="submit-comment-label-1">
                    <label for="username" class="form-label">Usuario</label>
                    <input
                        v-model="data.comment.username"
                        placeholder="Usuario" 
                        type="text" 
                        class="form-control" 
                        id="username">
                </div>

                <div class="mb-3" id="submit-comment-label-2">
                    <label for="body" class="form-label">Comentario</label>
                    <textarea 
                        v-model="data.comment.body"
                        placeholder="Comentario" 
                        rows="3" 
                        cols="50" class="form-control" id="body"></textarea>
                </div>

                <div class="submit-comment-button">
                    <button
                    @click.prevent="storeComment"
                    :disabled="!data.comment.username || !data.comment.body"
                    type="submit" class="btn btn-sm btn-primary">
                    Comentar
                    </button>
                </div>

            </form>
      </div>
  </div>
</template>

<script setup>
    import { reactive } from 'vue'
    import moment from 'moment';
    import { v4 as uuidv4 } from 'uuid';

    const data = reactive({
      comment: {
        username: '',
        body: ''
      }
    });

    const emit = defineEmits(['commentAdded']);

    const storeComment = () => {
        const comment = data.comment;
        comment.id = uuidv4();
        comment.time = moment().format('MMMM Do YYYY, h:mm:ss a');
        emit('commentAdded',comment);
        data.comment = {
            username: '',
            body: ''
        };
    }
</script>

<style>
.submit-comment{
    background-color: rgb(255, 240, 220);
    padding: 20px;
    border-radius: 25px;
    margin: 20px 10px 10px 40px;
    font-size: 17px;
}
#submit-comment-label-1{
    margin: 10px;
}
#submit-comment-label-2{
    margin: 10px;
}
.submit-comment-button{
    display: flex;
    justify-content: center;
    margin: 20px 0px 0px 0px;
}
</style>
