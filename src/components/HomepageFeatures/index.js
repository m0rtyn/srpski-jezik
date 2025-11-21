import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Падежи',
    description: (
      <>
        Основные падежи сербского языка с правилами и примерами.
        <br />
        <Link to="/docs/grammar/cases/summary">Сводная таблица падежей</Link>
        <br />
        <Link to="/docs/grammar/cases/nominative">Именительный</Link> ·{' '}
        <Link to="/docs/grammar/cases/genitive">Родительный</Link> ·{' '}
        <Link to="/docs/grammar/cases/accusative">Винительный</Link>
      </>
    ),
  },
  {
    title: 'Глаголы',
    description: (
      <>
        Времена и формы глагола.
        <br />
        <Link to="/docs/grammar/verbs/past-tense">Прошедшее время (perfekat)</Link>
        <br />
        <Link to="/docs/grammar/verbs">Все материалы по глаголам</Link>
      </>
    ),
  },
  {
    title: 'Разговорник',
    description: (
      <>
        Частотные фразы для повседневной речи и переезда.
        <br />
        <Link to="/docs/phrasebook/common-phrases-2025">
          Частотные фразы 2025
        </Link>
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
