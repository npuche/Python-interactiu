const chapters = [
  {
    id: "interaccions",
    number: "01",
    title: "Interaccions bàsiques",
    description: "Aprèn a mostrar informació, guardar dades, preguntar a l'usuari i fer els primers càlculs.",
    sections: [
      {
        title: "Hola, món!",
        html: `<p>Un programa és una seqüència d'instruccions. Per mostrar text a la pantalla utilitzem la funció <code>print()</code>. El text s'escriu entre cometes.</p>
        <div class="code-block">print("Hola, món!")</div>
        <div class="callout tip"><strong>Recorda:</strong> Python diferencia majúscules i minúscules. <code>print</code> funciona, però <code>Print</code> no.</div>`
      },
      {
        title: "Variables",
        html: `<p>Una variable és un nom que fem servir per guardar un valor. La creem amb l'operador d'assignació <code>=</code>. Si li assignem un valor nou, l'anterior se substitueix.</p>
        <div class="code-block">salutacio = "Bon dia"
print(salutacio)
salutacio = "Bona tarda"
print(salutacio)</div>
        <p>Un nom de variable no pot tenir espais, no pot començar amb un número i només pot contenir lletres, números i guions baixos. És recomanable utilitzar noms descriptius en minúscules.</p>
        <p>Podem unir textos amb l'operador <code>+</code>. Aquesta operació s'anomena concatenació.</p>
        <div class="code-block">nom = "Ada"
print("Hola, " + nom)</div>`
      },
      {
        title: "Interactuar amb l'usuari",
        html: `<p>La funció <code>input()</code> mostra una pregunta, atura el programa i espera que l'usuari escrigui una resposta. Sempre retorna la resposta com a text.</p>
        <div class="code-block">nom = input("Com et dius? ")
print("Encantat de conèixer-te, " + nom)</div>
        <p><code>print()</code> i <code>input()</code> són funcions incorporades: eines que Python ja ens ofereix per fer tasques habituals.</p>`
      },
      {
        title: "Sintaxi i errors",
        html: `<p>La sintaxi és el conjunt de regles que defineixen com s'ha d'escriure el codi. Si falta un parèntesi, una cometa o escrivim malament una instrucció, Python ens mostrarà un error.</p>
        <div class="callout warning"><strong>Quan aparegui un error:</strong> llegeix-ne el tipus i el missatge, busca la línia indicada i revisa també la línia anterior.</div>
        <p>Els espais entre elements solen ser opcionals, però el sagnat al principi de línia té un significat especial i serà imprescindible en condicionals, bucles i funcions.</p>`
      },
      {
        title: "Tipus de dades",
        html: `<p>Cada valor té un tipus. Els més habituals al principi són:</p>
        <table class="concept-table"><thead><tr><th>Tipus</th><th>Python</th><th>Exemple</th></tr></thead><tbody>
        <tr><td>Text</td><td><code>str</code></td><td><code>"Hola"</code></td></tr>
        <tr><td>Nombre enter</td><td><code>int</code></td><td><code>42</code></td></tr>
        <tr><td>Nombre decimal</td><td><code>float</code></td><td><code>3.14</code></td></tr>
        <tr><td>Booleà</td><td><code>bool</code></td><td><code>True</code></td></tr></tbody></table>
        <p>Podem convertir valors amb <code>str()</code>, <code>int()</code> i <code>float()</code>. Això és especialment important perquè <code>input()</code> sempre retorna text.</p>
        <div class="code-block">edat = int(input("Quants anys tens? "))
print("L'any vinent en tindràs " + str(edat + 1))</div>
        <p>La funció <code>type()</code> ens permet consultar el tipus d'un valor.</p>`
      },
      {
        title: "Operadors matemàtics",
        html: `<p>Python pot actuar com una calculadora. Els operadors principals són <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>//</code>, <code>%</code> i <code>**</code>.</p>
        <table class="concept-table"><thead><tr><th>Operador</th><th>Operació</th><th>Exemple</th></tr></thead><tbody>
        <tr><td><code>+</code></td><td>Suma</td><td><code>4 + 2</code></td></tr>
        <tr><td><code>/</code></td><td>Divisió decimal</td><td><code>9 / 2</code></td></tr>
        <tr><td><code>//</code></td><td>Divisió entera</td><td><code>9 // 2</code></td></tr>
        <tr><td><code>%</code></td><td>Residu</td><td><code>9 % 2</code></td></tr>
        <tr><td><code>**</code></td><td>Potència</td><td><code>3 ** 2</code></td></tr></tbody></table>
        <p>La multiplicació i la divisió es calculen abans que la suma i la resta. Podem usar parèntesis per canviar aquest ordre.</p>`
      },
      {
        title: "Divisions, decimals i arrodoniment",
        html: `<p>Una divisió amb <code>/</code> sempre produeix un <code>float</code>. En Python, els decimals s'escriuen amb punt. La funció <code>round(valor, decimals)</code> permet arrodonir un resultat.</p>
        <div class="code-block">resultat = 9 / 7
print(round(resultat, 2))  # Mostra 1.29</div>`
      },
      {
        title: "Comentaris",
        html: `<p>Els comentaris expliquen el codi a les persones i Python els ignora. Comencen amb el símbol <code>#</code> i continuen fins al final de la línia.</p>
        <div class="code-block"># Calculem el preu de tres entrades
preu_total = 3 * 8.5
print(preu_total)</div>`
      }
    ]
  },
  {
    id: "decisions",
    number: "02",
    title: "Prendre decisions",
    description: "Fes que els programes escullin què han de fer segons cada situació.",
    sections: [
      { title: "Cert o fals", html: `<p>Els programes poden prendre decisions avaluant condicions. Una condició només pot tenir dos resultats: <code>True</code> o <code>False</code>.</p><div class="code-block">edat = 16
print(edat >= 12)  # True</div>` },
      { title: "Operadors de comparació", html: `<p>Utilitzem <code>==</code> per comprovar igualtat, <code>!=</code> per desigualtat, i <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code> i <code>&gt;=</code> per comparar valors.</p><div class="callout"><strong>Important:</strong> <code>=</code> assigna un valor; <code>==</code> compara dos valors.</div>` },
      { title: "Condicionals if", html: `<p>Una instrucció <code>if</code> executa un bloc només quan la condició és certa. El bloc sagnat és el que depèn de la condició.</p><div class="code-block">temperatura = 30
if temperatura > 25:
    print("Fa calor")</div>` },
      { title: "Alternatives amb else i elif", html: `<p><code>else</code> defineix què passa quan la condició és falsa. <code>elif</code> permet comprovar més possibilitats.</p><div class="code-block">nota = 7
if nota >= 9:
    print("Excel·lent")
elif nota >= 5:
    print("Aprovat")
else:
    print("Cal continuar practicant")</div>` },
      { title: "Sagnat", html: `<p>Python utilitza el sagnat per agrupar instruccions. Mantén sempre quatre espais per nivell i no barregis tabuladors amb espais.</p>` },
      { title: "Condicions compostes", html: `<p>Amb <code>and</code> demanem que totes dues condicions siguin certes. Amb <code>or</code>, n'hi ha prou que una ho sigui. <code>not</code> inverteix el resultat.</p><div class="code-block">if edat >= 12 and edat <= 17:
    print("Ets adolescent")</div>` }
    ]
  },
  {
    id: "repeticions",
    number: "03",
    title: "Tasques repetitives",
    description: "Treballa amb col·leccions de dades i automatitza accions amb bucles.",
    sections: [
      { title: "Iterables i strings", html: `<p>Un iterable és un objecte que podem recórrer element per element. Un text és una seqüència de caràcters. Els índexs comencen a zero.</p><div class="code-block">paraula = "python"
print(paraula[0])   # p
print(paraula[-1])  # n
print(paraula[0:3]) # pyt</div>` },
      { title: "Llistes", html: `<p>Una llista guarda diversos valors ordenats i es pot modificar. La creem amb claudàtors.</p><div class="code-block">fruites = ["poma", "pera"]
fruites.append("maduixa")
fruites.insert(0, "plàtan")
fruites.remove("pera")</div>` },
      { title: "Bucle for", html: `<p>El bucle <code>for</code> executa el mateix bloc per cada element d'un iterable.</p><div class="code-block">for fruita in fruites:
    print("M'agrada la " + fruita)</div>` },
      { title: "range() i len()", html: `<p><code>range()</code> produeix una seqüència de nombres i és útil per repetir una tasca un nombre concret de vegades. <code>len()</code> retorna la llargada d'una col·lecció.</p><div class="code-block">for numero in range(5):
    print(numero)  # Del 0 al 4</div>` },
      { title: "Bucle while", html: `<p>Un bucle <code>while</code> continua mentre la condició sigui certa. Cal assegurar-se que la condició acabarà canviant per evitar bucles infinits.</p><div class="code-block">comptador = 3
while comptador > 0:
    print(comptador)
    comptador = comptador - 1</div>` }
    ]
  },
  {
    id: "reutilitzar",
    number: "04",
    title: "Reutilitzar el codi",
    description: "Organitza programes amb funcions i amplia Python utilitzant mòduls.",
    sections: [
      { title: "Crear funcions", html: `<p>Una funció agrupa instruccions sota un nom. Es defineix amb <code>def</code> i només s'executa quan la cridem.</p><div class="code-block">def saluda():
    print("Hola!")

saluda()</div>` },
      { title: "Paràmetres", html: `<p>Els paràmetres són dades d'entrada que permeten reutilitzar una funció amb valors diferents.</p><div class="code-block">def saluda(nom):
    print("Hola, " + nom)

saluda("Linus")</div>` },
      { title: "Retornar resultats", html: `<p><code>return</code> envia un resultat al lloc des d'on s'ha cridat la funció. Podem guardar-lo en una variable o utilitzar-lo en una expressió.</p><div class="code-block">def quadrat(numero):
    return numero ** 2

resultat = quadrat(5)</div>` },
      { title: "Abast de les variables", html: `<p>Una variable creada dins d'una funció té abast local i només existeix allí. Les variables creades fora tenen abast global. És preferible passar dades mitjançant paràmetres i retorns.</p>` },
      { title: "Mètodes, classes i objectes", html: `<p>Un mètode és una funció associada a un objecte, com <code>llista.append()</code>. Una classe és una plantilla per crear objectes amb dades —atributs— i comportaments —mètodes—.</p>` },
      { title: "Mòduls i documentació", html: `<p>Els mòduls agrupen funcionalitats que podem importar. La biblioteca estàndard inclou mòduls com <code>math</code> i <code>random</code>. La documentació explica els paràmetres, retorns i exemples de cada eina.</p><div class="code-block">import random
numero = random.randint(1, 6)

from math import sqrt
print(sqrt(16))</div><p>També existeixen paquets de tercers, que habitualment s'instal·len des de PyPI amb <code>pip</code>. Abans d'instal·lar-ne un, comprova'n l'origen i la reputació.</p>` }
    ]
  }
];

