import * as React from 'react';
import styles from './MgtDemo.module.scss';
import { IMgtDemoProps } from './IMgtDemoProps';

// to ensure your webpart is leveraging the shared mgt library,
// make sure you are only importing from
//  - @vonrehberg.consulting/mgt-react/dist/es6/spfx
//  - @vonrehberg.consulting/mgt-sfpx
// and no other mgt packages
import {
  Person,
  People,
  Agenda,
  TeamsChannelPicker,
  Tasks,
  PeoplePicker
} from '@vonrehberg.consulting/mgt-react/dist/es6/spfx';
import { PersonViewType, PersonCardInteraction } from '@vonrehberg.consulting/mgt-spfx';

export default class MgtDemo extends React.Component<IMgtDemoProps, {}> {
  public render(): React.ReactElement<IMgtDemoProps> {
    return (
      <div className={styles.mgtDemo}>
        <div className={styles.container}>
          <Person
            personQuery="me"
            view={PersonViewType.twolines}
            personCardInteraction={PersonCardInteraction.hover}
            showPresence={true}
          ></Person>

          <People></People>

          <Agenda></Agenda>

          <PeoplePicker></PeoplePicker>

          <TeamsChannelPicker></TeamsChannelPicker>

          <Tasks></Tasks>
        </div>
      </div>
    );
  }
}
