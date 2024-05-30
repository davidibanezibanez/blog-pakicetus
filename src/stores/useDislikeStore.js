import { defineStore } from 'pinia'

export const useDislikeStore = defineStore('dislikes', {
    state: () => {
      return {
        dislikes: JSON.parse(localStorage.getItem('dislikes')) || []
      }
    },
    getters: {
        getPostDislikes(state){
            return (postId) => state.dislikes.filter(dislike => dislike.post_id === postId).length;
        }
    },
    actions: {
        addDislike(dislike){
            this.dislikes.unshift(dislike);
            localStorage.setItem('dislikes',JSON.stringify(this.dislikes));
        }
    }
})
