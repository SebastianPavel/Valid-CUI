# Valid-CUI
Validare CUI/CIF

Pas 1: Se foloseste cheia de testare “753217532”. Se inverseaza ordinea cifrelor codului CIF precum si a cheii de testare.

Pas 2: Se ignora prima cifra din codul CIF inversat (aceasta este cifra de control) si se inmulteste fiecare cifra cu cifra corespunzatoare din cheia de testare inversata.

Pas 3: Se aduna toate produsele obtinute. Suma rezultata se inmulteste cu 10 si produsul este impartit la 11. Cifra obtinuta, in urma operatiei MODULO 11 reprezita cifra de verificare. Daca in urma impartirii s-a obtinut restul 10 atunci cifra de verificare va fi 0.

Pas 4: Pentru un CIF valid cifra de verificare va trebui sa corespunda cu cifra de control a codului CIF initial.
