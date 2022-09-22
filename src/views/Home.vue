<template>
  <div class="home-page">
    <div class="main-block">
      <div class="main-block-img">
      <div class="main-center-block">
        <h1 class="main-title">Test assignment for front-end developer</h1>
        <div class="main-text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</div>
        <div class="main-btn-wrap">
          <a class="main-btn" href="#">
            Sign up
          </a>
        </div>
      </div>
    </div>
    </div>
    <div class="get-request-block">
      <div class="get-request-title">Working with GET request</div>
      <div class="get-request-content">
        <!-- <Users :users="users"/> -->
        <div class="get-request-item" v-for="user in allUsers.users" :key="user.id">
          <a href="#" class="get-request-link">
            <div class="get-request-item-top">
              <div class="get-request-item-img">
                <img :src="user.photo" alt="">
            </div>
              <div class="get-request-item-name">{{user.name}}</div>
              </div>
            <div class="get-request-item-bottom">
              <div class="get-request-item-work">{{user.position}}</div>
              <div class="get-request-item-mail">
                <div class="mail-link">{{user.email}}</div>
              </div>
              <div class="get-request-item-phone">
                <a class="phone-link" :href="user.phone">{{user.phone}}</a>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="get-request-btn-wrap">
        <a href="#" class="get-request-btn">Show more</a>
      </div>
    </div>
    <Form />
  </div>
</template>

<script>
// import axios from 'axios';
import Form from "@/components/Form";
import { mapGetters, mapActions } from 'vuex';
// import Users from "@/components/Users";
export default {
  name: 'Home',
  computed: mapGetters(['allUsers']),
  methods: mapActions (['fetchUsers']),
  
async mounted() {
    this.fetchUsers();
  },
   components: {
    Form,
    // Users
   },
}
</script>
