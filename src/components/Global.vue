<template>
  <div>
    <h1 class="header">Global</h1>
    <v-text-field class="header" placeholder="E.g: India" solo prepend-inner-icon="search" append-icon="forward" label="Search" @input="bindText" @click:append="search"></v-text-field>
    <div v-if="globalData.data.data && globalData.data.data.length>0">
    <div v-if="isLoading" class="main-container row-flex">
        <v-progress-circular
        indeterminate
        color="#00589d"
        ></v-progress-circular>
    </div>
    <div class="main-container" v-for="data in globalData.data.data" :key="data">
        <div class="main-card">
            <div class="flag-container">
                <img v-bind:src="getImg(data.code)"/>
                <span class="country-name">{{data.name}}</span>
            </div>
            <div class="row-flex">
                <div class="card column-flex">
                    <span class="card-title">Deaths</span>
                    <div class="row-flex">
                        <span class="card-text">{{data.latest_data.deaths}}</span>
                        <span class="card-current">{{data.today.deaths}}</span>
                    </div>
                </div>
                <div class="card column-flex">
                    <span class="card-title">Confirmed</span>
                    <div class="row-flex">
                        <span class="card-text">{{data.latest_data.confirmed}}</span>
                        <span class="card-current">{{data.today.confirmed}}</span>
                    </div>
                </div>
                <div class="card column-flex">
                    <span class="card-title">Recovered</span>
                    <span class="card-text green-text">{{data.latest_data.recovered}}</span>
                    <span class="card-title">Critical</span>
                    <span class="card-text red-text">{{data.latest_data.critical}}</span>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div v-else class="main-container">
        <h2>No country found</h2>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import _ from 'lodash'
export default {
  name: "Global",
  data() {
      return {
        globalData: null,
        searchText: null,
        isLoading: true,
      };
  },
  created() {
      this.getData();
      this.isLoading = false;
  },
  methods: {
    async getData() {
        await axios.get('https://corona-api.com/countries').then(response => (this.globalData = response));
    },
    getImg(code) {
        return `https://www.countryflags.io/${code}/flat/64.png`
    },
    bindText(val) {
        this.searchText = val;
    },
    async search() {
        await this.getData();
        let temp, temp2 = [];  
        temp = this.globalData;
        temp = _.map(temp.data.data, (result) => {
            if(result.name.includes(this.searchText)){
                console.log('result.country', result.name)
                temp2.push(result);
                console.log('TMPEPE: ', temp2, result.name);
            }
        });
        temp = _.without(temp2, undefined);
        console.log('Temp: ', temp);
        this.globalData.data.data = temp;
        console.log('Datta: ', this.globalData.data.data);
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
.flag-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 20px;
    font-weight: bold;
}
.country-name {
    padding-left: 10px;
}
</style>
