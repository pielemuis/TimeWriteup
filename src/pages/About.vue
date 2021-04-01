<template>
  <div class="container">
    <!-- ADD HTML HERE-->
    <div class="row">
      <div class="col-sm-8">
        <h1>Over deze applicatie</h1>
        <p>
          Deze applicatie is gemaakt in het kader van het vak 'Client side web
          frameworks' van Avans Hogeschool Breda
        </p>
        <h2 class="text-break">Opdrachtbeschrijving</h2>
        <p>
          Dit project is mijn individuele opdracht voor Client side web
          framworks. Bij dit project maak ik gebruik van het Vuejs framework.
          Styling is aan de hand van bootstrap, en principes zoals geleerd bij
          Ux-design. Ik pas het split-complementaire kleurprincipe toe met
          goudgeel en verschillende kleuren blauw. De dataopslag dient volgens
          de opdracht met nosql gedaan te worden, maar aangezien ik dat vak
          vorig jaar al afgerond heb weet ik nog niet zeker of dit wel de
          handigste methode gaat zijn.
        </p>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="text-center">
            <img class="logo" src="../assets/logo.png" />
          </div>
          <h3>Dylan Mulder</h3>
          <p>2145766</p>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-sm-12">
        <h2>Time Writeup</h2>
        <p>
          De casus waar ik voor heb gekozen is een "Time Writeup" webprogramma.
          Gebruikers werken aan Use Cases behorende bij een Project (voor een
          klant), en zij kunnen een "Writeup" maken waarbij ze aangeven hoeveel
          tijd ze besteed hebben aan hun werk op een bepaalde datum.
        </p>
        <p>
          Aan de hand van deze writeups krijgt het management of de klant
          gemakkelijk inzicht in hoe het werk aan het project is verlopen. Zo
          worden de totaal gewerkte uren bijgehouden - in totaal en per use
          case. Aan de hand van queries kan er dus worden gekeken hoeveel
          werkuren er zijn verricht op bepaalde dagen, aan bepaalde use cases,
          en door verschillende werknemers.
        </p>
        <p>
          Writeups horen altijd bij een use case, en moeten een datum hebben.
          Een beschrijving van het werk is optioneel. Werknemers hebben inzicht
          op hun eigen gemaakte Writeups, mogen alle use cases aanpassen of
          verwijderen, en mogen het project lezen. Het management mag alle
          CRUD-operaties uitvoeren. Klanten mogen alleen het project, en de use
          cases lezen.
        </p>
      </div>
    </div>

    <br />
    <div class="row">
      <h2 class="col-sm-12">Entiteiten</h2>
    </div>

    <div class="row">
      <div class="col-sm">
        <h4>Project</h4>
        <ul>
          <li>id: number</li>
          <li>name: string</li>
          <li>description: string</li>
          <li>hoursTotal: number</li>
          <li>getHoursTotal()</li>
        </ul>
      </div>
      <div class="col-sm">
        <h4>Writeup</h4>
        <ul>
          <li>id: number</li>
          <li>date: dateTime</li>
          <li>description: string</li>
          <li>hours: number</li>
        </ul>
      </div>
      <div class="col-sm">
        <h4>Use Case</h4>
        <ul>
          <li>id: number</li>
          <li>name: string</li>
          <li>description: string</li>
          <li>hoursTotal: number</li>
          <li>status: string</li>
        </ul>
      </div>
    </div>
    <br />

    <div class="row">
      <h2 class="col-sm-12">UML Diagram</h2>
      <a
        href="https://lucid.app/invitations/accept/1c9edbb3-7a35-4106-8a63-ca5532c6d510"
        target="_blank"
        class="col-sm-12"
        >Klik op deze link om op LucidChart de UML diagram te bekijken.</a
      >
      <p class="col-sm-12">Deze had ik eerst embedded, maar dit gaf aan mijn kant ongeveer 50 errors in de browser console. Errors kan ik niet hebben.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 12rem;
  height: 12rem;
  background: #14b8ff2a;
  text-align: center;
  max-width: 100vw;
}
.uml-diag {
  height: 50rem;
}
.logo {
  width: 6rem;
  height: 6rem;
  max-width: 80vw;
  max-height: 80vw;
}
</style>
