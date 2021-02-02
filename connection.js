const oracledb = require('oracledb');

/**
 * non-pooled connection
 */
class ConnectionManager {
    constructor(config, logger = console) {
        Object.assign(this, {config, logger})
    }

    async _connectIfNotExist() {
        if (!this.connection) {
            await this.connect();
        }
    }

    async connect() {
        const connection = await oracledb.getConnection(this.config);
        this.logger.info('Connection was successful!');
        this.connection = connection
    }

    async close() {
        const connection = this.connection;
        if (connection) {
            await connection.close();
        }
    }

    async execute(SQL) {
        await this._connectIfNotExist();
        const result = await this.connection.execute(SQL);
        this.logger.info(result)
        return result
    }
}

module.exports = ConnectionManager