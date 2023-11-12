import "../../../public/assets/shared/desktop/arrow.svg";

/**
 *
 * @todo
 * - make width/height a prop
 */

function DirectionalArrow() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </div>
  );
}

export default DirectionalArrow;