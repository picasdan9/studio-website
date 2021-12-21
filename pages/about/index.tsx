import AboutListItem from 'components/AboutListItem';
import Layout from 'components/Layout';

import styles from './aboutStyles.module.css';

const EXPERIENCE_ITEMS = [
  ['2020 - ', 'Contributing Writer, Matca, Vietnam'],
  ['2020 - ', 'Contributing Writer, SINdie, Singapore'],
  ['2021', 'Festival Guide Writer, SGIFF, Singapore'],
];

const EXHIBITION_ITEMS = [
  ['2021', 'Shooting Home Youth Awards, Objectifs, Singapore'],
  ['2019', 'REJECTS, The Substation, Singapore'],
];

const PRIZE_ITEMS = [
  ['2019 - 2023', 'NUS-MOE Undergraduate Merit Scholarship, NUS'],
  ['2021', 'Ernst-Reuter-Gesellschaft e.V. Scholarship, FUBiS'],
  ['2021', 'Best Book Review Prize, Margins, NUS'],
];

const PROGRAMME_PARTICIPATION = [
  ['2021', 'Film Criticism - Long Written Forms, Asian Cinema Education'],
  ['2020', 'Shooting Home Youth Awards, Objectifs, Singapore'],
  ['2019', 'Youth Jury & Critics Programme, SGIFF, Singapore'],
];

const SECTIONS = [
  {
    title: 'Experience',
    items: EXPERIENCE_ITEMS,
  },
  {
    title: 'Group Exhibitions',
    items: EXHIBITION_ITEMS,
  },
  {
    title: 'Prizes and Scholarships',
    items: PRIZE_ITEMS,
  },
  {
    title: 'Program Participation',
    items: PROGRAMME_PARTICIPATION,
  },
];

const ContactIndex = () => (
  <Layout title='about'>
    {SECTIONS.map((section) => (
      <section key={section.title} className={styles['section']}>
        <h2>{section.title}</h2>
        <ol>
          {section.items.map((item, idx) => (
            <AboutListItem key={idx} time={item[0]} desc={item[1]} />
          ))}
        </ol>
      </section>
    ))}
    <section className={styles['section-contact']}>
      <h2>Contact</h2>
      <div>
        Write to me at{' '}
        <a href='mailto: picasdan99@gmail.com'>picasdan99@gmail.com</a>
      </div>
    </section>
  </Layout>
);

export default ContactIndex;
