import React from "react";

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>How's the sky looking today?</h1>
      <form
        onSubmit={handleSubmit}
        aria-role='search'
      >
        <input
          type='text'
          name='searchTerm'
          id='search-term'
          placeholder='Search for a place...'
        />
        <button type='submit'>Search</button>
      </form>
    </>
  );
};

export default Hero;
