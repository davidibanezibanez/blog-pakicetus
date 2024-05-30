import { defineStore } from 'pinia'

export const usePostStore = defineStore('posts', {
    state: () => {
      return {
        posts: JSON.parse(localStorage.getItem('posts')) || []
      }
    },
    getters: {
        getPost(state){
            return (postId) => state.posts.find(post => post.id === postId);
        },
        getPosts(state){
            return state.posts;
        }
    },
    actions: {
        addPost(post){
            this.posts.unshift(post);
            localStorage.setItem('posts',JSON.stringify(this.posts));
        },
        removePost(post) {
            const postId = post.id; 
            const storedPosts = JSON.parse(localStorage.getItem('posts')); 
            window.location.reload();
            const updatedPosts = storedPosts.filter(p => p.id !== postId); 
            localStorage.setItem('posts', JSON.stringify(updatedPosts)); 
        }
    }
})
