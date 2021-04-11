# Teamový Projekt - vývojový list

Ke spuštění projektu jsou potřeba 3 věci

1. Vytvoření .env souboru v rootu adresáře server. V .env je pouze jedna proměnná DB_CONNECT, jejíž hodnota je url string vzatý z Mongo Atlasu. Je tedy potřeba, pokud si chcete u sebe project rozběhnout, vytvořit si účet na atlasu a v sekci connect získat url string k připojení k databázi. `DB_CONNECT=`
2. Dále je potřeba mít nainstalovaný TypeScript
3. Nakonec stačí dát v obou adresářích `npm install` -> tím se nainstaluje React ve složce client a backend ve složce server.

## Spouštění appky

`npm run dev` spustí v současné době jen backend, který je ve vývoji

