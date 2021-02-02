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
     * TODO  role 'ASSESSMENT' AUDIT_COLLECTION, AUDIT_SETTING, DATA_DISCOVERY, MASKING does not exist
     * Common user is CDB user: https://docs.oracle.com/database/121/ADMQS/GUID-DA54EBE5-43EF-4B09-B8CC-FAABA335FBB8.htm
     * @param {string} DATASAFE_ADMIN
     * @param {string} password
     * @param {string} defaultTablespace
     */
    async createServiceAccount(DATASAFE_ADMIN, password, defaultTablespace = 'USERS') {
        if (['SYSTEM', 'SYSAUX'].includes(defaultTablespace.toUpperCase())) {
            throw Error(`Do not use 'SYSTEM' or 'SYSAUX' as the default tablespace. You cannot mask data if you use these tableSpaces.`)
        }

        const SQL = `
            CREATE USER c##${DATASAFE_ADMIN} identified by "${password}" DEFAULT TABLESPACE "${defaultTablespace}" TEMPORARY TABLESPACE "TEMP";
            GRANT CONNECT,RESOURCE TO c##${DATASAFE_ADMIN}
            `
        await this.connectionManager.execute(SQL)
    }

    async deleteServiceAccount(DATASAFE_ADMIN) {
        const SQL = `DROP USER c##${DATASAFE_ADMIN} CASCADE`
        await this.connectionManager.execute(SQL)
    }
}

module.exports = DataSafeSetup

