# .env file
create a file .env for database information

# DB Installation
1. Install [Docker](https://www.docker.com/)
2. Run the following commands
    ```powershell
    docker pull mcr.microsoft.com/mssql/server 
    docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Password5!" \ 
        -p 1433:1433 
        --name sql1 
        --hostname sql1 \ 
        -d 
        \ mcr.microsoft.com/mssql/server:2022-latest
    ```
