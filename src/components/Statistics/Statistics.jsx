import PropTypes from "prop-types";
import scss from './stats.module.css';
import {getColor} from './getColour';


const StatsItem = ({ stats }) => {
  return (
    <ul className={scss.list}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={scss.item} style={{backgroundColor: getColor()}}>
          <span className={scss.label}>{label}</span>
          <span className={scss.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  );
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={scss.statistics}>
      {title && <h2 className={scss.title}>{title}</h2>}
      <StatsItem stats={stats} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
