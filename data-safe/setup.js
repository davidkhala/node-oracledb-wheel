// https://docs.oracle.com/en-us/iaas/data-safe/doc/register-db-systems-that-have-public-ip-addresses.html#UDSCS-GUID-BECC57A2-8F72-4115-976F-A36DBC6929B0

// TODO WIP
`
CREATE USER ${DATASAFE_ADMIN} identified by ${password};
GRANT CONNECT,RESOURCE,ASSESSMENT,AUDIT_COLLECTION,DATA_DISCOVERY,MASKING,AUDIT_SETTING TO ${DATASAFE_ADMIN};
`