const exercises = [
  {
    id: "hola-mon", title: "Primer programa", topic: "print() i textos",
    description: "Escriu un programa que mostri exactament «Hola món!» a la pantalla.",
    requirements: ["Utilitza la funció print()", "Respecta majúscules, accent i signe d'exclamació"],
    starter: `# Escriu el teu codi aquí\n`,
    tests: [{ inputs: [], output: "Hola món!" }],
    hints: ["Necessites la funció print().", "El text ha d'anar entre cometes.", `Prova una estructura com: print("...")`]
  },
  {
    id: "corregeix-errors", title: "Detecta i corregeix errors", topic: "Sintaxi",
    description: "Aquest programa té errors. Corregeix-lo perquè mostri «Hola món!».",
    requirements: ["La funció ha d'estar escrita correctament", "Revisa les cometes"],
    starter: `Print("Hola món!)`,
    tests: [{ inputs: [], output: "Hola món!" }],
    hints: ["Python diferencia majúscules i minúscules.", "Cada cometa que obres s'ha de tancar.", `La funció correcta és print().`]
  },
  {
    id: "variable", title: "Crea una variable", topic: "Variables",
    description: "Crea una variable anomenada salutacio amb el valor «Bon dia» i mostra-la.",
    requirements: ["Crea la variable salutacio", "Mostra el valor, no la paraula salutacio"],
    starter: `# Crea la variable salutacio\n\n# Mostra-la\n`,
    tests: [{ inputs: [], output: "Bon dia" }],
    rule: code => /\bsalutacio\s*=/.test(code) ? null : "El resultat pot ser correcte, però falta crear la variable `salutacio`.",
    hints: ["Assigna un text a la variable amb =.", "Per mostrar el valor, no posis el nom de la variable entre cometes.", `salutacio = "..."`]
  },
  {
    id: "text-variable", title: "Text o variable?", topic: "Variables",
    description: "Modifica el programa perquè mostri el contingut de la variable, no la paraula «missatge».",
    requirements: ["Mantén la variable", "Canvia només el necessari"],
    starter: `missatge = "Aprendre Python és divertit"\nprint("missatge")`,
    tests: [{ inputs: [], output: "Aprendre Python és divertit" }],
    hints: ["Les cometes indiquen que alguna cosa és text literal.", "Per accedir al valor, escriu directament el nom de la variable.", "Treu les cometes de dins de print()."]
  },
  {
    id: "concatenacio", title: "Nom complet", topic: "Concatenació",
    description: "Crea les variables nom i cognom, i mostra «Ada Lovelace» unint-les.",
    requirements: ["Utilitza nom i cognom", "Afegeix un espai entre les dues paraules"],
    starter: `nom = "Ada"\ncognom = "Lovelace"\n# Mostra el nom complet\n`,
    tests: [{ inputs: [], output: "Ada Lovelace" }],
    rule: code => code.includes("+") ? null : "Has obtingut el resultat, però prova d'unir les variables amb l'operador `+`.",
    hints: ["Pots unir textos amb +.", "També has d'unir un espai: \" \".", `nom + " " + cognom`]
  },
  {
    id: "com-et-dius", title: "Com et dius?", topic: "input()",
    description: "Pregunta el nom de l'usuari i respon «Hola, nom!».",
    requirements: ["Utilitza input()", "Ha de funcionar amb qualsevol nom"],
    starter: `# Pregunta el nom i saluda\n`,
    inputLabels: ["Com et dius?"],
    tests: [{ inputs: ["Maria"], output: "Hola, Maria!" }, { inputs: ["Pau"], output: "Hola, Pau!" }],
    rule: code => code.includes("input(") ? null : "La salutació és correcta, però ha de demanar el nom amb `input()`.",
    hints: ["Guarda el resultat d'input() en una variable.", "Uneix «Hola, », el nom i «!».", `nom = input("Com et dius? ")`]
  },
  {
    id: "repara-programa", title: "Repara el programa", topic: "Sintaxi i noms",
    description: "Repara el programa perquè mostri «Tinc 14 anys».",
    requirements: ["El nom de variable ha de ser vàlid", "Converteix el nombre abans de concatenar-lo"],
    starter: `2edat = 14\nprint("Tinc " + 2edat + " anys")`,
    tests: [{ inputs: [], output: "Tinc 14 anys" }],
    hints: ["Un nom de variable no pot començar amb un número.", "No pots concatenar directament text i enters.", "Utilitza str() per convertir l'edat a text."]
  },
  {
    id: "suma", title: "Suma dos nombres", topic: "Conversió de tipus",
    description: "Demana dos nombres i mostra'n la suma. Ha de funcionar amb diferents valors.",
    requirements: ["Utilitza dos input()", "Converteix les entrades a nombres", "Mostra només el resultat"],
    starter: `numero1 = input("Primer número: ")\nnumero2 = input("Segon número: ")\nprint(numero1 + numero2)`,
    inputLabels: ["Primer número", "Segon número"],
    tests: [{ inputs: ["2", "3"], output: "5" }, { inputs: ["10", "7"], output: "17" }],
    hints: ["input() sempre retorna text.", "Per sumar enters, converteix cada resposta amb int().", `numero1 = int(input("Primer número: "))`]
  },
  {
    id: "edat-futura", title: "Edat futura", topic: "Entrada i càlcul",
    description: "Demana l'edat i mostra quants anys tindrà l'usuari d'aquí a cinc anys.",
    requirements: ["Converteix l'entrada a enter", "Mostra només l'edat futura"],
    starter: `# Demana l'edat i calcula'n cinc més\n`,
    inputLabels: ["Quants anys tens?"],
    tests: [{ inputs: ["10"], output: "15" }, { inputs: ["27"], output: "32" }],
    hints: ["Guarda l'entrada en una variable.", "Converteix-la amb int().", "Suma 5 abans de mostrar el resultat."]
  },
  {
    id: "precedencia", title: "Prediu i comprova", topic: "Operadors",
    description: "Sense canviar els nombres, afegeix parèntesis perquè el programa mostri 20.",
    requirements: ["Mantén els nombres i operadors", "Canvia l'ordre amb parèntesis"],
    starter: `print(2 + 3 * 4)`,
    tests: [{ inputs: [], output: "20" }],
    hints: ["Ara mateix, Python multiplica abans de sumar.", "Fes que la suma es calculi primer.", "Posa parèntesis al voltant de 2 + 3."]
  },
  {
    id: "mitjana", title: "Mitjana de tres notes", topic: "Decimals i round()",
    description: "Demana tres notes, calcula'n la mitjana i mostra-la arrodonida a dos decimals.",
    requirements: ["Accepta notes decimals", "Utilitza round()", "Mostra només el resultat"],
    starter: `# Demana tres notes i calcula la mitjana\n`,
    inputLabels: ["Primera nota", "Segona nota", "Tercera nota"],
    tests: [{ inputs: ["5", "7", "8"], output: "6.67" }, { inputs: ["7.5", "8.2", "9.1"], output: "8.27" }],
    rule: code => code.includes("round(") ? null : "La mitjana és correcta, però l'exercici demana utilitzar `round()`.",
    hints: ["Converteix les notes amb float().", "La mitjana és la suma dividida entre la quantitat.", "Utilitza round(mitjana, 2)."]
  },
  {
    id: "tiquet", title: "Generador de tiquets", topic: "Repte final",
    description: "Demana el producte, el preu i la quantitat. Mostra dues línies: el producte i el total arrodonit a dos decimals.",
    requirements: ["Primera línia: nom del producte", "Segona línia: total numèric", "Ha de funcionar amb dades diferents"],
    starter: `# Crea el teu generador de tiquets\n`,
    inputLabels: ["Producte", "Preu", "Quantitat"],
    tests: [
      { inputs: ["Llibreta", "2.5", "3"], output: "Llibreta\n7.5" },
      { inputs: ["Llapis", "1.25", "4"], output: "Llapis\n5.0" }
    ],
    hints: ["Necessites tres input().", "El preu és decimal i la quantitat és entera.", "Calcula round(preu * quantitat, 2) i mostra el producte i el total en print() separats."]
  },
  {
    id: "major-edat", chapter: 2, theorySection: 2, title: "Major d'edat", topic: "Condicional if",
    description: "Demana l'edat. Mostra «Pots entrar» si té 18 anys o més i «Encara no» en cas contrari.",
    requirements: ["Utilitza if i else", "Ha de funcionar amb qualsevol edat"],
    starter: `edat = int(input("Edat: "))\n# Pren una decisió\n`,
    inputLabels: ["Edat"],
    tests: [{ inputs: ["18"], output: "Pots entrar" }, { inputs: ["12"], output: "Encara no" }],
    hints: ["Compara edat amb 18.", "Necessites dos camins diferents.", `if edat >= 18:`]
  },
  {
    id: "parell-senar", chapter: 2, theorySection: 1, title: "Parell o senar", topic: "Comparacions",
    description: "Demana un nombre enter i mostra «Parell» o «Senar».",
    requirements: ["Utilitza l'operador %", "Compara el residu amb zero"],
    starter: `numero = int(input("Número: "))\n`,
    inputLabels: ["Número enter"],
    tests: [{ inputs: ["8"], output: "Parell" }, { inputs: ["7"], output: "Senar" }],
    hints: ["El residu de dividir un parell entre 2 és zero.", "Utilitza numero % 2.", `if numero % 2 == 0:`]
  },
  {
    id: "classifica-nota", chapter: 2, theorySection: 3, title: "Classifica una nota", topic: "elif",
    description: "Mostra «Excel·lent» per notes de 9 o més, «Aprovat» per notes de 5 o més i «Suspès» per a la resta.",
    requirements: ["Utilitza if, elif i else", "Comprova primer la nota més alta"],
    starter: `nota = float(input("Nota: "))\n`,
    inputLabels: ["Nota"],
    tests: [{ inputs: ["9.5"], output: "Excel·lent" }, { inputs: ["6"], output: "Aprovat" }, { inputs: ["3"], output: "Suspès" }],
    hints: ["Comença comprovant nota >= 9.", "La segona condició és nota >= 5.", "L'últim cas no necessita condició."]
  },
  {
    id: "contrasenya", chapter: 2, theorySection: 0, title: "Comprova la contrasenya", topic: "Booleans",
    description: "Demana una contrasenya. Mostra «Accés concedit» només si és exactament python123.",
    requirements: ["Compara textos amb ==", "Mostra «Accés denegat» si no coincideix"],
    starter: `contrasenya = input("Contrasenya: ")\n`,
    inputLabels: ["Contrasenya"],
    tests: [{ inputs: ["python123"], output: "Accés concedit" }, { inputs: ["Python123"], output: "Accés denegat" }],
    hints: ["Python diferencia majúscules i minúscules.", "Utilitza == per comparar.", `if contrasenya == "python123":`]
  },
  {
    id: "entrada-parc", chapter: 2, theorySection: 5, title: "Entrada al parc", topic: "and",
    description: "Es pot pujar a l'atracció si l'edat és de 12 anys o més i l'alçada és de 140 cm o més.",
    requirements: ["Utilitza and", "Mostra «Pots pujar» o «No pots pujar»"],
    starter: `edat = int(input("Edat: "))\nalcada = int(input("Alçada en cm: "))\n`,
    inputLabels: ["Edat", "Alçada en cm"],
    tests: [{ inputs: ["14", "150"], output: "Pots pujar" }, { inputs: ["14", "130"], output: "No pots pujar" }, { inputs: ["10", "150"], output: "No pots pujar" }],
    hints: ["Les dues condicions han de ser certes.", "Connecta les comparacions amb and.", `edat >= 12 and alcada >= 140`]
  },
  {
    id: "repara-sagnat", chapter: 2, theorySection: 4, title: "Repara el sagnat", topic: "Sagnat",
    description: "Corregeix el sagnat perquè el programa mostri el missatge adequat.",
    requirements: ["Utilitza quatre espais dins de cada bloc", "No canviïs les condicions"],
    starter: `temperatura = int(input("Temperatura: "))\nif temperatura > 25:\nprint("Fa calor")\nelse:\nprint("No fa calor")`,
    inputLabels: ["Temperatura"],
    tests: [{ inputs: ["30"], output: "Fa calor" }, { inputs: ["18"], output: "No fa calor" }],
    hints: ["Les instruccions que depenen d'un if van sagnades.", "Fes el mateix després d'else.", "Afegeix quatre espais abans de cada print()."]
  },
  {
    id: "extrems-paraula", chapter: 3, theorySection: 0, title: "Extrems d'una paraula", topic: "Índexs",
    description: "Demana una paraula i mostra primer el primer caràcter i després l'últim, en línies separades.",
    requirements: ["Utilitza índexs positius i negatius", "Mostra dues línies"],
    starter: `paraula = input("Paraula: ")\n`,
    inputLabels: ["Paraula"],
    tests: [{ inputs: ["python"], output: "p\nn" }, { inputs: ["codi"], output: "c\ni" }],
    hints: ["El primer índex és 0.", "L'índex -1 representa l'últim caràcter.", "Fes dos print()."]
  },
  {
    id: "afegeix-llista", chapter: 3, theorySection: 1, title: "Amplia la llista", topic: "Llistes",
    description: "Afegeix «maduixa» al final de la llista i mostra la llista completa.",
    requirements: ["Utilitza append()", "No recreïs manualment la llista"],
    starter: `fruites = ["poma", "pera"]\n# Afegeix maduixa i mostra la llista\n`,
    tests: [{ inputs: [], output: "['poma', 'pera', 'maduixa']" }],
    rule: code => code.includes(".append(") ? null : "El resultat és correcte, però l'exercici demana practicar el mètode append().",
    hints: ["append() és un mètode de les llistes.", `fruites.append("maduixa")`, "Després mostra fruites."]
  },
  {
    id: "recorre-llista", chapter: 3, theorySection: 2, title: "Saluda la classe", topic: "Bucle for",
    description: "Recorre la llista i mostra «Hola, nom» per a cada alumne.",
    requirements: ["Utilitza un bucle for", "No escriguis tres print() manuals"],
    starter: `alumnes = ["Ada", "Pau", "Linus"]\n# Saluda cada alumne\n`,
    tests: [{ inputs: [], output: "Hola, Ada\nHola, Pau\nHola, Linus" }],
    rule: code => /\bfor\b/.test(code) ? null : "El resultat és correcte, però has de recórrer la llista amb un bucle for.",
    hints: ["Crea una variable temporal per cada alumne.", `for alumne in alumnes:`, "Dins del bucle, concatena «Hola, » i alumne."]
  },
  {
    id: "suma-fins-n", chapter: 3, theorySection: 3, title: "Suma fins a N", topic: "range()",
    description: "Demana un nombre N i mostra la suma de tots els enters de l'1 fins a N.",
    requirements: ["Utilitza range()", "Acumula el resultat en una variable"],
    starter: `n = int(input("N: "))\ntotal = 0\n`,
    inputLabels: ["Nombre N"],
    tests: [{ inputs: ["5"], output: "15" }, { inputs: ["10"], output: "55" }],
    rule: code => code.includes("range(") ? null : "La suma és correcta, però has de practicar range().",
    hints: ["range() no inclou el límit final.", "Recorre range(1, n + 1).", "Afegeix cada número a total."]
  },
  {
    id: "compta-vocals", chapter: 3, theorySection: 2, title: "Compta vocals", topic: "Iteració de strings",
    description: "Demana un text en minúscules i mostra quantes vocals conté.",
    requirements: ["Recorre el text amb for", "Comprova si cada lletra és una vocal"],
    starter: `text = input("Text en minúscules: ")\ncomptador = 0\n`,
    inputLabels: ["Text en minúscules"],
    tests: [{ inputs: ["python"], output: "1" }, { inputs: ["programacio"], output: "5" }],
    hints: ["Un string també es pot recórrer amb for.", "Pots comprovar si lletra està dins de «aeiou».", "Augmenta el comptador quan trobis una vocal."]
  },
  {
    id: "compte-enrere", chapter: 3, theorySection: 4, title: "Compte enrere", topic: "Bucle while",
    description: "Demana un nombre i mostra un compte enrere fins a 1. Al final mostra «Fi».",
    requirements: ["Utilitza while", "Actualitza el comptador dins del bucle"],
    starter: `numero = int(input("Comença a: "))\n`,
    inputLabels: ["Nombre inicial"],
    tests: [{ inputs: ["3"], output: "3\n2\n1\nFi" }, { inputs: ["1"], output: "1\nFi" }],
    rule: code => /\bwhile\b/.test(code) ? null : "El resultat és correcte, però l'exercici demana utilitzar while.",
    hints: ["Repeteix mentre numero sigui més gran que zero.", "Resta 1 després de mostrar-lo.", "Mostra «Fi» fora del bucle."]
  },
  {
    id: "funcio-saluda", chapter: 4, theorySection: 0, title: "La primera funció", topic: "def",
    description: "Defineix una funció saluda() que mostri «Hola!» i crida-la dues vegades.",
    requirements: ["Defineix saluda() amb def", "Crida la funció dues vegades"],
    starter: `# Defineix la funció i crida-la dues vegades\n`,
    tests: [{ inputs: [], output: "Hola!\nHola!" }],
    rule: code => /\bdef\s+saluda\s*\(/.test(code) ? null : "Has de definir una funció anomenada saluda.",
    hints: ["Una definició comença amb def.", `def saluda():`, "Recorda cridar saluda() dues vegades."]
  },
  {
    id: "funcio-parametre", chapter: 4, theorySection: 1, title: "Saluda amb paràmetre", topic: "Paràmetres",
    description: "Defineix saluda(nom) perquè mostri «Hola, nom!» i utilitza-la amb el nom introduït.",
    requirements: ["La funció ha de rebre un paràmetre", "Crida-la amb la resposta de input()"],
    starter: `def saluda(nom):\n    # Completa la funció\n    pass\n\nnom = input("Nom: ")\nsaluda(nom)`,
    inputLabels: ["Nom"],
    tests: [{ inputs: ["Ada"], output: "Hola, Ada!" }, { inputs: ["Nil"], output: "Hola, Nil!" }],
    hints: ["Dins de la funció, utilitza el paràmetre nom.", "Concatena «Hola, », nom i «!».", "Substitueix pass per print(...)."]
  },
  {
    id: "funcio-quadrat", chapter: 4, theorySection: 2, title: "Retorna el quadrat", topic: "return",
    description: "Completa quadrat(numero) perquè retorni el quadrat del nombre.",
    requirements: ["Utilitza return", "No facis print() dins de la funció"],
    starter: `def quadrat(numero):\n    # Retorna el resultat\n    pass\n\nnumero = int(input("Número: "))\nprint(quadrat(numero))`,
    inputLabels: ["Número"],
    tests: [{ inputs: ["5"], output: "25" }, { inputs: ["9"], output: "81" }],
    rule: code => /\breturn\b/.test(code) ? null : "El resultat és correcte, però la funció ha de retornar-lo amb return.",
    hints: ["El quadrat és numero ** 2.", "return envia el resultat fora de la funció.", "Substitueix pass per return numero ** 2."]
  },
  {
    id: "funcio-major", chapter: 4, theorySection: 2, title: "El nombre més gran", topic: "Funcions i decisions",
    description: "Completa major(a, b) perquè retorni el nombre més gran.",
    requirements: ["Utilitza dos paràmetres", "Utilitza return"],
    starter: `def major(a, b):\n    # Retorna el valor més gran\n    pass\n\na = int(input("A: "))\nb = int(input("B: "))\nprint(major(a, b))`,
    inputLabels: ["Nombre A", "Nombre B"],
    tests: [{ inputs: ["7", "3"], output: "7" }, { inputs: ["2", "9"], output: "9" }],
    hints: ["Compara a i b dins de la funció.", "Retorna a si és més gran o igual.", "En cas contrari, retorna b."]
  },
  {
    id: "metode-majuscules", chapter: 4, theorySection: 4, title: "Utilitza un mètode", topic: "Mètodes",
    description: "Demana una paraula i mostra-la completament en majúscules utilitzant un mètode de string.",
    requirements: ["Utilitza el mètode upper()", "Ha de funcionar amb qualsevol paraula"],
    starter: `paraula = input("Paraula: ")\n`,
    inputLabels: ["Paraula"],
    tests: [{ inputs: ["python"], output: "PYTHON" }, { inputs: ["Hola"], output: "HOLA" }],
    rule: code => code.includes(".upper(") ? null : "El resultat és correcte, però has d'utilitzar el mètode upper().",
    hints: ["Els mètodes s'escriuen després de l'objecte.", "El mètode és upper().", "Mostra paraula.upper()."]
  },
  {
    id: "modul-math", chapter: 4, theorySection: 5, title: "Arrel quadrada", topic: "Mòduls",
    description: "Importa math, demana un nombre i mostra'n l'arrel quadrada.",
    requirements: ["Utilitza import math", "Utilitza math.sqrt()"],
    starter: `# Importa el mòdul math\n\nnumero = float(input("Número: "))\n`,
    inputLabels: ["Número"],
    tests: [{ inputs: ["16"], output: "4.0" }, { inputs: ["81"], output: "9.0" }],
    rule: code => code.includes("math.sqrt(") ? null : "El resultat és correcte, però has de practicar math.sqrt().",
    hints: ["Comença amb import math.", "La funció és sqrt dins de math.", "Mostra math.sqrt(numero)."]
  }
];

const state = {
  completed: new Set(JSON.parse(localStorage.getItem("python-progress") || "[]")),
  currentExercise: 0,
  hintLevel: 0,
  worker: null,
  workerReady: false,
  pendingRun: null,
  runTimer: null,
  difficulty: localStorage.getItem("python-difficulty") || "easy",
  indexCollapsed: localStorage.getItem("python-index-collapsed") === "true",
  editor: null
};

const page = document.querySelector("#page-content");
const nav = document.querySelector("#course-nav");
const breadcrumb = document.querySelector("#breadcrumb");
const toast = document.querySelector("#toast");
const appShell = document.querySelector(".app-shell");
const sidebar = document.querySelector("#sidebar");
const menuButton = document.querySelector("#menu-button");
const sidebarClose = document.querySelector("#sidebar-close");
const sidebarBackdrop = document.querySelector("#sidebar-backdrop");
const desktopMedia = window.matchMedia("(min-width: 981px)");

function navigate(hash) {
  window.location.hash = hash;
}

function renderNav() {
  nav.innerHTML = `
    <div class="nav-group">
      <span class="nav-group-label">Comença aquí</span>
      <button class="nav-link" data-route="inici"><span class="nav-number">⌂</span>Inici</button>
    </div>
    <div class="nav-group">
      <span class="nav-group-label">Temari</span>
      ${chapters.map(c => `<button class="nav-link" data-route="${c.id}"><span class="nav-number">${c.number}</span>${c.title}</button>`).join("")}
    </div>
    <div class="nav-group">
      <span class="nav-group-label">Practica</span>
      <button class="nav-link" data-route="exercicis"><span class="nav-number">✓</span>Exercicis interactius</button>
    </div>`;
  nav.querySelectorAll("[data-route]").forEach(button => button.addEventListener("click", () => {
    navigate(button.dataset.route);
    document.querySelector("#sidebar").classList.remove("open");
    updateSidebarButton();
  }));
}

function setActive(route, label) {
  breadcrumb.textContent = label;
  nav.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.route === route));
  page.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function renderHome() {
  setActive("inici", "Inici");
  page.innerHTML = `
    <section class="hero">
      <span class="eyebrow">Curs interactiu en català</span>
      <h1>Aprèn Python fent Python.</h1>
      <p>Descobreix els conceptes essencials, prova el codi al navegador i rep feedback immediat mentre avances.</p>
      <div class="hero-actions">
        <a class="primary-button" href="#interaccions">Comença el curs</a>
        <a class="secondary-button" href="#exercicis">Ves als exercicis</a>
      </div>
    </section>
    <h2 class="section-title">El teu recorregut</h2>
    <div class="course-grid">${chapters.map(chapter => `
      <article class="course-card">
        <span class="chapter-id">CAPÍTOL ${chapter.number}</span>
        <h3>${chapter.title}</h3>
        <p>${chapter.description}</p>
        <a class="text-link" href="#${chapter.id}">Explora el capítol →</a>
      </article>`).join("")}</div>`;
}

