### Le langage HTML

1. HTML

HyperText Markup Language *Langage de balises hypertexte*

Un fichier `.html` est un fichier de texte (comme le markdown par exemple). On ouvre un fichier de 2 façons:
- le développeur => avec un éditeur de code (ex: VisualStudio Code)
- l'utilisateur => avec un navigateur (ex: firefox)

Le plus souvent les balises html sont en couple (ouvrante/fermante) mais il existe aussi des balises *orpheline*:
- `<MaBalise></MaBalise>`
- `<Mabalise>`

La structure minimale d'une page web est:

```html
<!DOCTYPE html>
<html>  
<head></head>
<body></body>
</html>
```

Le site de référence pour les langages du WEB est le site des développeurs de Mozilla.
[https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)

Quelques balises à connaître:
- `<body></body>` contient tout ce qui est visible sur la page
- `<head></head>` contient ce qui n'est pas visible sur la page (ex `<title></title>`)
- `<h1></h1>` permet de faire de titres sur la page
- `<p></p>` permet de faire un paragraphe
- `<a href=""></a>` permet d'accrocher le curseur pour cliquer vers un lien
- `<br>` pour casser la ligne
- `<img src="">` pour insérer une image
- `<ul></ul>` pour réaliser une liste sans ordre
- `<ol></ol>` pour réaliser une liste ordonnée
- `<li></li>` pour insérer des items dans une liste


Les balises ouvrantes peuvent contenir des attributs définis sur le site de référence ou l'attribut `class=""`:<br>
`<maBalise attribut=""></maBalise>`

---------------
Pour donner le chemin relatif vers un fichier, on utilise:
- `./` pour chercher dans le dossier courant
- `../` pour chercher dans le dossier du dessus


2. Le CSS
Cascading Style Sheet *feuille de style en cascade*
[https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties)

Pour définir du style, il faut un sélecteur (element HTML ou class), des accolades, une propriété, une valeur.

```css
selecteur{
    propriete:valeur;
}

```

On peut écrire le CSS:
- dans le fichier html entre les balises `<style></style>`
- dans un fichier dédié avec l'extension `.css` ; il faut ajouter
une balise `<link rel="stylesheet" href="">`


Il existe plus de 500 propriétés et encore davantage de valeurs possibles mais souvent, les valeurs sont :
- des couleurs (soit un nom soit un code comme rgb(0-255, 0-255, 0-255))
- des tailles : plusieurs unités sont possibles
    - `px` pour pixels
    - `em` relatif à la taille de la police
    - `%` relatif à la taille du contenant


Rem: Quand le sélecteur css est un élément HTML (par exemple `p`) alors les propriétés s'appliquent à tous les éléments du même type.

Pour différencier des éléments de même nature, on peut utiliser l'attribut `class` ou `id`. Dans ce cas, le sélecteur est le nom de la classe précédé d'un `.` ou le nom de l'identifiant précédé d'un `#`.


Rem: Le contenu d'un élément HTML suit le principe du modèle en boîte.
[https://www.w3schools.com/css/css_boxmodel.asp](https://www.w3schools.com/css/css_boxmodel.asp)


Trois propriétés importantes sont liées à ce modèle:
- `border` pour le style de la bordure
- `padding` pour l'espace interne
- `margin` pour la marge autour de la bordure


Rem: Il existe des propriétés spécifiques au texte, en parfticulier:
- `text-align` pour justifier le texte.
- `font` pour la police de caractères



Ils existe deux balises HTML universelles qui permettent de grouper des éléments ou du texte:
- `<div></div>`
-`<span></span>`


3. Javascript

Ctrl + Shift + i pour obtenir la console

Il s'agit d'un langage de programmation comme Python mais initialement dédié au WEB.

C'est un langage prévu pour interagir avec une page HTML : le document
peut se représenter ainsi:

Imagesimplifiée du DOM (Document Object Model)
```
window
├── alert()
└── document
    ├── getElementById()
    ├── querySelector()
    │       ↓
    │   élément HTML
    │       ├── innerHTML
    │       ├── style
    │       │     ├── color
    │       │     ├── backgroundColor
    │       │     └── display
    │       └── addEventListener()
```




Le JS permet de rendre une page HTML plus dynamique notamment
grâce aux formulaires `<form></form>`.

Les éléments HTML interactifs sont généralement des `<input type="">`:
- button
- checkbox
- text
- range
- password ...


Pour écrire du JS on utilise les balises `<script></script>` et :
- on écrit directement le code dans le fichier HTML
- on écrit le code dans un fichier .js


Pour attraper un élément sur la page afin de la manipuler avec JS, on peut utiliser:
- `querySelector()`
- `getElementById()`


On écrira : 
```js
let elementHTML = document.querySelector(""); //avec un sélecteur css
let elementHTML = document.getElementById(""); // avec un id
```

La plupart des éléments HTML interactifs ont une propriété `value`.

```js
console.log(elementHTML.value);
```

JS est capable d'associer un évènement à un élément HTML:
- click
- change
- input
- mouseover ....


On utilise la méthode `addEventListener()`

```js
elementHTML.addEventListener("event", function(){
// faire qqchose
});
```