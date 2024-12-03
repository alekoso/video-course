export const ArrowIcon = ({ color = "black", rotate = false }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${
      rotate ? "transform rotate-180" : ""
    } md:w-[33px] md:h-[33px]`}
  >
    <path
      d="M12.4997 21.8735C17.9518 21.8735 22.3715 17.4537 22.3715 12.0017C22.3715 6.54964 17.9518 2.12988 12.4997 2.12988C7.04768 2.12988 2.62793 6.54964 2.62793 12.0017C2.62793 17.4537 7.04768 21.8735 12.4997 21.8735Z"
      stroke={color}
      strokeWidth="1.77692"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.7439 15.4861L10.269 12.0013L13.7439 8.5166"
      stroke={color}
      strokeWidth="1.77692"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
