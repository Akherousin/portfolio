import styles from './Flower.module.css';

function Flower() {
  return (
    <g className={styles.flower}>
      <g className={styles['right-leg']}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="7"
          d="M196.4 348.6c43.7-8.1 26.3-47.4 27.4-55.8"
        ></path>
        <path
          fill="currentColor"
          d="M199.5 373.3c-4.3.1-6.8-3.5-9.9-10.4-3-7-2-14.5 1.9-16.2 4-1.7 10.8 1.6 12.8 6.2s3.8 20-4.8 20.4z"
        ></path>
      </g>
      <g className={styles['left-leg']}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="7"
          d="M254.3 280.6c8.2 15.2 16.3 35.5 3.1 69"
        ></path>
        <path
          fill="currentColor"
          d="M275.2 365.7c-3.1 3-7.4 2-14.3-1-6.9-3.1-11.3-9.3-9.6-13.3 1.8-3.9 9.1-6 13.7-4 4.5 2 16.3 12.2 10.2 18.3z"
        ></path>
      </g>
      <g className={styles.upperbody}>
        <path
          className={styles['left-arm']}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="7"
          d="M308.3 255.2s38.6-4 43.7-10.1"
        ></path>
        <path
          fill="#fff"
          stroke="currentColor"
          strokeWidth="2"
          d="M217.2 112.4c-28.6 1.9-27.6 39.6-27.6 39.6-39.4-45.8-56.6-28.4-56.6-28.4-46.8 50.8 23.8 66.2 23.8 66.2s-35.5 0-33.6 32.1a34.2 34.2 0 0033.6 35.5s-44.4 20-16.3 57.3c59.8 31.7 63.6-28.9 63.6-28.9a34 34 0 0036 32.2c33.2-3.3 28.5-43.4 28.5-43.4s30.8 56.2 59.4 28.4c30.3-55-28.6-62.4-28.6-62.4s37-11.7 31.8-32.2c-5.1-20.5-28-34-28-34s37.8-56.9-3.8-66.2C257.8 99 257 146 257 146s-11.2-35.4-39.7-33.6z"
        ></path>
        <g>
          <g>
            <mask
              id="mask4_18_97"
              width="39"
              height="50"
              x="192"
              y="187"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'alpha' }}
            >
              <path
                className={styles['eye-mask']}
                fill="currentColor"
                d="M230.4 213.7c0 14.4-7.9 22.6-19 22.6-11.3 0-19.2-8.2-19.2-22.6 0-14.4 8-26 19.1-26 11.2 0 19.1 11.6 19.1 26z"
              ></path>
            </mask>
            <g mask="url(#mask4_18_97)">
              <path
                fill="currentColor"
                d="M230.4 213.7c0 14.4-7.9 22.6-19 22.6-11.3 0-19.2-8.2-19.2-22.6 0-14.4 8-26 19.1-26 11.2 0 19.1 11.6 19.1 26z"
              ></path>
              <g>
                <path
                  fill="#fff"
                  d="M225.6 212.5c0 6.5-4.3 12.4-10 12.4-5.6 0-10.2-2.8-10.2-9.2 0-6.5 3.2-14 8.8-14 5.7 0 11.4 4.4 11.4 10.8z"
                ></path>
                <path
                  stroke="currentColor"
                  d="M225.6 212.5c0 6.5-4.3 12.4-10 12.4-5.6 0-10.2-2.8-10.2-9.2 0-6.5 3.2-14 8.8-14 5.7 0 11.4 4.4 11.4 10.8z"
                ></path>
              </g>
            </g>
          </g>
          <g>
            <mask
              id="mask5_18_97"
              width="39"
              height="49"
              x="238"
              y="185"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'alpha' }}
            >
              <path
                className={styles['eye-mask']}
                fill="currentColor"
                d="M275.8 211.4c0 14.4-6.7 22.5-18 22.5-7 0-19-8.1-19-22.5 0-8.3 5.5-26 16.7-26s22.7 16.3 20.3 26z"
              ></path>
            </mask>
            <g mask="url(#mask5_18_97)">
              <path
                fill="currentColor"
                d="M275.8 211.4c0 14.4-6.7 22.5-18 22.5-7 0-19-8.1-19-22.5 0-8.3 5.5-26 16.7-26s22.7 16.3 20.3 26z"
              ></path>
              <g>
                <path
                  fill="#fff"
                  d="M262.4 211.7c0 6.7-3.4 8.3-9 8.3h-1c-5 0-6.7 0-6.7-6.3 0-6.7 2-14.5 7.6-14.5 5.7 0 9 5.8 9 12.5z"
                ></path>
                <path
                  stroke="currentColor"
                  d="M262.4 211.7c0 6.7-3.4 8.3-9 8.3h-1c-5 0-6.7 0-6.7-6.3 0-6.7 2-14.5 7.6-14.5 5.7 0 9 5.8 9 12.5z"
                ></path>
              </g>
            </g>
          </g>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M204.2 182.1c4.7-2.8 2.3-3.2 9.5-1.6"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M248.3 180.5c3.3-3.2 2.4-4.7 9.6-2.3"
          ></path>
        </g>
        <path
          className={styles['right-arm']}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="7"
          d="M177 292.8c-1.8 6-7.1 12.2-7.1 12.2s-14.2 16.2-27.5 19.2"
        ></path>
        <circle cx="237.6" cy="236.3" r="3.6" fill="currentColor"></circle>
        <path
          fill="#F87223"
          stroke="currentColor"
          d="M307.8 223.2c0 .6-.4 1.4-1.2 2.4-.7 1-1.8 2-3.1 2.9a17.3 17.3 0 01-9.7 3.4c-3.6 0-6.8-.3-9.1-.9-1.2-.3-2-.6-2.6-1-.6-.5-.9-1-.9-1.5 0-.3.1-.6.4-1 .2-.5.5-1 1-1.6.8-1 2-2.2 3.6-3.3a18 18 0 0110.3-4.1c3.5 0 6.4.6 8.4 1.5 2 1 2.9 2 2.9 3.2z"
        ></path>
        <path
          fill="#F87223"
          stroke="currentColor"
          d="M174.8 244.2v-.1c-.5-1.6-.3-2.9.5-4 .7-1.2 2-2.3 3.6-3.2a24.7 24.7 0 0119.5-1.2c2 .9 2.9 2 2.9 3.2a9 9 0 01-4.6 6.6 19 19 0 01-9.3 2.1c-3.6 0-6.9-.3-9.2-.9a7 7 0 01-2.6-1.1c-.6-.4-.8-1-.8-1.4z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
          d="M162 273.5s-25.5 13.5-11 29m4.5-97s-41 22 0 37m19-92.5c-19-43-64.5 6.5-27 28.5m90-47.5c0-12-39-16-34.5 12.5m98-12.5c14-16-33.5-23.5-33.5 9m53 81c10.5-26-19.5-32-19.5-26m0 100.5c11.5 16.5 44-22 16-34.5m-101.5 34.5c11.5 16.5 40 5.5 36.5 0"
        ></path>
      </g>
    </g>
  );
}

export default Flower;
