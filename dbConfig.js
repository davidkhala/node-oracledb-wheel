const {SYSDBA} = require('oracledb')

class DbConfig {
    constructor({user, password, connectString}) {
        const config = {user, password, connectString}
        if (['SYS'].includes(user.toUpperCase())) {
            config.privilege = SYSDBA
        }
        Object.assign(this, config)
    }
}

module.exports = DbConfig