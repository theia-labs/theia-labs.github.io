# The modules

To access the help for each module, run the following command:

```bash
theia-cli [module] help
```

## Authentication

```bash
theia-cli auth
```

This module allows to connect to the API to get an authentication token. This token can for example be used to test the API from

- [https://elffe.theia.fr/api](https://elffe.theia.fr/api)

- [https://side-sante.fr/api](https://side-sante.fr/api)


## Score calculation

```bash
theia-cli calculate-score --examId=[exam id]
```

This module retrieves the scores of a given exam and exports them in CSV format.

## Calculation of all scores

```bash
theia-cli calculate-multiple-scores
```

This module retrieves the scores of all exams and exports them in CSV format.

## Configuration

```bash
theia-cli config
```

This module is used to configure the CLI. For more information about the CLI configuration, you can refer to the [configuration guide](./guide.md#configuration).

This command will display a form to define the different configuration variables.

It is also possible to reset some or all of the configuration values with the following command:
```bash
theia-cli reset-config
```

This command will display a form to choose the variables to reset.