function renderChapter(chapter) {
  const mobileView = window.matchMedia("(max-width: 760px)").matches;
  const chapterIndexCollapsed = mobileView ? true : state.indexCollapsed;
  setActive(chapter.id, `${chapter.number} · ${chapter.title}`);
  page.innerHTML = `
    <header class="lesson-header">
      <span class="eyebrow">Capítol ${chapter.number}</span>
      <h1>${chapter.title}</h1>
      <p>${chapter.description}</p>
    </header>
    <div class="lesson-layout ${chapterIndexCollapsed ? "index-collapsed" : ""}">
      <article class="lesson-body">
        ${chapter.sections.map((section, index) => `<section id="${chapter.id}-${index}"><h2>${index + 1}. ${section.title}</h2>${section.html}</section>`).join("")}
        <section class="exercise-launch"><div><h2>Posa-ho en pràctica</h2><p>${exercises.filter(ex => (ex.chapter || 1) === Number(chapter.number)).length} exercicis interactius d'aquest capítol.</p></div><a class="primary-button" href="#exercicis">Comença a practicar</a></section>
      </article>
      <aside class="lesson-index"><strong>En aquest capítol</strong>${chapter.sections.map((s, i) => `<button data-scroll="${chapter.id}-${i}">${i + 1}. ${s.title}</button>`).join("")}</aside>
    </div>
    <button class="index-toggle" id="index-toggle" aria-label="${chapterIndexCollapsed ? "Mostra l'índex" : "Amaga l'índex"}" aria-expanded="${!chapterIndexCollapsed}" title="${chapterIndexCollapsed ? "Mostra l'índex" : "Amaga l'índex"}">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
      <span class="index-chevron">${chapterIndexCollapsed ? "‹" : "›"}</span>
    </button>`;
  page.querySelector("#index-toggle").addEventListener("click", () => {
    const layout = page.querySelector(".lesson-layout");
    const collapsed = layout.classList.toggle("index-collapsed");
    if (!window.matchMedia("(max-width: 760px)").matches) {
      state.indexCollapsed = collapsed;
      localStorage.setItem("python-index-collapsed", String(collapsed));
    }
    const toggle = page.querySelector("#index-toggle");
    const label = collapsed ? "Mostra l'índex" : "Amaga l'índex";
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("aria-expanded", String(!collapsed));
    toggle.title = label;
    toggle.querySelector(".index-chevron").textContent = collapsed ? "‹" : "›";
  });
  page.querySelectorAll("[data-scroll]").forEach(button => button.addEventListener("click", () => {
    document.querySelector(`#${button.dataset.scroll}`).scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.matchMedia("(max-width: 760px)").matches) {
      const layout = page.querySelector(".lesson-layout");
      const toggle = page.querySelector("#index-toggle");
      layout.classList.add("index-collapsed");
      toggle.setAttribute("aria-label", "Mostra l'índex");
      toggle.setAttribute("aria-expanded", "false");
      toggle.title = "Mostra l'índex";
      toggle.querySelector(".index-chevron").textContent = "‹";
    }
  }));
}

