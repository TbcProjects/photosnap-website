import "../../../public/assets/shared/desktop/arrow.svg";

/**
 *
 * @todo
 * - make width/height a prop
 */

interface DirectionalArrowProps {
  color: string;
  width: string;
  height: string;
}

function DirectionalArrow({ color, width, height }: DirectionalArrowProps) {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <g fill="none" fill-rule="evenodd" stroke={color}>
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </div>
  );
}

export default DirectionalArrow;
