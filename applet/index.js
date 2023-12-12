Page({
  data: {
    time: ''
  },
  onLoad: function () {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  },
  updateTime: function () {
    const now = new Date();
    const timeString = `${this.formatNumber(now.getHours())}:${this.formatNumber(now.getMinutes())}:${this.formatNumber(now.getSeconds())}`;
    this.setData({ time: timeString });
  },
  formatNumber: function (n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }
});