function renderExerciseList() {
  setActive("exercicis", "Exercicis interactius");
  page.innerHTML = `
    <header class="lesson-header">
      <span class="eyebrow">Laboratori de codi</span>
      <h1>Exercicis interactius</h1>
      <p>Resol els reptes al teu ritme. Provarem el teu codi amb diferents dades i t'ajudarem a entendre els errors.</p>
    </header>
    <div class="exercise-chapters">${chapters.map((chapter, chapterIndex) => {
      const chapterExercises = exercises.filter(ex => (ex.chapter || 1) === chapterIndex + 1);
      const completed = chapterExercises.filter(ex => state.completed.has(ex.id)).length;
      return `<section class="exercise-chapter">
        <header class="exercise-chapter-header">
          <div><span class="chapter-id">CAPÍTOL ${chapter.number}</span><h2>${chapter.title}</h2><p>${chapter.description}</p></div>
          <span class="chapter-progress">${completed} / ${chapterExercises.length}</span>
        </header>
        <div class="exercise-list">${chapterExercises.map((ex, i) => {
          const globalIndex = exercises.indexOf(ex);
          return `<button class="exercise-row ${state.completed.has(ex.id) ? "done" : ""}" data-exercise="${globalIndex}">
            <span class="exercise-check">${state.completed.has(ex.id) ? "✓" : i + 1}</span>
            <span class="exercise-row-copy"><strong>${ex.title}</strong><span>${ex.topic}</span></span>
            <span>→</span>
          </button>`;
        }).join("")}</div>
      </section>`;
    }).join("")}</div>`;
  page.querySelectorAll("[data-exercise]").forEach(b => b.addEventListener("click", () => {
    state.currentExercise = Number(b.dataset.exercise);
    navigate(`exercici-${state.currentExercise + 1}`);
  }));
}

