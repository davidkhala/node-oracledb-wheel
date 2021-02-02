/**
 * Reference: https://docs.oracle.com/en-us/iaas/data-safe/doc/register-db-systems-that-have-public-ip-addresses.html#UDSCS-GUID-06A42C4E-1132-4E80-8F83-E553FB3A8AED
 */
class DataSafeSetup {
    /**
     *
     * @param {ConnectionManager} connectionManager
     */
    constructor(connectionManager) {
        this.connectionManager = connectionManager
    }

    /**
     * @param {string} DATASAFE_ADMIN
     * @param {string} password
     * @param {string} defaultTablespace
     */
    async createServiceAccount(DATASAFE_ADMIN, password, defaultTablespace = 'USERS') {
        if (['SYSTEM', 'SYSAUX'].includes(defaultTablespace.toUpperCase())) {
            throw Error(`Do not use 'SYSTEM' or 'SYSAUX' as the default tablespace. You cannot mask data if you use these tableSpaces.`)
        }

        const SQL = `CREATE USER ${DATASAFE_ADMIN} identified by ${password} DEFAULT TABLESPACE "${defaultTablespace}" TEMPORARY TABLESPACE "TEMP";
            GRANT CONNECT,RESOURCE,ASSESSMENT,AUDIT_COLLECTION,DATA_DISCOVERY,MASKING,AUDIT_SETTING TO ${DATASAFE_ADMIN};`
        await this.connectionManager.execute(SQL)
    }
}

module.exports = DataSafeSetup

