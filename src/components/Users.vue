<template>
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
</template>


<script>
    export default {
        name: 'Users',
        props: {
            users: {
                type: Array,
                required: true
            }
        }
    }
</script>