function renderExercise(index) {
  state.currentExercise = Math.max(0, Math.min(index, exercises.length - 1));
  state.hintLevel = 0;
  const ex = exercises[state.currentExercise];
  const theory = getExerciseTheory(ex);
  setActive("exercicis", `Exercici ${state.currentExercise + 1} de ${exercises.length}`);
  page.innerHTML = `
    <div class="exercise-workspace difficulty-${state.difficulty}">
      <section class="exercise-brief">
        <div class="exercise-brief-main">
          <span class="eyebrow">Exercici ${state.currentExercise + 1} · ${ex.topic}</span>
          <h2>${ex.title}</h2>
          <p>${ex.description}</p>
          <h3>Requisits</h3>
          <ul class="requirements">${ex.requirements.map(r => `<li>${r}</li>`).join("")}</ul>
        </div>
        <div class="exercise-brief-tools">
          <div class="difficulty-control" aria-label="Dificultat de l'exercici">
            <button data-difficulty="easy" class="${state.difficulty === "easy" ? "active" : ""}">Fàcil · Amb ajuda</button>
            <button data-difficulty="hard" class="${state.difficulty === "hard" ? "active" : ""}">Difícil · Sense avisos</button>
          </div>
          <div class="hint-box"><strong>Necessites una pista?</strong><div id="hint-text">Comença provant la teva idea.</div><button id="hint-button">Mostra una pista</button></div>
          <button class="theory-toggle" id="theory-toggle" aria-expanded="false">Mostra teoria</button>
        </div>
        <div class="exercise-theory" id="exercise-theory" hidden>
          <div class="exercise-theory-heading">
            <div><span class="eyebrow">Recordatori teòric</span><h3>${theory.title}</h3></div>
            <button class="theory-close" id="theory-close" aria-label="Amaga la teoria">×</button>
          </div>
          <div class="lesson-body">${theory.html}</div>
        </div>
      </section>
      <section>
        <div class="editor-panel">
          <div class="editor-toolbar">
            <span>main.py</span>
            <div class="editor-toolbar-actions"><button class="reset-code">Reinicia</button><button class="run-button" id="run-code">▶ Executa i comprova</button></div>
          </div>
          <textarea class="code-editor" id="code-editor" spellcheck="false" aria-label="Editor de codi Python">${ex.starter}</textarea>
          ${ex.inputLabels ? `<div class="program-inputs is-hidden">
            <div class="program-inputs-heading"><strong>Entrades del programa</strong><span>Valors que rebrà cada <code>input()</code></span></div>
            <div class="program-inputs-fields">${ex.inputLabels.map((label, i) => `<label>${label}<input type="text" data-program-input="${i}" autocomplete="off" placeholder="Escriu una resposta"></label>`).join("")}</div>
          </div>` : ""}
          <div class="terminal-panel">
            <div class="terminal-heading"><span>Terminal · output real</span><span class="terminal-status" id="terminal-status">Sense executar</span></div>
            <pre class="terminal-output" id="terminal-output">Executa el programa per veure'n la sortida.</pre>
          </div>
          <div class="feedback-panel info" id="feedback"><h3>A punt per començar</h3><p>Executa el codi quan vulguis comprovar la teva solució.</p></div>
        </div>
        <div class="exercise-nav">
          <button class="outline-button" id="previous-exercise" ${state.currentExercise === 0 ? "disabled" : ""}>← Anterior</button>
          <button class="outline-button" id="all-exercises">Tots els exercicis</button>
          <button class="outline-button" id="next-exercise" ${state.currentExercise === exercises.length - 1 ? "disabled" : ""}>Següent →</button>
        </div>
      </section>
    </div>`;
  const editor = page.querySelector("#code-editor");
  initializeCodeEditor(editor);
  page.querySelector("#run-code").addEventListener("click", runCurrentExercise);
  page.querySelector(".reset-code").addEventListener("click", () => {
    setEditorCode(ex.starter);
    resetProgramInputs();
    setTerminal("Sense executar", "Executa el programa per veure'n la sortida.");
    setFeedback("info", "Codi reiniciat", "Torna-ho a provar quan vulguis.");
  });
  page.querySelectorAll("[data-difficulty]").forEach(button => button.addEventListener("click", () => setDifficulty(button.dataset.difficulty)));
  page.querySelector("#theory-toggle").addEventListener("click", toggleExerciseTheory);
  page.querySelector("#theory-close").addEventListener("click", toggleExerciseTheory);
  page.querySelectorAll("[data-program-input]").forEach(field => field.addEventListener("keydown", event => {
    if (event.key === "Enter") runCurrentExercise();
  }));
  page.querySelector("#hint-button").addEventListener("click", showHint);
  page.querySelector("#all-exercises").addEventListener("click", () => navigate("exercicis"));
  page.querySelector("#previous-exercise").addEventListener("click", () => navigate(`exercici-${state.currentExercise}`));
  page.querySelector("#next-exercise").addEventListener("click", () => navigate(`exercici-${state.currentExercise + 2}`));
}

