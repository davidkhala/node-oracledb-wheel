# node-oracledb-wheel
node-oracledb enhancement tool


## Notes
- Oracle comes with the following default tablespaces: `SYSTEM`, `SYSAUX`, `USERS`, `UNDOTBS1`, and `TEMP`.
- [ConnectionString for PDB](https://docs.oracle.com/en-us/iaas/Content/Database/Tasks/connectingDB.htm#ariaid-title6)
- When we change shape of DB VM, it will gracefully drain connections, and OCI console showing UPDATING
## dependency issue
- `show ...` is `ORA-00900: invalid SQL statement` because it is a SQL*Plus command
- Transactional support