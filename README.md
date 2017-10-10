> Active Development. This product is in active development, and breaking changes
> as well as major refactors should be expected. As with all software, make sure
> the project works for you before using it.

# Verification Reporter
> Verification Report Generation for Clinical and Non-Clinicial Systems

Verification Reporter is a testing framework that can test a web-based system
programmatically, and output a report for inclusion in validation documentation.
The purpose of Verification Reporter is to automate the cumbersome validation process
encountered in clinical systems, especially regressive validations. Using a system
such as Verification Reporter can reduce the time it takes groups with regulatory
requirements weeks to introduce new software versions to their pipelines/workflows.

Verification Reporter is a docker-based project that uses test scenarios to
based in [cucumberjs]([https://github.com/cucumber/cucumber-js) and
[nightwatch](http://nightwatchjs.org/) (with the great library [nightwatch-cucumber](https://github.com/mucsi96/nightwatch-cucumber]))
to produce an html report.


## Installing / Getting started

To use Verification Reporter, you should first be familiar with [Docker](https://www.docker.com/).

1. Clone the application:

  ```
  > git clone https://github.com/CodeBiosys/verification-reporter
  > cd verification-reporter
  ```

2. Provision a new Docker machine called `verification-reporter`:

  ```
  > docker-machine create -d virtualbox verification-reporter
  > eval $(docker-machine env verification-reporter)
  > docker-machine ls
  NAME             ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER        ERRORS
  serval-develop   *        virtualbox   Running   tcp://192.168.99.100:2376           v17.06.0-ce
  ```

  **Note the asterisk in the "ACTIVE" column.**

3. Update the docker-compose.yml:
  Either use the docker-compose.yml example included, or update your own docker-compose to
  include a selenium_hub, and the verify service.
  Selenium details [https://hub.docker.com/r/selenium/hub/]

  You will need to make the following updates to the docker-compose file.
  Environment variables:
  - TEST_URL=http://www

    Test url needs to point to the system under test. You can use a docker internal url, or an external url that you control. Using automated test frameworks on sites you do not own is considered bad form.

  Volumes:
  - ./custom:/app/custom
  The following directories are expected to be in /app/custom (all, except for features)

  - /app/custom/features

    The [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin) features to test your application

  - /app/custom/pages

    Where [nightwatch page objects](https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API) are located which can be used in the features

  - /app/custom/output

    This is where reports will be placed when they are generated.

  - /app/custom/steps

    This is where steps specific to your system under test will be accessed. Example steps include building out your database, or logging into your system.


3. Build the application stack and start the services:
  ```
  > docker-compose build
  > docker-compose up -d
  ```

3. Build the application stack and start the services:
  ```
  > docker-compose build
  > docker-compose up -d
  ```

4. Run the tests:
  ```
  > docker-compose run verify yarn run verify
  ```
5. Generate the report:
  ```
  > docker-compose run verify yarn run report
  ```

You should now see a report in your mounted output volume.

## Developing

Custom Gherkin steps needed for your application should be placed in the
/app/custom/steps directory.

### Building

TBD

### Deploying / Publishing

TBD

## Features

Verification-Reporter will programmatically reproduce the process of verifying
a web application, and produce a report for teams interested in a report that
is usable by non-developers to prove the validity of the system under test.

- [x] Test Dockerized environments.
- [ ] List available Gherkin statements.
* [x] Generate a report for review.
* [ ] Generate a pdf version of the report.
* [ ] Include system version information of system used for testing.

## Configuration

Configuration options are set through docker environment variables, and
can be seen in `/src/constants.js`.

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are welcome.

## Licensing

The code in this project is Copyright CodeBiosys, Inc, and licensed under the
MIT license, and the specifics can be found in `LICENSE`.