function getExerciseTheory(exercise) {
  if (exercise.chapter && Number.isInteger(exercise.theorySection)) {
    return chapters[exercise.chapter - 1].sections[exercise.theorySection];
  }
  const sectionByExercise = {
    "hola-mon": 0,
    "corregeix-errors": 0,
    "variable": 1,
    "text-variable": 1,
    "concatenacio": 1,
    "com-et-dius": 2,
    "repara-programa": 3,
    "suma": 4,
    "edat-futura": 4,
    "precedencia": 5,
    "mitjana": 6,
    "tiquet": 5
  };
  return chapters[0].sections[sectionByExercise[exercise.id] ?? 0];
}

function toggleExerciseTheory() {
  const theory = document.querySelector("#exercise-theory");
  const toggle = document.querySelector("#theory-toggle");
  const willOpen = theory.hidden;
  theory.hidden = !willOpen;
  toggle.textContent = willOpen ? "Amaga teoria" : "Mostra teoria";
  toggle.setAttribute("aria-expanded", String(willOpen));
  if (willOpen) theory.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function initializeCodeEditor(textarea) {
  if (window.CodeMirror) {
    state.editor = CodeMirror.fromTextArea(textarea, {
      mode: "python",
      lineNumbers: true,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false,
      lineWrapping: false,
      autoCloseBrackets: true,
      matchBrackets: true,
      styleActiveLine: true,
      viewportMargin: Infinity,
      extraKeys: {
        Tab: cm => cm.replaceSelection("    ", "end"),
        "Ctrl-Enter": runCurrentExercise,
        "Cmd-Enter": runCurrentExercise
      }
    });
    state.editor.setSize(null, 340);
    state.editor.focus();
    return;
  }
  state.editor = null;
  textarea.addEventListener("keydown", event => {
    if (event.key === "Tab") {
      event.preventDefault();
      const start = textarea.selectionStart;
      textarea.value = textarea.value.slice(0, start) + "    " + textarea.value.slice(textarea.selectionEnd);
      textarea.selectionStart = textarea.selectionEnd = start + 4;
    }
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") runCurrentExercise();
  });
}

function getEditorCode() {
  return state.editor ? state.editor.getValue() : document.querySelector("#code-editor").value;
}

function setEditorCode(code) {
  if (state.editor) state.editor.setValue(code);
  else document.querySelector("#code-editor").value = code;
}

function showHint() {
  const ex = exercises[state.currentExercise];
  const hint = ex.hints[Math.min(state.hintLevel, ex.hints.length - 1)];
  document.querySelector("#hint-text").textContent = hint;
  state.hintLevel++;
  if (state.hintLevel >= ex.hints.length) document.querySelector("#hint-button").textContent = "Aquesta és l'última pista";
}

function setFeedback(type, title, message) {
  const panel = document.querySelector("#feedback");
  panel.className = `feedback-panel ${type}`;
  panel.innerHTML = `<h3>${title}</h3><p>${escapeHtml(message)}</p>`;
}

function setTerminal(status, output) {
  const statusElement = document.querySelector("#terminal-status");
  const outputElement = document.querySelector("#terminal-output");
  if (!statusElement || !outputElement) return;
  statusElement.textContent = status;
  outputElement.textContent = output;
}

function setDifficulty(difficulty) {
  state.difficulty = difficulty;
  localStorage.setItem("python-difficulty", difficulty);
  const workspace = document.querySelector(".exercise-workspace");
  workspace.classList.toggle("difficulty-easy", difficulty === "easy");
  workspace.classList.toggle("difficulty-hard", difficulty === "hard");
  document.querySelectorAll("[data-difficulty]").forEach(button => button.classList.toggle("active", button.dataset.difficulty === difficulty));
  showToast(difficulty === "easy" ? "Mode fàcil: feedback activat" : "Mode difícil: només terminal");
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));
}

