String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

sujets = [
  "Adel","Adil","Allison","Barbosa","Charlotte","Delphine","Denise-Laure",
  "Emilia","Fabien","Jean-Hugues","Julie","Julien","Kenams","Kalilou","Matthieu",
  "Mehdi","Naomi","Mohsen","Noor","Paco","Sandrina","Yamine","Yoan","Yohann",
  "Zacharia","Zaratustra"
]

rimes = ["L","L","N","A","T","N","R","A","UN","G","I","UN","S","OU","EU","I","I","N","R","O","A","N","N","N","A","A"]

verbes = [
"se balade",
"créer",
"dessine",
"écoute",
"imagine",
"invente",
"libère",
"disparaît",
"obscurcit",
"rêve",
"sent",
"voyage"
]

adjectif = [
"shuga shuga tchou tchou",
"un geste fou",
"je suis ton père",
"mon précieux",
"téléphone maison",
"c'est pas faux",
"A taaaable",
" ",
" ",
" ",
" ",
" ",
" ",
]

cods = {
 L: ["une hirondelle", "une citadelle"],
 N: ["une vermine","une voisine", "une sardine", "une routine", "une victime"],
 A: ["de la vodka", "au Sri-Lanka","la samba", "une pizza", "panda"],
 T: ["une pelotte"],
 R: ["une fleur", "nature"],
 UN: ["un chien"],
 G: ["une meringue"],
 I: ["ET", "vivaldi", "zombi"],
 S: ["son fils"],
 OU: ["un hibou"],
 EU: ["un paresseux"],
 O: ["un bâteau"]
}


rang = Math.floor(Math.random() * sujets.length);
rime = rimes[rang];

ver1_sujet = sujets[Math.floor(Math.random() * sujets.length)]
ver1_verbe = verbes[Math.floor(Math.random() * verbes.length)]

rang = Math.floor(Math.random() * cods[rime].length)
ver1_cod = cods[rime][rang]
cods[rime].splice(rang, 1)

ver2_sujet = sujets[Math.floor(Math.random() * sujets.length)]
ver2_verbe = verbes[Math.floor(Math.random() * verbes.length)]
ver2_adjectif = adjectif[Math.floor(Math.random() * adjectif.length)]
ver2_cod = cods[rime][Math.floor(Math.random() * cods[rime].length)]


poem = document.getElementById('poem')
poem.innerHTML="<p>"+ver1_sujet+" "+ver1_verbe+" "+ver1_cod+"</p><p>"+ver2_sujet+" "+ver2_verbe+" "+ver2_adjectif+" "+ver2_cod+"</p>"

