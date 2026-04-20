import styles from "./Error.module.css";

const Error = () => {
  return (
    <div
      role='alert'
      aria-live='assertive'
      aria-describedby=''
      className={styles.errorWrapper}
    >
      <img
        src='../../src/assets/images/icon-error.svg'
        alt='error'
      />
      <h2>Something went wrong</h2>
      <p>
        We couldn't connect to the server (API error). Please try again in a few
        moments.
      </p>
      <button>
        <img
          src='../../src/assets/images/icon-retry.svg'
          alt=''
        />
        Retry
      </button>
    </div>
  );
};

export default Error;
