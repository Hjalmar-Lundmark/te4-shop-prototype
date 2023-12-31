# PM - Webbshop

## Vad var uppdraget?
Att skapa en webbshop för djurkläder som tas från en databas. Den ska innehålla produkter som kan visas på en sida med alla produkter eller sorterade på deras kategorier, samt en framsida med en call-to-action och sedan lite produkter. Det ska finnas en enskild produktsida med mer info om den produkten, som man tas till genom att klicka på produkten i listan. Produkter ska kunna läggas i varukorgen från ställena man kan se produkten och genom en knapp i navbaren så ska man kunna ta sig till kassan. Jag valde att göra en sak i mellan de stegen, alltså att knappen i navbaren öppnar sin varukorg som en popup där man kan se produkterna, priset och en knapp för att ta sig till kassan. En sökfunktion var inte ett måste men jag la till det ändå.

## Vad gick bra och hur löste jag mina problem?
Att skapa en popup-varukorg var definitivt inte lätt, både funktionerna i den och att få den att se snygg ut visade sig vara kneppiga uppgifter jag hade framför mig. Jag löste designen med ```position: absolute;``` och att placera den rätt. Först använde jag mig av bara Reacts ```useState``` och ```useEffect``` för att lägga till och att se produkter i varukorgen, men då fick jag problem med att jag inte kunde dela data och funktioner mellan komponenter. Jag löste det genom att kopiera/placera funktioner där de kallas och att använda LocalStorage som en useState. Den lösningen fungerade hyffsat bra, i alla fall tills jag lärde mig om ```useContext``` som löser mitt problem mycket enklare. Jag sparade den lösningen i Git-branchen som heter '[SolutionWOcontext](https://github.com/Hjalmar-Lundmark/te4-shop-prototype/tree/SolutionWOcontext)'. Till slut bytte jag ut det och använde React Context för att dela data mellan komponenter, vilket var en ny erfarenhet för mig.

Resten av arbetet gick bra utan problem. 

### Bilder
![Framsida](/public/screenshots/1.png)
Framsidan med en call-to-action och lite produkter.

![Framsida](/public/screenshots/2.png)
Framsidan scrollad ner

![Footer](/public/screenshots/3.png)
Footer + framsidan längst ner.

![Enskild produktsida](/public/screenshots/10.png)
En enskild produktsida med mer info om produkten.

![Alla](/public/screenshots/4.png)
Alla produkter.

![kategori](/public/screenshots/5.png)
Sorterat på kategorin hundprodukter

![sökresultat](/public/screenshots/8.png)
Sökresultat på igelkott

![Varukorg](/public/screenshots/7.png)
Varukorgen som en popup.

![Kassan](/public/screenshots/9.png)
Kassan.

## Vad gick mindre bra?
Hemsidan ser ut att vara från 2002, men då jag fokuserade mest på att lägga till funktioner så gick jag med en enkel design som ser okej ut. Att jobba på designen skulle vara nästa steg i utvecklingen av hemsidan.