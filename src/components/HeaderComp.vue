<template>
  <div>
    <br><br><br>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="height:80px;">
        <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button> -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link to="/" v-slot="{ href, navigate }">
                            <li><a class="dropdown-item" :href="href" @click="navigate">Action</a></li>
                            </router-link>
                            <router-link to="/" v-slot="{ href, navigate }">
                            <li><a class="dropdown-item" :href="href" @click="navigate">Another action</a></li>
                            </router-link>
                            <li><hr class="dropdown-divider"></li>
                            <router-link to="/" v-slot="{ href, navigate }">
                            <li><a class="dropdown-item" :href="href" @click="navigate">Something else here</a></li>
                            </router-link>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style="margin:-20px 0px 10px 0px;">
                    <button class="btn btn-outline-success" type="submit" style="margin:-20px 0px 10px 0px;">Search</button>
                </form>
            </div>
        </div>
    </nav>
  </div>
</template>


<script>
    
</script>


<style scoped>
    /* @import '@/css/bootstrap.css'; */
</style>