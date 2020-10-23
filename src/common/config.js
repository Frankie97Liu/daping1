import api from '@@src/assets/js/common';

const url = api.getUrl();

const apiFileList = `${url}/guoy/file/fileList`;
const apiFileDownload = `${url}/guoy/file/fileDownload`;

const apiPrizeList = `${url}/guoy/prize/prizeList`;
const apiPrizeYear = `${url}/guoy/prize/prizeYear`;
const apiGetPrizeById = `${url}/guoy/prize/getPrizeById`;

const apiArticleList = `${url}/guoy/article/articleList`;
const apiArticleById = `${url}/guoy/article/getArticleById`;

//首页
const apiTopImg = `${url}/guoy/homeTop/selectTop5`;
const apiExpert = `${url}/guoy/assocExpert/selectAll`;

export default {
  apiFileList,
  apiFileDownload,
  apiPrizeList,
  apiPrizeYear,
  apiGetPrizeById,
  apiArticleList,
  apiArticleById,
  apiTopImg,
  apiExpert
}
