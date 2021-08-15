root_dir=$(pwd)

cd fachada

./mvnw clean package -DskipTests

cd $root_dir

docker-compose up -d

docker-compose run cliente bundle exec rake db:migrate