function friendlyError(error, code) {
  if (/NameError.*Print/.test(error)) return "Python diferencia majúscules i minúscules. Prova d'escriure `print` amb minúscules.";
  if (/unterminated string|EOL while scanning|string literal/.test(error)) return "Sembla que has obert unes cometes però no les has tancat. Revisa els textos del programa.";
  if (/invalid decimal literal|invalid syntax/.test(error) && /^\s*\d+\w+\s*=/m.test(code)) return "Un nom de variable no pot començar amb un número. Prova de posar primer una lletra.";
  if (/SyntaxError/.test(error)) return "Hi ha un error de sintaxi. Revisa parèntesis, cometes, dos punts i la línia indicada pel missatge.";
  if (/IndentationError/.test(error)) return "El sagnat no és coherent. Utilitza quatre espais per agrupar les instruccions.";
  if (/TypeError.*concatenate|can only concatenate/.test(error)) return "Estàs intentant unir text amb un nombre. Converteix el nombre amb `str()` o revisa l'operació.";
  if (/ValueError.*invalid literal for int/.test(error)) return "Has intentat convertir a enter un valor que no ho és. Revisa què rep `int()`.";
  if (/EOFError|No queden entrades/.test(error)) return "El programa demana més respostes de les esperades. Revisa quantes vegades utilitzes `input()`.";
  if (/NameError/.test(error)) return "Estàs utilitzant un nom que Python no coneix. Comprova que la variable existeix i està escrita igual a tot arreu.";
  return error.split("\n").slice(-2).join("\n");
}

