var searchIndex = {};
searchIndex["r2d2_postgres"] = {"doc":"Postgres support for the `r2d2` connection pool.","items":[[3,"PostgresConnectionManager","r2d2_postgres","An `r2d2::ManageConnection` for `postgres::Connection`s.",null,null],[4,"SslMode","","Like `postgres::SslMode` except that it owns its `NegotiateSsl` instance.",null,null],[13,"None","","Like `postgres::SslMode::None`.",0,null],[13,"Prefer","","Like `postgres::SslMode::Prefer`.",0,null],[13,"Require","","Like `postgres::SslMode::Require`.",0,null],[4,"Error","","A unified enum of errors returned by postgres::Connection",null,null],[13,"Connect","","A postgres::error::ConnectError",1,null],[13,"Other","","An postgres::error::Error",1,null],[11,"fmt","","",0,{"inputs":[{"name":"sslmode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",1,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",1,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[11,"fmt","","",2,{"inputs":[{"name":"postgresconnectionmanager"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new `PostgresConnectionManager`.",2,{"inputs":[{"name":"t"},{"name":"sslmode"}],"output":{"name":"result"}}],[11,"connect","","",2,{"inputs":[{"name":"postgresconnectionmanager"}],"output":{"name":"result"}}],[11,"is_valid","","",2,{"inputs":[{"name":"postgresconnectionmanager"},{"name":"connection"}],"output":{"name":"result"}}],[11,"has_broken","","",2,{"inputs":[{"name":"postgresconnectionmanager"},{"name":"connection"}],"output":{"name":"bool"}}]],"paths":[[4,"SslMode"],[4,"Error"],[3,"PostgresConnectionManager"]]};
initSearch(searchIndex);