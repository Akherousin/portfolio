import styles from './Cloud.module.css';

function Cloud() {
  return (
    <g className={styles.cloud}>
      <g className={styles['left-leg']}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
          d="M1253.9 182c6.5 8.1 11.8 7.7 22 6.5"
        ></path>
        <ellipse
          cx="5"
          cy="3"
          fill="currentColor"
          rx="5"
          ry="3"
          transform="scale(1 -1) rotate(-39.1 369 -1886.8)"
        ></ellipse>
      </g>
      <g className={styles['right-leg']}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
          d="M1245.9 184c0 10.5 12.5 13.5 16.5 10.5"
        ></path>
        <path
          fill="currentColor"
          d="M1266.4 202.3c1.5-.8 1.7-3.4.5-5.8-1.1-2.5-3.3-4-4.8-3.2-1.5.7-1.8 3.3-.6 5.8 1.2 2.5 3.4 3.9 4.9 3.2z"
        ></path>
      </g>
      <g className={styles.upperbody}>
        <path
          className={styles['right-arm']}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
          d="M1253.4 178.5c5.9 4.3 9.4 5.3 16 6"
        ></path>
        <path
          fill="#fff"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M1229.4 139.7c-9.5 5-3.5 12.5-3.5 12.5s-12.5.5-12.5 11.5 9.5 10.5 9.5 10.5-6 12 3 16 16-3.5 16-3.5 7.5 9 15 3.5 4-12.5 4-12.5 10-2 9.5-12-9.5-11-9.5-11 4-4.5-4-12-15 0-15 0-3-8-12.5-3z"
        ></path>

        <g>
          <mask
            id="mask1_18_97"
            width="7"
            height="9"
            x="1230"
            y="161"
            maskUnits="userSpaceOnUse"
            style={{ maskType: 'alpha' }}
          >
            <path
              className={styles['right-eye']}
              fill="currentColor"
              d="M1236.8 165c0 2.8-.4 4.8-3 4.5-1.3 0-3.7-1.7-3.7-4.4 0-2.8 1.5-3.6 2.8-3.6 1.3 0 3.9.8 3.9 3.6z"
            ></path>
          </mask>
          <g mask="url(#mask1_18_97)">
            <path
              fill="currentColor"
              d="M1236.8 165c0 2.8-.4 4.8-3 4.5-1.3 0-3.7-1.7-3.7-4.4 0-2.8 1.5-3.6 2.8-3.6 1.3 0 3.9.8 3.9 3.6z"
            ></path>
            <ellipse
              cx="1233.4"
              cy="165.4"
              fill="#fff"
              rx="1.3"
              ry="1.7"
            ></ellipse>
          </g>
        </g>

        <g>
          <mask
            id="mask0_18_97"
            width="8"
            height="9"
            x="1241"
            y="162"
            maskUnits="userSpaceOnUse"
            style={{ maskType: 'alpha' }}
          >
            <path
              className={styles['left-eye']}
              fill="currentColor"
              d="M1248.4 165.7c0 2.2-1.1 4.6-4 4.3-1.5 0-3-2-3-4.3 0-2.2 1.5-3.7 3-3.7 1.4 0 4 1.5 4 3.7z"
            ></path>
          </mask>
          <g mask="url(#mask0_18_97)">
            <path
              fill="currentColor"
              d="M1248.4 165.7c0 2.2-1.1 4.6-4 4.3-1.5 0-3-2-3-4.3 0-2.2 1.5-3.7 3-3.7 1.4 0 4 1.5 4 3.7z"
            ></path>
            <ellipse
              cx="1244.7"
              cy="165.7"
              fill="#fff"
              rx="1.3"
              ry="1.7"
            ></ellipse>
          </g>
        </g>
        <circle cx="1239.4" cy="173" r="1" fill="currentColor"></circle>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          d="M1226.4 158.3c2.7-1.4 1.3-1.6 5.4-.8"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          d="M1249.4 161.2c1.8-.3 1.9-1 3.6 1.4"
        ></path>
        <path
          fill="#F87223"
          d="M1258.2 170.6c-.2.4-1.7.7-2.8.2-1.1-.5-2-1-1.8-1.5.2-.3 2-.7 3-.2 1.2.5 1.8 1.1 1.6 1.5z"
        ></path>
        <path
          fill="#F87223"
          d="M1220.5 167.6c.1.4 1.5 1 2.7.8 1.2-.2 2.1-.6 2-1 0-.3-1.6-1.1-2.8-.9-1.3.2-2 .7-1.9 1.1z"
        ></path>
        <path
          className={styles['left-arm']}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
          d="M1258.9 174c4.7 4.4 7.6 5.6 13.5 5.5"
        ></path>
      </g>
    </g>
  );
}

export default Cloud;
