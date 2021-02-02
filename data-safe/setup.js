class DataSafeSetup {
    /**
     *
     * @param {ConnectionManager} connectionManager
     */
    constructor(connectionManager) {
        this.connectionManager = connectionManager
    }

    async createServiceAccount(DATASAFE_ADMIN, password) {
        const SQL = `CREATE USER ${DATASAFE_ADMIN} identified by ${password};
            GRANT CONNECT,RESOURCE,ASSESSMENT,AUDIT_COLLECTION,DATA_DISCOVERY,MASKING,AUDIT_SETTING TO ${DATASAFE_ADMIN};`
        await this.connectionManager.execute(SQL)
    }
}

module.exports = DataSafeSetup

