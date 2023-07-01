import { ConnectionOptions } from "typeorm";

const config : ConnectionOptions ={
  type:'postgres',
  host:'localhost',
  port:5432,
  username:'blogclone',
  password:'123', 
  database:'blogclone',
  entities:[__dirname + '/**/*.entity{.ts,.js}'],
  synchronize:true,
  //migrations:[__dirname + '/migrations/**/*{.ts,.js}'],
  migrations: [/*...*/],
}

export default config;