<template>
  <div>
    <h1 class="header">India</h1>
    <v-text-field class="header" placeholder="E.g: Tamilnadu" solo prepend-inner-icon="search" append-icon="forward" label="Search" @input="bindText" @click:append="search"></v-text-field>
    <div v-if="indiaData.data.data.regional && indiaData.data.data.regional.    length>0">
    <div v-if="isLoading" class="main-container row-flex">
        <v-progress-circular
        indeterminate
        color="#00589d"
        ></v-progress-circular>
    </div>
    <div class="main-container" v-for="data in indiaData.data.data.regional" :key="data">
        <div class="main-card">
            <div class="flag-container">
                <span class="country-name">{{data.loc}}</span>
            </div>
            <div class="row-flex">
                <div class="card column-flex">
                    <span class="card-title">Deaths</span>
                    <div class="row-flex">
                        <span class="card-text red-text">{{data.deaths}}</span>
                    </div>
                </div>
                <div class="card column-flex">
                    <span class="card-title">Confirmed</span>
                    <div class="row-flex">
                        <span class="card-text">{{data.totalConfirmed}}</span>
                        <span class="card-current">{{data.confirmedCasesIndian}} + {{data.confirmedCasesForeign}}</span>
                    </div>
                </div>
                <div class="card column-flex">
                    <span class="card-title">Recovered</span>
                    <span class="card-text green-text">{{data.discharged}}</span>
                </div>
            </div>
        </div> 
    </div>
    </div>
    <div v-else class="main-container">
        <h2>No state found</h2>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import _ from 'lodash'
export default {
  name: "India",
  data() {
      return {
        indiaData: null,
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
        await axios.get('https://api.rootnet.in/covid19-in/stats').then(response => (this.indiaData = response));
    },
    bindText(val) {
        this.searchText = val;
    },
    async search() {
        await this.getData();
        let temp, temp2 = [];  
        temp = this.indiaData;
        temp = _.map(temp.data.data.regional, (result) => {
            if(result.loc.includes(this.searchText)){
                temp2.push(result);
            }
        });
        temp = _.without(temp2, undefined);
        this.indiaData.data.data.regional = temp;
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
