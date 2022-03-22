# Intro til Sanity ✨

Hvis du ikke har Node og npm:
https://kinsta.com/blog/how-to-install-node-js/

Hvis du har Git
```
git clone https://github.com/blankoslo/intro-til-sanity.git
```
Hvis du ikke har Git
```
Last ned prosjektet som zip og pakk ut
```

Vi bruker React. For å kjøre React-applikasjonen:
```
cd intro-til-sanity
cd web
npm install
npm start
```

## Oppgave 0
* Forutsetninger:
	* Prosjektet er lastet ned
	* Du står i rotmappen (intro-til-sanity)
	* Du har åpnet en ny terminal, slik at React-applikasjonen og Sanity kan kjøre samtidig 
* Legge til Sanity i prosjektet (og lage en Sanity-bruker):

```
npm i -g @sanity/cli
sanity init
```
* Nå ber terminalen deg svare på noen ting:
	* "Your project name" skal være "studio"
	* Bruk "default configuraton".
	* Trykk enter på "Project output path"
	* "Select project template" skal være "Clean project with no predefined schemas"


* Kjøre ditt Sanity Studio lokalt

```
cd studio
sanity start
```
* Dette starter en applikasjon som kjører på http://localhost:3333

* Vi må konfigurere CORS origins for at vi skal kunne hente data fra Sanity-prosjektet til React-applikasjonen:
	*  Inne Sanity-prosjektet, gå til API -> CORS origins
	*  Klikk på "Add CORS origin"
	*  Legg til `http://localhost:3000` under Origin-feltet og trykk på "Save"

## Oppgave 1
* Legg til et `document`-skjema som definerer Ventilasjonskanal-siden
* Legg til et felt med typen `text` i skjemaet 
* Vis frem tekst fra sanity på nettsiden
* Tips: bruk Sanity-dokumentasjonen flittig: https://www.sanity.io/docs/reference


## Oppgave 2
* Legg inn mulighet for å legge til bilder i Sanity
* Vis frem bilder fra Sanity på nettsiden
* Bonus: Legg til mulighet for “crop” og “hot-spot”
https://www.sanity.io/docs/presenting-images


## Oppgave 3
* Legg inn mulighet for å legge til en datatype “Innlegg” hvor hvert element består av et bilde og en tekst
* Vis frem hvert element på nettsiden
* Bonus: legg til styling på innleggslisten
