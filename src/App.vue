<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><button>Home</button></router-link>
      <button @click="createAboutWindow">About</button>
      <router-link to="/vuextrain"><button>Vuex</button></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {ipcRenderer} from 'electron';

export default {
  
  methods: {
    createAboutWindow(){
      ipcRenderer.send('about:create');
    }
  }
}
</script>
<style>
#app {
  text-align: center;
}
#nav {
  display: inline-block;
  margin: auto;
  width: auto;
  text-align: center;
}
.obj-last {
  width: 30%;
  margin-left: 35%;
}
.object-block {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
  height: 100%;
}
.img {
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
  height: 70%;
  background-color: aqua;
}

.objects-block {
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  padding: 0;
}

.object {
  background-color: #f0f0f5;
  border-radius: 5px;
  border: 1px solid gray;
  height: 300px;
  width: 280px;
  margin: 1%;
  padding: 0;
  transition-duration: 0.7s;
}

.object:hover {
  -webkit-box-shadow: 10px 10px 5px 0px rgba(191,191,191,1);
  -moz-box-shadow: 10px 10px 5px 0px rgba(191,191,191,1);
  box-shadow: 10px 10px 5px 0px rgba(191,191,191,1);
}

.name {
  font-size: 18pt;
  font-style: bold;
}
.desc {
  font-size: 14pt;
}

.name, .desc {
  text-align: center;
  color: grey;
}

a {
  text-decoration: none;
}

button {
  color: white;
  width: 90px;
  height: 50px;
  font-size: 16pt;
  background-color:rgb(77, 124, 77);
  outline: none;
  border: 1px solid rgb(77, 124, 77);
  transition-duration: 0.5s;
}

button:hover {
  background-color: rgb(70, 194, 163);
}

</style>
