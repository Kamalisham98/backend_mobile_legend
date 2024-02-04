# -backend_mobile_legend

## Create Migration && Seeding

`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`
to create `User` with attributes in it, attribute atleast 1 must exist, other can be add manuali on 'models/...'

### comment on migration

- npx sequelize-cli db:migrate
- npx sequelize-cli db:migrate:undo (undo last migration)
- npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js (to undo until certain migration file)

### Seeding

- npx sequelize-cli seed:generate --name demo-user
- npx sequelize-cli db:seed:all
- npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

source: https://sequelize.org/docs/v6/other-topics/migrations/
