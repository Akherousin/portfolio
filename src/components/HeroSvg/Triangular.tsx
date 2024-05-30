import styles from './Triangular.module.css';

function Triangular() {
  return (
    <g className={styles.triangular}>
      <g className={styles['right-leg']}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="4"
          d="M1152.8 340.3c-1.8 5.3-4.4 18.2 0 27"
        ></path>
        <ellipse
          cx="5.9"
          cy="3.1"
          fill="currentColor"
          rx="5.9"
          ry="3.1"
          transform="scale(-1 1) rotate(36.5 -1129.6 -1567.8)"
        ></ellipse>
      </g>
      <g className={styles['left-leg']}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="4"
          d="M1181.5 360.2s-21.5 4-19.1-19.9"
        ></path>
        <ellipse
          cx="6.2"
          cy="3.2"
          fill="currentColor"
          rx="6.2"
          ry="3.2"
          transform="scale(-1 1) rotate(87.6 -775.5 -435.8)"
        ></ellipse>
      </g>
      <path
        className={styles['right-arm']}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
        d="M1136 334c-2 3.8-7.6 11-13 9.9"
      ></path>
      <path
        fill="#F87223"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M1169 303.7c1-8.7 9.3-9.5 12-8.5 8 3 5.7 8.4 1.4 12.8.7 0 1.4 0 2.1.2 0 0 19 6-13.5 19.5l-2-24z"
      ></path>
      <path
        className={styles.body}
        fill="#fff"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M1186.4 339.2c-.8 6.4-22.2 9.7-36.4 7.6-14.3-2-20.2-10-19.2-14.6 3.5-16 18-45.2 31-45.2 16.7 0 25.4 45.7 24.6 52.2z"
      ></path>
      <path
        className={styles['left-arm']}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
        d="M1177 338s3.4 5.6 13 9"
      ></path>
      <g className={styles.face}>
        <path
          fill="currentColor"
          d="M1166.3 319.5c0 2.8-1 5.8-3.7 5.4-1.3 0-2.7-2.6-2.7-5.4 0-2.7 1.4-4.7 2.7-4.7 1.3 0 3.7 2 3.7 4.7z"
        ></path>
        <ellipse cx="1162.9" cy="319.5" fill="#fff" rx="1.3" ry="1.7"></ellipse>
        <path
          fill="currentColor"
          d="M1154.9 317.9c0 2.7-.7 6-3.4 5.7-1.3 0-3.3-3-3.3-5.7 0-2.8 2.4-5 3.7-5 1.3 0 3 2.2 3 5z"
        ></path>
        <ellipse cx="1151.5" cy="318.2" fill="#fff" rx="1.3" ry="1.7"></ellipse>
        <circle cx="1157.2" cy="324.2" r="1" fill="currentColor"></circle>
        <path
          fill="#F87223"
          d="M1173 327c-.3.3-1.7.6-2.9.1-1-.5-2-1-1.8-1.4.2-.4 2-.7 3-.2 1.2.5 1.8 1.1 1.6 1.5z"
        ></path>
        <path
          fill="#F87223"
          d="M1142.1 323c.1.5 1.5 1.1 2.7.9 1.2-.3 2.2-.6 2-1 0-.4-1.6-1.2-2.8-1-1.2.3-2 .8-1.9 1.2z"
        ></path>
        <g stroke="currentColor" strokeLinecap="round" className={styles.brows}>
          <path d="M1147.5 311.2c2.7-1.5 1.3-1.7 5.4-.9"></path>
          <path d="M1164.3 311c1.8-.3 1.9-1 3.6 1.4"></path>
        </g>
      </g>
    </g>
  );
}

export default Triangular;
