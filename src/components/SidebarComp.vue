<template>
    <div id="body-pd">
        <header class="header" id="header">
            <div class="header_toggle"> 
                <i class='bx bx-menu' id="header-toggle"></i> 
            </div>
            <div class="header_img"> 
                <router-link to="/myPage">
                    <img v-if="imageUrl" :src="require(`@/assets/${imageUrl}`)">
                </router-link>    
            </div>
        </header>
        <div class="l-navbar" id="nav-bar">
            <nav class="nav">
                <div> 
                    <router-link to="/" class="nav_logo"> 
                        <i class='bx bx-layer nav_logo-icon'></i> 
                        <span class="nav_logo-name">Home</span> 
                    </router-link>
                    <div class="nav_list"> 
                        <router-link to="/community" class="nav_link" exact>
                            <i class='bx bx-grid-alt nav_icon'></i> 
                            <span class="nav_name">Community</span> 
                        </router-link>
                        <router-link to="/myPage" class="nav_link" v-if="showMypage"> 
                            <i class='bx bx-user nav_icon'></i> 
                            <span class="nav_name">My Page</span> 
                        </router-link>
                        <router-link to="/chat" class="nav_link" v-if="showMessages" exact>
                            <i class='bx bx-message-square-detail nav_icon'></i> 
                            <span class="nav_name">Messages</span> 
                        </router-link>
                        <a href="#" class="nav_link">
                            <i class='bx bx-bookmark nav_icon'></i> 
                            <span class="nav_name">Bookmark</span> 
                        </a>
                            <a href="#" class="nav_link">
                            <i class='bx bx-folder nav_icon'></i> 
                            <span class="nav_name">Files</span>
                        </a> 
                        <router-link to="/realgrid" class="nav_link" exact>
                            <i class='bx bx-bar-chart-alt-2 nav_icon'></i> 
                            <span class="nav_name">Admin</span> 
                        </router-link> 
                    </div>
                </div> 
                    <a href="#" class="nav_link"> 
                        <i class='bx bx-log-out nav_icon'></i> 
                        <span class="nav_name">SignOut</span> 
                    </a>
            </nav>
        </div>
        <!-- <div class="height-100 bg-light">
            <h4>Main Components</h4>
        </div> -->
    </div>    
</template>


<script>

import axios from 'axios';
// import { ref, watchEffect } from 'vue';
// import { watch } from 'vue';

export default {
  data(){
    return{
        email: sessionStorage.getItem('userEmail') || '',
        imageUrl: null,
        showMypage: false,
        showMessages: false,
    }
  },
  props: {
    ParentsToChild: String // 부모페이지로 부터 받은 값
  },
  watch: {
    ParentsToChild(val) {
      if(val){ // 로그아웃 될 때 다 숨김
        this.showMypage = false;
        this.showMessages = false;
        this.imageUrl = null;
      }
    },
  },
  mounted() {
    if(this.email !== ""){
        this.getUserImg();
        this.showMypage = true;
        this.showMessages = true;
    }else{
        this.showMypage = false;
        this.showMessages = false;
    }
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const bodypd = document.getElementById(bodyId);
    const headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
        // show navbar
        nav.classList.toggle('show');
        // change icon
        toggle.classList.toggle('bx-x');
        // add padding to body
        bodypd.classList.toggle('body-pd');
        // add padding to header
        headerpd.classList.toggle('body-pd');
        });
    }
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
    if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    }
    }

    linkColor.forEach(l => l.addEventListener('click', colorLink));
  },
  methods: {
      async getUserImg(){

      const url = 'http://localhost:7001/getUserImage';

      const data = {
        params: {
          email: this.email,
        },
      };

      axios.get(url, data)
        .then((response) => {
          console.log(response.data);
          this.imageUrl = response.data;
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  }
};

</script>


<style>
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");
    @import url('https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css');
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');

    :root {
        --header-height: 3rem;
        --nav-width: 68px;
        --first-color: #6623d9;
        --first-color-light: #AFA5D9;
        --white-color: #F7F6FB;
        --body-font: 'Nunito', sans-serif;
        --normal-font-size: 1rem;
        --z-fixed: 100;
    }

    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    body {
        position: relative;
        margin: var(--header-height) 0 0 0;
        padding: 0 1rem;
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
        transition: .5s;
    }

    a {
        text-decoration: none;
    }

    .header {
        width: 100%;
        height: var(--header-height);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        background-color: var(--white-color);
        z-index: var(--z-fixed);
        transition: .5s;
    }

    .header_toggle {
        color: var(--first-color);
        font-size: 1.5rem;
        cursor: pointer;
    }

    .header_img {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center; /* 가로 정렬 중앙 */
        align-items: center; /* 세로 정렬 중앙 */
        border-radius: 50%;
        overflow: hidden;
    }

    .header_img img {
        width: 40px;
    }

    .l-navbar {
        position: fixed;
        top: 0;
        left: -30%;
        width: var(--nav-width);
        height: 100vh;
        background-color: var(--first-color);
        padding: .5rem 1rem 0 0;
        transition: .5s;
        z-index: var(--z-fixed);
    }

    .nav {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    }

    .nav_logo,
    .nav_link {
        display: grid;
        grid-template-columns: max-content max-content;
        align-items: center;
        column-gap: 1rem;
        padding: .5rem 0 .5rem 1.5rem;
    }

    .nav_logo {
        margin-bottom: 2rem;
    }

    .nav_logo-icon {
        font-size: 1.25rem;
        color: var(--white-color);
    }

    .nav_logo-name {
        color: var(--white-color);
        font-weight: 700;
    }

    .nav_link {
        position: relative;
        color: var(--first-color-light);
        margin-bottom: 1.5rem;
        transition: .3s;
    }

    .nav_link:hover {
        color: var(--white-color);
    }

    .nav_icon {
        font-size: 1.25rem;
    }

    .show {
        left: 0;
    }

    .body-pd {
        padding-left: calc(var(--nav-width) + 1rem);
    }

    .active {
        color: var(--white-color);
    }

    .active::before {
        content: '';
        position: absolute;
        left: 0;
        width: 2px;
        height: 32px;
        background-color: var(--white-color);
    }

    .height-100 {
        height: 100vh;
    }

    @media screen and (min-width: 768px) {
        body {
            margin: calc(var(--header-height) + 1rem) 0 0 0;
            padding-left: calc(var(--nav-width) + 2rem);
        }

        .header {
            height: calc(var(--header-height) + 1rem);
            padding: 0 2rem 0 calc(var(--nav-width) + 2rem);
        }

        .header_img {
            width: 40px;
            height: 40px;
        }

        .header_img img {
            width: 75px;
        }

        .l-navbar {
            left: 0;
            padding: 1rem 1rem 0 0;
        }

        .show {
            width: calc(var(--nav-width) + 156px);
        }

        .body-pd {
            padding-left: calc(var(--nav-width) + 188px);
        }
    }
</style>