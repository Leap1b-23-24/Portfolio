import React from "react";
import { useState, useEffect } from "react";
import styles from "./style.module.css";


export const FlipCard = (props) => {

  return (
    <div
      onClick={() => {
        // setIsActive(event.target.parentNode.parentNode.id);
       props.flipCard()
      }}
      id={props.id}
      className={`${styles.flipCard}`}
      style={{ order: props.order, zIndex: props.zIndex }}
    >
      <div
        className={`${styles.flipCardInner}`}
        style={{
          transform: props.isFlipped ? "rotateY(180deg)" : "rotate(0deg)",
        }}
      >
        <div className={styles.flipCardBack}>
          <img className="h-2/5 w-2/5" src={props.source} />
        </div>
        <div
          className={`${styles.flipCardFront} flex flex-col object-contain items-center justify center`}
        ></div>
      </div>
    </div>
  );
};
