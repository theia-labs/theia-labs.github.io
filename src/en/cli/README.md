# Presentation

theia-cli is a program that allows you to make requests to the Theia API from a command line interface. It can also be used as a basis for creating an application that uses this same API.

## Features

The CLI allows you to retrieve data via the Theia API, and then process this data to export it in CSV format for example.

The different functionalities are organized in the form of modules. Thus, it is possible to create a new module to add a functionality to the CLI.

The list of all modules is available [here](./modules.md).

## Rate limiting

In order to avoid a large number of consecutive calls to the API impacting the application's performance, a rate limiter has been set up to limit the number of requests to 5/sec. Beyond this rate, requests are put in a queue that can contain up to 30 requests. To avoid that requests are not taken into account because of this limit, the CLI respects this frequency of requests.

## Cache


The frequency of the requests being limited by a rate limiting, in order to optimize the CLI, it is important to make as few requests as possible. That's why a cache has been set up in order not to repeat two requests.

