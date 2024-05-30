import styles from './Round.module.css';

function Round() {
  return (
    <g className={styles.round}>
      <g className={styles['left-leg']} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeWidth="4"
          d="M1091 140.8l2.9 26.6"
        ></path>
        <path
          fill="#F4AF15"
          strokeWidth="2"
          d="M1109.2 161.3c.5.9.4 2.2-.7 4-1 1.6-2.9 3.3-5.3 4.7a15.6 15.6 0 01-6.9 2.2c-2 .1-3.2-.5-3.7-1.3s-.3-2.2.7-3.9c1-1.7 3-3.4 5.4-4.8 2.4-1.4 4.8-2.1 6.8-2.2 2 0 3.3.5 3.7 1.3z"
        ></path>
      </g>
      <g className={styles['right-leg']} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeWidth="4"
          d="M1081.4 142.3l-16.3 21.1"
        ></path>
        <path
          fill="#F4AF15"
          strokeWidth="2"
          d="M1057.3 149.6c-.8.4-1.4 1.7-1.4 3.7s.7 4.4 2 6.9c1.4 2.4 3.1 4.3 4.8 5.4 1.6 1.1 3 1.3 3.8.8.9-.5 1.5-1.7 1.4-3.7 0-2-.7-4.4-2-6.9a16 16 0 00-4.7-5.4c-1.7-1.1-3-1.3-3.9-.8z"
        ></path>
      </g>
      <path
        className={styles.spikes}
        fill="#F4AF15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M1075.5 105s2-20.4 6-22c4-1.4 5.5 23.4 5.5 23.4s2.5-29.8 9.5-28.3 0 29.4 0 29.4 8.5-21.3 13.5-18c5 3.4-4.5 19-4.5 19l-9-1-21-2.4z"
      ></path>
      <path
        className={styles['right-arm']}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
        d="M1068 123.7s-1.8 12.5-23 7.3"
      ></path>
      <path
        className={styles.body}
        fill="#fff"
        stroke="currentColor"
        strokeWidth="2"
        d="M1122.5 125c0 11.3-3.8 17.7-9.6 21.2a36.4 36.4 0 01-22.2 3.3c-8.6-1-17.9-3.7-25-8.2-7-4.5-11.7-10.7-11.7-18.2a25 25 0 018-18.8 31.9 31.9 0 0121.6-7.2c9 0 18.6 1.4 25.9 5.6a25 25 0 0113 22.4z"
      ></path>
      <path
        className={styles['left-arm']}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
        d="M1113.4 137.8s2.5 7 12.6 8.3"
      ></path>
      <g className={styles.face}>
        <g>
          <g>
            <mask
              id="mask2_18_97"
              width="11"
              height="15"
              x="1091"
              y="113"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'alpha' }}
            >
              <path
                fill="currentColor"
                d="M1101 121c0 3.3-2.3 6.5-5 6.5-2.9 0-5.6-4.8-4.8-8.2-.1-2.3 2-5.5 4.8-5.5 3 0 5.7 4 5 7.2z"
              ></path>
            </mask>
            <g mask="url(#mask2_18_97)">
              <path
                fill="currentColor"
                d="M1101 121c0 3.3-2.3 6.5-5 6.5-2.9 0-5.6-4.8-4.8-8.2-.1-2.3 2-5.5 4.8-5.5 3 0 5.7 4 5 7.2z"
              ></path>
              <ellipse
                cx="1096.7"
                cy="118.6"
                fill="#fff"
                rx="1.4"
                ry="1.6"
              ></ellipse>
            </g>
          </g>
          <g>
            <mask
              id="mask3_18_97"
              width="10"
              height="14"
              x="1074"
              y="112"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'alpha' }}
            >
              <path
                fill="currentColor"
                d="M1083.4 119.4c0 3.1-1.5 6.4-4.2 6.4s-5.7-4.8-5-8c0-3.1 2.3-5.6 5-5.6s4.2 4 4.2 7.2z"
              ></path>
            </mask>
            <g mask="url(#mask3_18_97)">
              <path
                fill="currentColor"
                d="M1083.4 119.4c0 3.1-1.5 6.4-4.2 6.4s-5.7-4.8-5-8c0-3.1 2.3-5.6 5-5.6s4.2 4 4.2 7.2z"
              ></path>
              <ellipse
                cx="1079.8"
                cy="118.6"
                fill="#fff"
                rx="1.4"
                ry="1.6"
              ></ellipse>
            </g>
          </g>
        </g>
        <g className={styles.brows} stroke="currentColor" strokeLinecap="round">
          <path d="M1073 110c4-2.2 2-2.5 8-1.3"></path>
          <path d="M1098 109.7c2.7-.4 2.8-1.4 5.4 2.2"></path>
        </g>
        <path
          fill="#F4AF15"
          d="M1109 129.1c0 .6-1.8 2-3.7 2-1.8 0-3.3-.3-3.3-.9 0-.6 2.2-2.1 4-2.1 1.8 0 3 .4 3 1z"
        ></path>
        <path
          fill="#F4AF15"
          d="M1066 126.1c0 .6 1.8 2 3.7 2 1.8 0 3.3-.3 3.3-.9 0-.6-2.2-2.1-4-2.1-1.8 0-3 .4-3 1z"
        ></path>
        <circle cx="1087.7" cy="131.4" r="2.2" fill="currentColor"></circle>
      </g>
    </g>
  );
}

export default Round;
