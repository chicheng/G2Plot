import { FanGauge } from '@antv/g2plot';

const gaugePlot = new FanGauge(document.getElementById('container'), {
  title: {
    visible: true,
    text: '扇形仪表盘',
  },
  // style: 'fan',
  width: 400,
  height: 400,
  value: 34,
  min: 0,
  max: 100,
  range: [0, 70],
  format: (v) => {
    return v + '%';
  },
  gaugeStyle: {
    colors: ['l(0) 0:#b0d0ff 1:#5f92f9'],
    tickLabelSize: 16,
    stripWidth: 20,
    pointerColor: 'rgba(0,0,0,0)',
    statisticPos: ['50%', '80%'],
    tickLabelPos: 'outer',
  },
});
gaugePlot.render();
