// 环境配置封装
// 默认生产环境
// const env = import.meta.env.MODE || 'prod';
const env = 'test';
const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/4333056944a33dba0da4d4895c059a6a/api'
    },
    test: {
        baseApi: '//test.feature.com/api',
        mockApi: 'https://www.fastmock.site/mock/4333056944a33dba0da4d4895c059a6a/api'
    },
    prod: {
        baseApi: '//feature.com/api',
        mockApi: 'https://www.fastmock.site/mock/4333056944a33dba0da4d4895c059a6a/api'
    },
}
export default {
    // 开发环境,使用上面实例化的env
    env,
    mock: true,
    // baseApi: 'www.baidu.com',//test-www.....
    // 得用上面的env解构出来的
    // 把env当做一个动态参数去获取Envconfig这个对象里边的属性名和属性值
    ...EnvConfig[env]
}
// console.log(EnvConfig[env])
