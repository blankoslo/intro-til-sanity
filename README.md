# Intro til Sanity ✨

Hvis du ikke har Node og npm:
https://kinsta.com/blog/how-to-install-node-js/

Hvis du har git
```
git clone https://github.com/blankoslo/intro-til-sanity.git
```
Hvis du ikke har git
```
Last ned prosjektet som zip og pakk ut
```

For å kjøre prosjektet
```
cd intro-til-sanity
cd web
npm install
npm start
```

For å kjøre sanity
```
cd studio
sanity start
```

## Oppgave 0
* Laste ned prosjektet og kjør det lokalt
* Legge til Sanity i prosjektet
	* Registrere en Sanity-bruker

```
npm i -g @sanity/cli
sanity init
```
* Kjøre ditt Sanity Studio lokalt

```
sanity start
```

## Oppgave 1
* Legg inn mulighet for å legge til tekst i sanity
* Bruk “Vision”-pluginen for å raskt teste GROQ-spørringer: https://www.sanity.io/docs/the-vision-plugin
* Tips: bruk Sanity-dokumentasjonen flittig: https://www.sanity.io/docs/reference
* Vis frem tekst fra sanity på nettsiden


## Oppgave 2
* Legg inn mulighet for å legge til bilder i sanity
* Vis frem bilder fra sanity på nettsiden
* Bonus: Legg til mulighet for “crop” og “hot-spot”
https://www.sanity.io/docs/presenting-images


## Oppgave 3
* Legg inn mulighet for å legge til en datatype “Innlegg” hvor hvert element består av et bilde og en tekst
* Vis frem hvert element på nettsiden
* Bonus: legg til styling på innleggslisten
