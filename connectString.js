class ConnectStringBuilder {
    constructor(DBUniqueName, hostDomainName) {
        this.setDatabaseUniqueName(DBUniqueName)
        this.setHostDomainName(hostDomainName)
    }

    setDatabaseUniqueName(DBUniqueName) {
        this.DBUniqueName = DBUniqueName
        return this
    }


    setHostnamePrefix(hostPrefix) {
        this.hostPrefix = hostPrefix
        return this
    }

    setHostDomainName(hostDomainName) {
        this.hostDomainName = hostDomainName
        return this
    }

    setPublicIP(ip) {
        this.ip = ip
        return this
    }

    build() {
        let FQDN
        if (this.ip) {
            FQDN = this.ip
        } else {
            FQDN = `${this.hostPrefix}.${this.hostDomainName}`;
        }
        return `${FQDN}:${this.port || 1521}/${this.DBUniqueName}.${this.hostDomainName}`
    }


}

module.exports = ConnectStringBuilder