# Présentation

theia-cli est un programme permettant de faire des requêtes sur l'API de Theia depuis une interface de ligne de commandes. Il peut aussi servir de base pour créer une application qui utilise cette même API.

## Fonctionnalités

La CLI permet de récupérer les données via l'API de Theia, puis de traiter ces données pour les exporter au format CSV par exemple.

Les différentes fonctionnalités sont organisées sous forme de module. Ainsi, il est possible de créer un nouveau module pour ajouter une fonctionnalité à la CLI.

La liste de tous les modules est disponible [ici](./modules.md).

## Rate limiting

Afin d'éviter qu'un grand nombre d'appels consécutifs sur l'API impacte les performances de l'application, un rate limiting a été mis en place afin de limiter le nombre de requêtes à 5/sec. Au-delà de cette fréquence, les requêtes sont mises dans une queue qui peut contenir jusqu'à 30 requêtes. Pour éviter que des requêtes ne soient pas prises en compte à cause de cette limite, la CLI respecte cette fréquence de requêtes.

## Cache

La fréquence des requêtes étant limité par un rate limiting, afin d'optimiser la CLI, il est important de faire le moins de requête possible. C'est pourquoi un cache a été mis en place afin de ne pas répéter deux requêtes.
