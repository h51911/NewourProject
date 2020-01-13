let toast = require('../utils/toast');

function Watch(dbName) {
    return (
        async (req, res) => {
            let { dataName, dataId } = req.query;
            // dataName, dataId 搜索功能请求封装  hotelName, uid
            let hotelName = dataName;
            let uid = dataId;
            let result;
            if (uid) {
                // 有参数时，按参请求
                result = await find(dbName, { querys: { uid } });
            } else if (hotelName) {
                // 有参数时，按参请求
                result = await find(dbName, { querys: { hotelName } });
            } else if (uid && hotelName) {
                // 两个参数时，以前者为主
                result = await find(dbName, { querys: { uid, hotelName } });
            } else {
                // 没有参数时，请求失败
                result = {
                    data: []
                }
            }
            let { data } = result;
            if (data.length >= 1) {
                res.send(toast({ data }));
            } else {
                res.send(toast({ code: 0 }));
            }
        }
    )
}

module.exports = Watch;