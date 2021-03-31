# Utilisation

## Prérequis

theia-cli est une application node.js. Pour l'installer et l'utiliser, il faut donc avoir node.js et npm sur sa machine.

- [Node.js](https://nodejs.org/)

- [npm](https://www.npmjs.com/get-npm)


## Installation

Pour installer theia-cli de manière globale (exécutable depuis n'importe quel terminal), il faut lancer la commande suivante :

```bash
npm install -g theia-cli
```

## Utilisation

Comme expliqué dans l'introduction, la CLI fonctionne avec des modules. Chaque module implémente une fonctionnalité.

Pour exécuter un module, il faut exécuter la commande suivante :

```bash
theia-cli [module] [options]
```

Pour connaitre la liste des modules, il est possible d'utiliser la commande suivante :

```bash
theia-cli help
```

Vous pouvez aussi consulter la [liste des modules](./modules.md).

## Configuration

Pour fonctionner, la CLI a besoins de plusieurs paramètres, tel que votre clé d'API. Pour éviter de saisir ces paramètres à chaque utilisation, il est conseillé de les définir de manière persistante à l'aide de la commande [`theia-cli config`](modules.md#configuration)

Les paramètres configurables sont les suivants :

| Variable | Définition | Type |
| --- | --- | --- |
| key | Votre clé d'API | Chaîne de caractères |
| environment | L'URL de votre environnement (https://elffe.theia.fr ou https://side-sante.fr) | Chaîne de caractères |
| exportPath | Le chemin absolu du dossier dans lequel vous souhaitez enregistrer les fichiers exportés par la CLI | Chaîne de caractères |
| ratingScale | L'échelle de notation que vous souhaitez utiliser lors de l'export de notes | Nombre |
