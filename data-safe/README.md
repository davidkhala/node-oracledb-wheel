# Data Safe



## Documentation
- https://docs.oracle.com/en/cloud/paas/data-safe/udscs/target-database-registration.html
- https://docs.oracle.com/en-us/iaas/data-safe/doc/register-db-systems-that-have-public-ip-addresses.html


## Type: Oracle Cloud Database
- Service Account for Oracle Data Safe should be a PDB local user, not CDB common user
   - `CDB$ROOT cannot be registered as a Target`
- Provide `ocid` of DB system or autonomous Database, not Database like `ocid1.database`
    - ```
      Unable to connect to the database    
      Valid ocid format is ocid1.<resource type>.<realm>.<region>.<unique id> , 
      Specify ocid of DB system(e.g. ocid1.dbsystem.oc1.iad.abc) or autonomous Database(e.g. ocid1.autonomousdatabase.oc1.iad.abc)`
## Type: Oracle Database on Compute
Build from [MarketPlace](https://cloud.oracle.com/marketplace/application/47726045/usageInformation)
