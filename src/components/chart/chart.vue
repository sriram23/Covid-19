<template>
  <div id="chart-container">
    <div>
      <canvas class="chart-style" ref="chart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "Chart",
  props: [
    'captions',
    'deaths',
    'activeCases',
    'recovered',
  ],
  mounted() {
    var chart = this.$refs.chart;
    var ctx = chart.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: this.captions,
        datasets: [
          {
            label: 'Deaths',
            data: this.deaths,
            backgroundColor: '#F90000',
            borderColor: '#FFFFFF',
          },
          {
            label: 'Recovered',
            data: this.recovered,
            backgroundColor: '#27EE0B',
            borderColor: '#FFFFFF',
          },
          {
            label: 'Confirmed Cases',
            data: this.activeCases,
            backgroundColor: '#EE760B',
            borderColor: '#FFFFFF',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
              },
            },
          ],
        },
      },
    },);
  },
};
</script>

<style lang="scss" scoped>
.chart-style {
    margin-left: 180px;
    width: 85vw !important;
    height: 95vh !important;
}
@media (max-width: 768px) {
    .chart-style {
        margin-left: unset;
        bottom: 30px;
        width: 100vw;
        height: 95vh;
    }
}
</style>