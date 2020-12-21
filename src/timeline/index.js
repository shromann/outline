import React from 'react';
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./index.modules.css";

const timeline = (props) => {

    let {events, orientation, startFrom} = props;
    
    //Reverse the list
    if (startFrom === "last") {
      events = events.reverse();
    }
  
    //Mapped List
    const eventsMappedToElements = events.map((e, i) => (
      <div
        key={e.time}
        className={cx(styles.timelineItem, { [styles.right]: i % 2 !== 0 })}
      >
        <div className={styles.timelineContent}>
          <span className={styles.time}>{e.time}</span>
          <span className={styles.title}>{e.title}</span>
          <p className={styles.desc}>{e.desc}</p>
        </div>
      </div>
    ));
  
    return (
      <div
        className={cx({
          [styles.vertical]: orientation === "vertical",
          [styles.horizontal]: orientation === "horizontal"
        })}
      >
        {eventsMappedToElements}
      </div>
    );
};
  
timeline.propTypes = {
    events: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
      })
    ).isRequired,
    orientation: PropTypes.oneOf(["horizontal", "vertical"]).isRequired,
    startFrom: PropTypes.oneOf(["first", "last"]).isRequired
};
  
timeline.defaultProps = {
    orientation: "vertical",
    startFrom: "last"
};

export default timeline;