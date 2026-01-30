## 1. Système d'exploitation


> Un système d’exploitation (SE) est un programme (ou un ensemble de programmes) qui assure la communication
entre le matériel (hardware) et les logiciels (software).

=> operating system (OS)

!!! note Principaux OS
Les principaux OS sont:
- **Windows** Microsoft
- **MacOS** Apple
- **Unix** Solaris
- **ChromeOs** Google
- **Android** Google
- **IOS** Apple
- **FreeBSD**
- **Gnu/Linux**

Les 6 premiers sont des logiciels propriétaires tandis que les deux derniers sont **libres**.

A l'exception de **Windows**, tous ces OS appartiennent à la famille *Unix-Like* : les commandes sont standardisées.
!!!

Rem:
> « First, the freedom to copy a program and redistribute it to your neighbours, so that they can use
it as well as you. Second, the freedom to change a program, so that you can control it instead of it
controlling you ; for this, the source code must be made available to you » (Richard Stallman, Free Software Fundation)


Quelques exemples de logiciels libres : Linux, Python, FireFox, LibreOffice, Gimp, OBS Studio,...

## 2. Le père de tous les OS : UNIX

Il est developpé en **1971/1972** par K.thompson et D.Ritchie. Ils ont inventé **le langage C** pour écrire leur OS appelé UNIX.

Cet OS est célèbre pour son interpètre de commande appelé *Terminal* ou *Shell*.


En 1991, un étudiant finlandais **Linus Torvald** envoie un mail avec une pièce jointe contenant le noyau d'un système d'expoloitation libre inspiré d'UNIX : **Linux**.


## 3. Quelques commandes dans le shell (bash):

Une commande s'écrit après le prompt qui se termine par le symbole `$`.

Une commande possède toujours une syntaxe:
- `nom` de la commande
- `options` facultatives
- `arguments` facultatifs

Il existe un commande qui affiche le manuel/ la documentation d'une autre commande passée en argument : `man`

Syntaxe générale:    `nom --option argument` ou `nom -option argument`

|nom|rôle|exemple|
|----|----|----|
|`whoami`|affiche le nom de l'utilisateur|`$ whoami`|
|`man`|affiche le manuel d'une autre commande|`$ man whoami`|
|`touch`|créer un fichier *vide*|`$ touch monfichier`|
|`ls`|liste le contenu d'un dossier|`$ ls -l`|
|`mkdir`|créer un dossier *vide*|`$ mkdir monDossier`|
|`nano`|éditer un fichier|`$ nano monfichier`|
|`cat`|affiche le contenu des fichiers |`$ cat monfichier`|
|`history`|affiche l'historique des commandes |`$ history`|
|`tree`|affiche l'arborescence du dossier courant `./` |`$ tree`|
|`pwd`|affiche le chemin absolu vers le dossier courant `./` |`$ pwd`|
|`cd`|changer de dossier courant |`$ cd <chemin abs ou rel>`|
|`cp`|copier une source vers une destination |`$ cp <source> <destination>`|
|`rm`|supprimer des dossiers ou des fichiers |`$ rm -r <chemin>`|
|`mv`|couper ou renommer des fichiers |`$ mv <source> <destination>`|
|`echo`|affiche un texte sur la sortie standard (ecran) |`$ echo "i love u"`|
|`chmod`|modifie les permissions des fichiers(dossiers) |`$ chmod 777 monFichier`|

---------------
Pour éditer un fichier plusieurs commandes/éditeurs sont possibles :
- `nano` (dans ce cours)
- `vi`
- `emacs`
-----------------
Dans la console, `./` est facultatif.

-----------------
On peut rappeler une commade à partir de son numéro (n) dans l'historique:

```bash
$ !n
```
---------------
Le chemin absolu vers un fichier ou un dossier est le chemin depuis la racine (*root*) `/` : par
exemple `/workspaces/GpeMercredi`.

Un chemin relatif commence par `./` ou `../` : on part du dossier courant.

La maison de l'utilisateur (`/home/utilisateur` ou `~`) est accessible avec la commande `cd` sans argument.

---------------
la commande `cp`peut copier et renommer.

```bash
$ cp cheminVersFichier cheminVersDossier/
```
```bash
$ cp cheminVersFichier cheminVersDossier/NouveauNom
```

La commande `mv` se comporte de manière semblable.

----------------
La commande `rmdir` supprime des dossiers vides; on lui préfère souvent `rm -r` qui supprime les fichiers
et les dossiers.

-----------------
Il est possible d'écrire des commandes dans un fichier portant l'extension `.sh` ; pour exécuter ce fichier:

```bash
./monFichier.sh
```

Par défaut, les fichier sur Linux ne sont pas exécutables. Quand on crée un fichier (un dossier), il possède
des **permissions** qui peuvent être différentes pour:
- `user` c'est le propriétaire
- `group` c'est le memebre d'un groupe particulier
- `other` le reste du monde

Les permissions sur un fichier (un dossier) sont:
- *read*: `r` valeur 4
- *write*: `w` valeur 2
- *execute*: `x` valeur 1

La command `chmod nnn` permet de modifier les permissions ; il existe une autre syntaxe avec les lettres `u,g,o` (user, group, other) et les symboles `+, -` pour ajouter ou retirer des droits.

```bash
chmod 754 ./monFichier                # rwx pour user, rx pour group, r pour other
chmod u-x,g+rw,o+w ./monFichier       # retire x pour user, ajoute rw pour group, ajoute w pour other
```

----------

Le symbole `>` ou `>>` permet de *rediriger* la sortie d'une commande vers un fichier. Si ce fichier
n'existe pas, alors il est crée.