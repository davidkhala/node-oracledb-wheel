const ConnectionManager = require('../connection')
const Builder = require('../connectString')
const DBConfig = require('../dbConfig')
const {password, DBUniqueName, hostDomainName, ip} = process.env;
describe('non-pool connection', () => {

    it('touch', async () => {
        const config = new DBConfig({
            user: "sys",
            password,
            connectString: new Builder(DBUniqueName, hostDomainName).setPublicIP(ip).build()
        })
        const connectionBuilder = new ConnectionManager(config)
        await connectionBuilder.connect()
        await connectionBuilder.close()
    })


})