import Mock from 'mockjs'

// 引入 JSON 数据文件, webpack 在进行打包时会默认暴露 JSON 文件，所以不需要额外配置暴露
import banners from './banners.json'
import floors from './floors.json'

// 配置 mock 数据
Mock.mock('/mock/banner', banners)
Mock.mock('/mock/floor', floors)
