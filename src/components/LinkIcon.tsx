/*

	Link Icon Component

*/

import type LinksProps from "@/interfaces/Links";

export default function LinkIcon({ text, url, icon }: LinksProps) {
  let svgIcon;

  switch (icon) {
    case "Web":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
        </svg>
      );
      break;
    case "Discord":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 21 16"
        >
          <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
        </svg>
      );
      break;
    case "Facebook":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 8 19"
        >
          <path
            fillRule="evenodd"
            d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
            clipRule="evenodd"
          />
        </svg>
      );
      break;
    case "Instagram":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
        </svg>
      );
      break;
    case "LinkedIn":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 15 15"
        >
          <path
            fillRule="evenodd"
            d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            clipRule="evenodd"
          />
          <path d="M3 5.012H0V15h3V5.012Z" />
        </svg>
      );
      break;
    case "Pinterest":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 00-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 01.056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 108 0z" />
        </svg>
      );
      break;
    case "Reddit":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M6.167 8a.831.831 0 00-.83.83c0 .459.372.84.83.831a.831.831 0 000-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 000-.306.213.213 0 00-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 00-.306 0 .213.213 0 000 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 00-1.66 0z" />
          <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 10.83-.869.83.83 0 00-.744.468l-1.938-.41a.203.203 0 00-.153.028.186.186 0 00-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 00-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z" />
        </svg>
      );
      break;
    case "Skype":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 016.02 2.118 7.372 7.372 0 012.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 01.6 2.281 4.645 4.645 0 01-1.37 3.294A4.673 4.673 0 0111.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 01-6.114-2.107A7.374 7.374 0 01.529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 01.76-5.59A4.68 4.68 0 014.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 001.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 01-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 01-1.048-.206 11.44 11.44 0 01-.532-.253 1.284 1.284 0 00-.587-.15.717.717 0 00-.501.176.63.63 0 00-.195.491.796.796 0 00.148.482 1.2 1.2 0 00.456.354 5.113 5.113 0 002.212.419 4.554 4.554 0 001.624-.265 2.296 2.296 0 001.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 00-.279-1.101 2.53 2.53 0 00-.772-.792A7.198 7.198 0 008.486 7.3a1.05 1.05 0 00-.145-.058 18.182 18.182 0 01-1.013-.447 1.827 1.827 0 01-.54-.387.727.727 0 01-.2-.508.805.805 0 01.385-.723 1.76 1.76 0 01.968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 00.453-.19.69.69 0 00.18-.496.717.717 0 00-.17-.476 1.374 1.374 0 00-.556-.354 3.69 3.69 0 00-.708-.183 5.963 5.963 0 00-1.022-.078 4.53 4.53 0 00-1.536.258 2.71 2.71 0 00-1.174.784 1.91 1.91 0 00-.45 1.287c-.01.37.076.736.25 1.063z" />
        </svg>
      );
      break;
    case "Snapchat":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.973 6.68a6.124 6.124 0 00-.098-1.073 4.372 4.372 0 00-.406-1.246 4.324 4.324 0 00-.832-1.11 4.125 4.125 0 00-1.816-1.036 7.36 7.36 0 00-1.92-.205L16.898 2H7.099v.01a10.488 10.488 0 00-1.101.05 5.243 5.243 0 00-1.176.264A4.262 4.262 0 002.219 5.17a7.338 7.338 0 00-.205 1.905l-.006 9.838a9.445 9.445 0 00.09 1.333 4.616 4.616 0 00.41 1.345 4.305 4.305 0 001.201 1.454 3.903 3.903 0 001.203.651 6.516 6.516 0 001.976.29c.42.003.839.014 1.258.012 3.047-.013 6.094.022 9.14-.019a7.19 7.19 0 001.2-.127 4.06 4.06 0 002.007-.977 4.162 4.162 0 001.326-2.212 8.062 8.062 0 00.173-1.75v-.117c0-.046-.017-9.984-.019-10.115zm-2.676 9.25c-.128.3-.774.548-1.868.717-.102.016-.146.182-.205.454-.024.112-.05.222-.083.337a.204.204 0 01-.216.162h-.018a1.746 1.746 0 01-.31-.04 4.097 4.097 0 00-.821-.086 3.637 3.637 0 00-.592.05 2.836 2.836 0 00-1.123.574 3.257 3.257 0 01-1.97.776 2.33 2.33 0 01-.112-.003.854.854 0 01-.073.003 3.253 3.253 0 01-1.97-.776 2.84 2.84 0 00-1.123-.574 3.633 3.633 0 00-.592-.05 4.047 4.047 0 00-.82.093 1.82 1.82 0 01-.311.044.214.214 0 01-.234-.167c-.035-.117-.06-.23-.083-.34-.06-.273-.103-.44-.205-.456-1.094-.168-1.74-.417-1.869-.718a.278.278 0 01-.023-.095.176.176 0 01.147-.183 3.818 3.818 0 002.296-1.365A5.145 5.145 0 007.9 13.07l.004-.008a.785.785 0 00.075-.658c-.14-.332-.607-.48-.916-.578a3.27 3.27 0 01-.207-.07c-.274-.108-.724-.337-.664-.652a.61.61 0 01.593-.39.42.42 0 01.18.036 1.796 1.796 0 00.742.196.621.621 0 00.428-.131q-.012-.219-.027-.438a7.388 7.388 0 01.177-2.951 3.837 3.837 0 013.562-2.298l.295-.002a3.843 3.843 0 013.568 2.298 7.398 7.398 0 01.176 2.955l-.003.047-.023.389a.602.602 0 00.388.13 1.86 1.86 0 00.7-.195.552.552 0 01.228-.046.694.694 0 01.261.05l.004.002a.485.485 0 01.367.398c.003.153-.11.381-.669.602-.057.022-.13.046-.207.07-.31.098-.776.246-.916.578a.784.784 0 00.074.657l.004.009a4.522 4.522 0 003.079 2.582.176.176 0 01.146.183.28.28 0 01-.023.096z" />
        </svg>
      );
      break;
    case "Telegram":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 01-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 00-.013-.315.337.337 0 00-.114-.217.526.526 0 00-.31-.093c-.3.005-.763.166-2.984 1.09z" />
        </svg>
      );
      break;
    case "TikTok":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      );
      break;
    case "Viber":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602a.304.304 0 00-.004.607c1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3a.304.304 0 00.3-.304c-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695a.981.981 0 00-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948a.596.596 0 00-.007.14c0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87a15.524 15.524 0 002.186 1.447c1.328.733 2.126 1.07 2.604 1.206l.01.014a1.275 1.275 0 00.54.055c.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248a12.73 12.73 0 00-.71-1.115 28.35 28.35 0 00-.83-1.035.822.822 0 00-.502-.297zm4.49.88a.303.303 0 00-.018.606c1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57a.306.306 0 00.61.013c.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63a.305.305 0 00-.3.287c-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164a.304.304 0 00.605-.03c-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z" />
        </svg>
      );
      break;
    case "Vimeo":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M23.977 6.417c-.105 2.338-1.74 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.41 0-2.578-1.294-3.553-3.881L5.322 11.4c-.72-2.584-1.488-3.878-2.312-3.878-.18 0-.806.378-1.881 1.132l-1.13-1.457A315.06 315.06 0 003.502 4.07C5.08 2.702 6.266 1.985 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.839.465 2.953.789 4.789.97 5.507.54 2.45 1.132 3.674 1.777 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.59 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.12-1.777.39C14.92 3.38 17.169 1.49 20.497 1.61c2.473.06 3.628 1.664 3.493 4.797z" />
        </svg>
      );
      break;
    case "VK (VKontakte)":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.579 6.855c.14-.465 0-.806-.662-.806h-2.193c-.558 0-.813.295-.953.619 0 0-1.115 2.719-2.695 4.482-.51.513-.743.675-1.021.675-.139 0-.341-.162-.341-.627V6.855c0-.558-.161-.806-.626-.806H9.642c-.348 0-.558.258-.558.504 0 .528.79.65.871 2.138v3.228c0 .707-.127.836-.407.836-.743 0-2.551-2.729-3.624-5.853-.209-.607-.42-.852-.98-.852H2.752c-.627 0-.752.295-.752.619 0 .582.743 3.462 3.461 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752.324 0 .882.164 2.183 1.417 1.486 1.486 1.732 2.153 2.567 2.153h2.192c.626 0 .939-.313.759-.931-.197-.615-.907-1.51-1.849-2.569-.512-.604-1.277-1.254-1.51-1.579-.325-.419-.231-.604 0-.976.001.001 2.672-3.761 2.95-5.04z" />
        </svg>
      );
      break;
    case "WhatsApp":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      );
      break;
    case "X (Twitter)":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
          />
        </svg>
      );
      break;
    case "YouTube":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 14"
        >
          <path
            fillRule="evenodd"
            d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
            clipRule="evenodd"
          />
        </svg>
      );
      break;
    case "Zoom":
      svgIcon = (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 14"
        >
          <path d="M1.984 7.506v6.74c.006 1.524 1.361 2.75 3.014 2.745h10.693c.303 0 .549-.225.549-.498v-6.74c-.008-1.523-1.363-2.75-3.014-2.744H2.531c-.302 0-.547.224-.547.497zm14.936 2.63l4.416-2.963c.383-.292.68-.219.68.309v9.036c0 .601-.363.528-.68.309L16.92 13.87v-3.734z" />
        </svg>
      );
      break;
  }

  return (
    <a
      href={url}
      target="_blank"
      className="hover:text-petroleum-700 transition-all duration-150 ease-in-out"
    >
      {svgIcon}
      <span className="sr-only">{text}</span>
    </a>
  );
}
