import echarts from 'echarts';

const geoCoordMap = [];
const mapFeatures = echarts.getMap("self").geoJson.features;
mapFeatures.forEach(function(v) {
  // 拿到name
  const name = v.properties.name;
  // geoCoordMap[name] = 坐标，从而获取坐标
  geoCoordMap[name] = v.properties.cp;
});

export const renderMap = (data) => {

  const res = [];
    // 获取名称的坐标点
    const geoCoord = geoCoordMap[data];
    // console.log("allData1",geoCoord,data)
    if (geoCoord) {
      res.push({
        value: geoCoord,
      });
    }
  // console.log("allData13",res)
  return res;
};

