export const ZodiacLogo = ({ darkMode }) => {
  return (
    <svg
      className={darkMode ? "stroke-gray-200" : "stroke-gray-900"}
      width="33"
      height="33"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 10l3 -3l3 3l3 -3l3 3l3 -3l3 3" />
      <path d="M3 17l3 -3l3 3l3 -3l3 3l3 -3l3 3" />
    </svg>
  );
};
