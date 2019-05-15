<template>
    <div id="posts">
        <p class="border p-3" v-for="post in posts">
            {{ post.title }}
            <router-link :to="{ name: 'update', params: { postId : post.id } }"><button type="button" class="p-1 mx-3 float-right btn btn-light"> Update </button></router-link>
            <button type="button" @click="deletePost(post.id)" class="p-1 mx-3 float-right btn btn-danger"> Delete </button>
        </p>
        <div>
            <button v-if="next" type="button" @click="navigate(next)" class="m-3 btn btn-primary">Next </button>
            <button v-if="prev" type="button" @click="navigate(prev)" class="m-3 btn btn-primary">Previous </button>
        </div>
    </div>
</template>

<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      theme="nocturnal"
      :search-options="{
        enabled: true
      }"
      :pagination-options="{
        enabled: true,
        perPage: 3,
        mode: 'records'
      }"/>

  </div>
</template>


<script>
export default {
  name: 'my-component',
  mounted() {
    this.getPosts();
  },
  data() {
    return {
      posts: {},
      next: null,
      prev: null,
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'MMM Do YY',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '201-10-31:9: 35 am',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },
  methods: {
    getPosts(address) {
      axios.get(address ? address : "/api/posts").then(response => {
        this.posts = response.data.data;
        this.prev = response.data.links.prev;
        this.next = response.data.links.next;
      });
    },
    deletePost(id) {
      axios.delete("/api/posts/" + id).then(response => {
        console.log(response.data);
        this.getPosts();
      });
    },
    navigate(address) {
      this.getPosts(address);
    }
  }
};
</script>
