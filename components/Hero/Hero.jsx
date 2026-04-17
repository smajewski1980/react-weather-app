import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className={styles.heroH1}>How's the sky looking today?</h1>
      <form
        onSubmit={handleSubmit}
        aria-role='search'
        className={styles.searchForm}
      >
        <div className={styles.searchInputWrapper}>
          <input
            type='text'
            name='searchTerm'
            id='search-term'
            placeholder='Search for a place...'
          />
        </div>
        <button type='submit'>Search</button>
      </form>
    </>
  );
};

export default Hero;
