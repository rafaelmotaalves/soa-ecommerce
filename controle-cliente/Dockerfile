FROM ruby:2.6.4

RUN apt-get update && apt-get install -y build-essential libpq-dev git-core curl zlib1g-dev libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev

RUN mkdir /controle-cliente

WORKDIR /controle-cliente

RUN curl -sL https://deb.nodesource.com/setup_15.x | bash -
RUN apt-get install -y nodejs

ADD Gemfile /controle-cliente/Gemfile
ADD Gemfile.lock /controle-cliente/Gemfile.lock

RUN gem update --system

RUN gem install bundler

RUN bundle install

RUN npm install -g yarn

RUN npm install -g npm@7.20.6

ADD . /controle-cliente