class ConnectStringBuilder {
    constructor(DBUniqueName, hostDomainName) {
        this.setDatabaseUniqueName(DBUniqueName)
        this.setHostDomainName(hostDomainName)
    }

    setDatabaseUniqueName(DBUniqueName) {
        this.DBUniqueName = DBUniqueName
    }


    setHostnamePrefix(hostPrefix) {
        this.hostPrefix = hostPrefix
    }

    setHostDomainName(hostDomainName) {
        this.hostDomainName = hostDomainName
    }

    setPublicIP(ip) {
        this.ip = ip
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