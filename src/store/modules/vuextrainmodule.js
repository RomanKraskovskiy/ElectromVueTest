export default {
    state: {
        posts:[]
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        },
        addPost(state, post) {
            state.posts.unshift(post);
        }
    },
    actions: {
        async fetchPosts(ctx, limit = 3){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit);
        const posts = await res.json();
        ctx.commit('updatePosts', posts);
        }
    },
    getters:{
        validPosts(state) {
            return state.posts.filter(p => {
                return p.title && p.body;
            });
        },
        allPosts(state){
            return state.posts;
        },
        postsCount(state, getters){
            return getters.validPosts.length;
        },
    }
}