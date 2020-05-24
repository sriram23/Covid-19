<template>
    <div>
        <Chart :captions=currentDate :deaths=deaths :activeCases=activeCases :recovered=recovered />
    </div>
</template>

<script>
import axios from 'axios';
import Chart from './chart/chart.vue'
export default {
    components: {
        Chart,
    },
    created() {
        this.getData();
    },
    data() {
        return {
            IndiaTrend: '',
            deaths: [],
            activeCases: [],
            currentDate: [],
            recovered: [],
        };
    },
    methods: {
        async getData() {
            await axios.get('https://api.covid19india.org/data.json').then(response => (this.IndiaTrend = response));
            await this.setTrends();
        },
        async setTrends() {
            this.IndiaTrend.data.cases_time_series.forEach((elements) => {
                this.deaths.push(elements.dailydeceased);
                this.activeCases.push(elements.dailyconfirmed);
                this.currentDate.push(elements.date);
                this.recovered.push(elements.dailyrecovered);
            });
        },
    }
}
</script>