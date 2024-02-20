#Instractions

Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.



#Steps

-add html input structure
    -add form
        -add:
            -2 text input:
                -user name
                -travel length
            -1 select
                -user age
            -2 buttons:
                -1 submit
                -1 reset

-add js structure
    -ask and set as variables:
        -user name
        -travel length
        -user age
    -show variable in console at the click
    -calculate travel price
        -and show on console.log()
    -apply discounts
    -show results on console.log()

--Milestone 1--

-add html result structure
    -add ticket details:
        -user name
        -ticket type (discount if neede)
        -carriage (random)
        -train number (random)
        -price

-edit js to show results in the page
         
-add css

--Milestone 2--


#Tools

-element.value
-const/let
-element.addEventListener()
-if/else
-.toFixed()
-element.innerHTML
-Math.random()