function analyzeWrongOutput(code, expected, actual, exercise, pending) {
  if (exercise.id === "com-et-dius" && pending.previewCompleted) {
    const userName = pending.userInputs[0];
    const expectedWithUserData = `Hola, ${userName}!`;
    const actualWithUserData = pending.previewOutput || "[El programa no ha mostrat cap output]";
    return `La salutació funciona, però revisa el format.\nEsperàvem: ${expectedWithUserData}\nHem obtingut: ${actualWithUserData}`;
  }
  if (actual.replace(/\s/g, "") === expected.replace(/\s/g, "")) return "El resultat és gairebé correcte. Revisa els espais i els salts de línia.";
  if (expected === "5" && actual.includes("23")) return "Has unit els dos valors com si fossin text. Recorda que `input()` retorna text i cal convertir-lo abans de sumar.";
  if (/print\(\s*["'][a-zA-Z_]\w*["']\s*\)/.test(code)) return "Estàs mostrant el nom d'una variable com a text. Si vols mostrar-ne el contingut, treu les cometes.";
  if (actual === "") return "El programa no ha mostrat cap resultat. Comprova que utilitzes `print()`.";
  return `El programa s'executa, però el resultat no és l'esperat.\nEsperàvem: ${expected}\nHem obtingut: ${actual}`;
}

function initWorker() {
  const workerCode = `
    let ready = false;
    async function init() {
      importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js");
      self.pyodide = await loadPyodide();
      ready = true;
      postMessage({ type: "ready" });
    }
    init();
    self.onmessage = async (event) => {
      if (!ready) return postMessage({ type: "error", error: "Python encara s'està preparant." });
      const { code, inputs, runId } = event.data;
      try {
        pyodide.globals.set("_student_code", code);
        pyodide.globals.set("_student_inputs", inputs);
        const result = await pyodide.runPythonAsync(\`
import sys, io, builtins
_out = io.StringIO()
_old_stdout = sys.stdout
_old_input = builtins.input
_input_values = iter(_student_inputs.to_py())
sys.stdout = _out
def _fake_input(prompt=""):
    try:
        return next(_input_values)
    except StopIteration:
        raise EOFError("No queden entrades de prova")
builtins.input = _fake_input
try:
    exec(_student_code, {})
finally:
    sys.stdout = _old_stdout
    builtins.input = _old_input
_out.getvalue()
        \`);
        postMessage({ type: "result", output: result, runId });
      } catch (error) {
        postMessage({ type: "error", error: String(error), runId });
      }
    };`;
  state.worker = new Worker(URL.createObjectURL(new Blob([workerCode], { type: "text/javascript" })));
  state.worker.onmessage = handleWorkerMessage;
  state.worker.onerror = () => {
    setTerminal("Error de càrrega", "No s'ha pogut carregar l'intèrpret de Python.");
    setFeedback("error", "No s'ha pogut iniciar Python", "Comprova la connexió a internet i torna-ho a provar. La resta del curs continua disponible.");
  };
}

async function runCurrentExercise() {
  const ex = exercises[state.currentExercise];
  const code = getEditorCode();
  const inputFields = [...document.querySelectorAll("[data-program-input]")];
  const inputPanel = document.querySelector(".program-inputs");
  if (inputPanel?.classList.contains("is-hidden")) {
    inputFields.forEach(field => field.value = "");
    inputPanel.classList.remove("is-hidden");
    inputFields[0]?.focus();
    setTerminal("Esperant dades", "El programa està esperant una resposta.");
    setFeedback("info", "El programa ha arribat a input()", "Escriu les dades que demana el programa i prem Enter o torna a prémer «Executa i comprova».");
    return;
  }
  const userInputs = inputFields.map(field => field.value);
  if (inputFields.length && userInputs.some(value => value.trim() === "")) {
    inputFields.find(field => field.value.trim() === "")?.focus();
    setTerminal("Esperant dades", "Introdueix les respostes del programa abans d'executar-lo.");
    setFeedback("info", "El programa necessita dades", "Omple els camps d'entrada. Aquests valors seran les respostes que rebrà cada funció input().");
    return;
  }
  if (inputPanel) {
    inputPanel.classList.add("is-hidden");
    inputFields.forEach(field => field.value = "");
  }
  setTerminal("Preparant...", "");
  if (!state.worker) initWorker();
  if (!state.workerReady) {
    setFeedback("info", "Preparant Python...", "La primera execució pot trigar uns segons. Ho comprovarem automàticament quan estigui llest.");
    state.pendingRun = { code, testIndex: 0, outputs: [], phase: inputFields.length ? "preview" : "tests", userInputs };
    return;
  }
  state.pendingRun = { code, testIndex: 0, outputs: [], phase: inputFields.length ? "preview" : "tests", userInputs };
  inputFields.length ? executePreview() : executeNextTest();
}

function resetProgramInputs() {
  const panel = document.querySelector(".program-inputs");
  document.querySelectorAll("[data-program-input]").forEach(field => field.value = "");
  panel?.classList.add("is-hidden");
}

function executePreview() {
  const pending = state.pendingRun;
  const runId = `${state.currentExercise}-preview-${Date.now()}`;
  pending.runId = runId;
  setTerminal("Executant amb les teves dades", "");
  setFeedback("info", "Executant el programa...", "Primer provarem el programa amb les dades que has introduït.");
  state.worker.postMessage({ code: pending.code, inputs: pending.userInputs, runId });
  startRunTimer();
}

function executeNextTest() {
  const ex = exercises[state.currentExercise];
  const pending = state.pendingRun;
  if (pending.testIndex >= ex.tests.length) return completeExerciseCheck();
  const test = ex.tests[pending.testIndex];
  const runId = `${state.currentExercise}-${pending.testIndex}-${Date.now()}`;
  pending.runId = runId;
  const inputSummary = test.inputs.length ? `# Entrades de prova: ${test.inputs.join(", ")}` : "";
  if (!pending.previewCompleted) setTerminal(`Executant prova ${pending.testIndex + 1}/${ex.tests.length}`, inputSummary);
  setFeedback("info", "Comprovant la solució...", `Executant prova ${pending.testIndex + 1} de ${ex.tests.length}.`);
  state.worker.postMessage({ code: pending.code, inputs: test.inputs, runId });
  startRunTimer();
}

function startRunTimer() {
  clearTimeout(state.runTimer);
  state.runTimer = setTimeout(() => {
    state.worker.terminate();
    state.worker = null;
    state.workerReady = false;
    state.pendingRun = null;
    setTerminal("Temps excedit", "[Procés aturat: temps d'execució excedit]");
    setFeedback("error", "L'execució ha trigat massa", "Potser el programa conté un bucle infinit. Revisa les repeticions o les condicions i torna-ho a provar.");
  }, 5000);
}

function handleWorkerMessage(event) {
  if (event.data.type === "ready") {
    state.workerReady = true;
    if (state.pendingRun) state.pendingRun.phase === "preview" ? executePreview() : executeNextTest();
    return;
  }
  const pending = state.pendingRun;
  if (!pending || event.data.runId !== pending.runId) return;
  clearTimeout(state.runTimer);
  const ex = exercises[state.currentExercise];
  if (event.data.type === "error") {
    setTerminal("Error de Python", event.data.error);
    setFeedback("error", "Python ha trobat un error", friendlyError(event.data.error, pending.code));
    state.pendingRun = null;
    return;
  }
  const actual = String(event.data.output).trim();
  if (pending.phase === "preview") {
    pending.previewOutput = actual;
    pending.previewCompleted = true;
    pending.phase = "tests";
    setTerminal("Output amb les teves dades", actual || "[El programa no ha mostrat cap output]");
    executeNextTest();
    return;
  }
  const expected = ex.tests[pending.testIndex].output.trim();
  const inputSummary = ex.tests[pending.testIndex].inputs.length ? `# Entrades de prova: ${ex.tests[pending.testIndex].inputs.join(", ")}\n` : "";
  if (!pending.previewCompleted) setTerminal(actual === expected ? "Output correcte" : "Output incorrecte", `${inputSummary}${actual || "[El programa no ha mostrat cap output]"}`);
  if (actual !== expected) {
    setFeedback("error", "La solució encara necessita un petit ajust", analyzeWrongOutput(pending.code, expected, actual, ex, pending));
    state.pendingRun = null;
    return;
  }
  pending.outputs.push(actual);
  pending.testIndex++;
  executeNextTest();
}

function completeExerciseCheck() {
  const ex = exercises[state.currentExercise];
  if (ex.rule) {
    const ruleMessage = ex.rule(state.pendingRun.code);
    if (ruleMessage) {
      setTerminal("Requisits pendents", state.pendingRun.previewOutput || state.pendingRun.outputs.at(-1) || "[El programa no ha mostrat cap output]");
      setFeedback("error", "El resultat és correcte, però...", ruleMessage);
      state.pendingRun = null;
      return;
    }
  }
  state.completed.add(ex.id);
  localStorage.setItem("python-progress", JSON.stringify([...state.completed]));
  updateProgress();
  setTerminal("Totes les proves superades", state.pendingRun.previewOutput || state.pendingRun.outputs.at(-1) || "[El programa no ha mostrat cap output]");
  setFeedback("success", "Molt bé! Exercici completat", `La solució ha superat ${ex.tests.length === 1 ? "la prova" : `les ${ex.tests.length} proves`}. Ja pots continuar amb el següent exercici.`);
  showToast("Progrés guardat");
  state.pendingRun = null;
}

function updateProgress() {
  document.querySelector("#progress-label").textContent = `${state.completed.size} / ${exercises.length}`;
  document.querySelector("#progress-bar").style.width = `${state.completed.size / exercises.length * 100}%`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 2200);
}

function route() {
  const hash = location.hash.slice(1) || "inici";
  if (hash === "inici") renderHome();
  else if (hash === "exercicis") renderExerciseList();
  else if (/^exercici-\d+$/.test(hash)) renderExercise(Number(hash.split("-")[1]) - 1);
  else {
    const chapter = chapters.find(c => c.id === hash);
    chapter ? renderChapter(chapter) : renderHome();
  }
}

renderNav();
updateProgress();
route();
window.addEventListener("hashchange", route);

function updateSidebarButton() {
  const isDesktop = desktopMedia.matches;
  const isExpanded = isDesktop ? !appShell.classList.contains("sidebar-collapsed") : sidebar.classList.contains("open");
  const action = isExpanded ? "Col·lapsa la barra lateral" : "Mostra la barra lateral";
  menuButton.setAttribute("aria-expanded", String(isExpanded));
  menuButton.setAttribute("aria-label", action);
  menuButton.title = action;
}

function restoreSidebarState() {
  const collapsed = localStorage.getItem("python-sidebar-collapsed") === "true";
  appShell.classList.toggle("sidebar-collapsed", desktopMedia.matches && collapsed);
  if (desktopMedia.matches) sidebar.classList.remove("open");
  updateSidebarButton();
}

menuButton.addEventListener("click", () => {
  if (desktopMedia.matches) {
    const collapsed = appShell.classList.toggle("sidebar-collapsed");
    localStorage.setItem("python-sidebar-collapsed", String(collapsed));
  } else {
    sidebar.classList.toggle("open");
  }
  updateSidebarButton();
});

function closeMobileSidebar() {
  sidebar.classList.remove("open");
  updateSidebarButton();
}

sidebarClose.addEventListener("click", closeMobileSidebar);
sidebarBackdrop.addEventListener("click", closeMobileSidebar);

desktopMedia.addEventListener("change", restoreSidebarState);
restoreSidebarState();

document.querySelector("#reset-progress").addEventListener("click", () => {
  state.completed.clear();
  localStorage.removeItem("python-progress");
  updateProgress();
  route();
  showToast("Progrés reiniciat");
});
