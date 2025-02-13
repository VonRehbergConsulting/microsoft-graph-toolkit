<template>
  <div id="mainPage">
    <div id="sidePanel" v-if="showPanel">
      <div id="profile">
        <mgt-person person-query="me" view="twoLines" line2-property="jobTitle"> </mgt-person>
        <a href="#" @click="logout">Sign Out</a>
      </div>

      <mgt-people v-pre>
        <template>
          <ul>
            <li data-for="person in people">
              <mgt-person person-query="{{ person.userPrincipalName }}"></mgt-person>
              <h3>{{ person.displayName }}</h3>
              <p>{{ person.jobTitle }}</p>
              <p>{{ person.department }}</p>
            </li>
          </ul>
        </template>
      </mgt-people>
    </div>

    <h2 id="agendaHeader">Agenda</h2>
    <mgt-agenda group-by-day="true"></mgt-agenda>

    <h2 id="tasksHeader">Tasks</h2>
    <mgt-tasks data-source="todo" read-only="true"></mgt-tasks>

    <h2 id="filesHeader">Files</h2>
    <recent-file-list class="files" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Providers, MgtPerson, MgtAgenda, MgtPeople, MgtTasks, IDynamicPerson } from '@vonrehberg.consulting/mgt';
import RecentFileList from './RecentFileList.vue';

@Component({
  components: {
    RecentFileList
  }
})
export default class LoggedInPage extends Vue {
  private showPanel = true;
  private details: IDynamicPerson = {};

  private async mounted() {
    // TODO: Fire event in person when data loaded from query. See Issue #99.
    setTimeout(this.setDetails, 1000);
  }

  private setDetails() {
    this.details = (this.$refs.user as MgtPerson).personDetails;
  }

  private logout() {
    const provider = Providers.globalProvider;
    if (provider && provider.logout) {
      provider.logout();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#mainPage {
  display: grid;
  grid-template-rows: 64px auto 64px 209px;
  grid-template-columns: 488px auto auto;

  height: 100vh;
}

#sidePanel {
  grid-column: 1;
  grid-row: 1 / span 4;

  display: flex;
  flex-direction: column;

  padding: 40px;

  background: url('/background-compact.svg');

  box-shadow: 8px 4px 14px rgba(21, 21, 21, 0.05);

  #profile {
    color: #00188f;
    background-color: white;
    display: flex;
    flex-direction: column;

    width: 370px;
    padding: 20px;

    box-shadow: 0px 3.4386px 10.3158px rgba(0, 0, 0, 0.11);

    mgt-person {
      --avatar-size: 92px;
      --avatar-border: 4px solid #00a5b0;
      --font-size: 24px;
      --font-weight: 250;
      --color: #00188f;
    }

    a {
      margin-top: 20px;
    }

    p {
      position: absolute;
      top: 65px;
      left: 138px;

      font-style: normal;
      font-weight: 600;
      font-size: 12.0351px;
      line-height: 18px;

      color: #676b80;
    }

    span {
      position: absolute;
      top: 8px;
      right: 0px;

      font-size: 30px;
      font-weight: 300;

      color: #0078d4;
      transform: rotate(90deg);
    }

    .menu {
      margin: 8px 12px;

      display: flex;

      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 100%;

      color: #d73b02;

      img {
        width: 20px;
        height: 20px;

        margin-right: 12px;
      }
    }
  }

  mgt-people {
    --avatar-spacing: 0px 0px 16px 0px;

    &::before {
      content: 'My Frequent Contacts';
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 24px;

      margin: 34px 0px 0px 0px;

      display: block;
    }

    ul {
      list-style-type: none;
      padding: 0;

      display: flex;
      flex-flow: wrap;
    }

    li {
      width: 196px;
      height: 196px;

      margin-bottom: 16px;

      &:nth-child(odd) {
        margin-right: 16px;
      }

      background: white;

      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);

      display: flex;
      flex-direction: column;

      mgt-person {
        --avatar-size-s: 72px;

        margin: 22px 0px 0px 22px;
      }

      h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;

        margin-left: 20px;
        margin-bottom: 8px;

        color: #33332d;
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;

        margin: 0;
        margin-left: 20px;

        color: #666666;
      }
    }
  }
}

#agendaHeader {
  grid-column: 2;

  color: #ef6950;

  @media only screen and (max-width: 1280px) {
    grid-column: 2 / span 2;
  }
}

mgt-agenda {
  grid-column: 2;
  grid-row: 2;

  border-right: 1px solid #e1dfdd;

  padding-left: 20px;
  padding-right: 20px;

  height: 100%;
  overflow: auto;

  @media only screen and (max-width: 1280px) {
    grid-column: 2 / span 2;
  }
}

#tasksHeader {
  grid-column: 3;

  color: #2f80ed;

  border-left: 0;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
}

mgt-tasks {
  grid-column: 3;
  grid-row: 2;

  height: 100%;
  overflow: auto;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
}

#filesHeader {
  grid-row: 3;
  grid-column: 2 / span 2;

  color: #7b68c6;

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 100%;

    cursor: pointer;

    color: #917edb;
  }
}

h2 {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;

  margin: 0;
  padding-top: 24px;
  padding-left: 32px;

  height: 64px;

  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.03);
}

.files {
  grid-column: 2 / span 2;
  grid-row: 4;
}
</style>
