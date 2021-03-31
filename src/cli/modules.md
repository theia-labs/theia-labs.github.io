# Les modules

Pour accéder à l'aide de chaque module, lancer la commande suivante :

```bash
theia-cli [module] help
```

## Authentification

```bash
theia-cli auth
```

Ce module permet de se connecter à l'API pour obtenir un jeton d'authentification. Ce jeton peut par exemple être utilisé pour tester l'API depuis

- [https://elffe.theia.fr/api](https://elffe.theia.fr/api)

- [https://side-sante.fr/api](https://side-sante.fr/api)


## Calcul de score

```bash
theia-cli calculate-score --examId=[id de l'examen]
```

Ce module récupère les notes d'un examen donné et les exporte au format CSV.

## Calcul de toutes les notes

```bash
theia-cli calculate-multiple-scores
```

Ce module récupère les notes de tous les examens et les exporte au format CSV.

## Configuration

```bash
theia-cli config
```

Ce module est utilisé pour configurer la CLI. Pour plus d'informations sur la configuration de la CLI, vous pouvez vous référer au [guide d'utilisation](./guide.md#configuration).

Cette commande va afficher un formulaire afin de définir les différentes variables de configuration.

Il est aussi possible de réinitialiser une partie ou toutes les valeurs de configuration avec la commande suivante :

```bash
theia-cli reset-config
```

Cette commande va afficher un formulaire pour choisir les variables à réinitialiser.
