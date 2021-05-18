module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}



// module.exports = {
//   chainWebpack: config = {
//     config.resolve.alias
//       // src已经设置过,不再进行设置 @: /Users/stephanie/Desktop/supermall/src,
//       .set(components,' @/components')
//       .set(common, '@/common')
//       .set(assets, '@/assets')
//       .set(network, '@/network')
//       .set(views, '@/views');
//   }
// };