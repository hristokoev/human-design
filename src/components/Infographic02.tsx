/*

	Second infographic component ('Jak začít?') for the home page.

*/

import Diamond from "@/assets/svg/diamond.svg";

export default function Infographic02() {
  // Same infographics data
  const infographics = [
    {
      title: "Osobní Konzultace",
      text: "Začněte s osobní konzultací vvašeho jedinečného nastavení. Na základě vaší osobní zkušenosti se pobavíme o tom, co dál.",
      button: "Zjistit více!",
    },
    {
      title: "Firemní Konzultace",
      text: "Objednejte se na krátkou konzultaci zdarma a navážeme na váš osobní Human Design a podpoříme růst vašeho podnikání.",
      button: "Objednat se!",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Top Wave */}
      <svg
        viewBox="0 0 1281 298"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-screen translate-y-8"
      >
        <path
          d="M0.53125 88.8342L21.8646 85.9995C43.1979 83.0635 85.8646 77.3941 128.531 74.1545C171.198 70.9148 213.865 70.3074 256.531 58.4624C299.198 46.6174 341.865 23.7373 384.531 11.6898C427.198 -0.256463 469.865 -1.26885 512.531 3.9956C555.198 9.15881 597.865 20.7001 640.531 31.9377C683.198 43.2765 725.865 54.4128 768.531 52.388C811.198 50.3632 853.865 35.1773 896.531 36.8984C939.198 38.5182 981.865 57.1463 1024.53 55.4252C1067.2 53.7041 1109.86 31.8364 1152.53 23.2311C1195.2 14.6257 1237.86 19.2828 1259.2 21.7125L1280.53 24.041V297.387H1259.2C1237.86 297.387 1195.2 297.387 1152.53 297.387C1109.86 297.387 1067.2 297.387 1024.53 297.387C981.865 297.387 939.198 297.387 896.531 297.387C853.865 297.387 811.198 297.387 768.531 297.387C725.865 297.387 683.198 297.387 640.531 297.387C597.865 297.387 555.198 297.387 512.531 297.387C469.865 297.387 427.198 297.387 384.531 297.387C341.865 297.387 299.198 297.387 256.531 297.387C213.865 297.387 171.198 297.387 128.531 297.387C85.8646 297.387 43.1979 297.387 21.8646 297.387H0.53125V88.8342Z"
          fill="#FDF3DF"
        />
        <path
          d="M0.53125 75.6729L21.8646 76.3816C43.1979 76.989 85.8646 78.4063 128.531 84.9869C171.198 91.5675 213.865 103.311 256.531 101.286C299.198 99.2616 341.865 83.4683 384.531 77.4952C427.198 71.6233 469.865 75.6729 512.531 72.9394C555.198 70.3072 597.865 60.7907 640.531 60.487C683.198 60.1832 725.865 68.8898 768.531 66.865C811.198 64.8402 853.865 52.0841 896.531 54.9188C939.198 57.7535 981.865 76.3815 1024.53 90.8588C1067.2 105.336 1109.86 115.865 1152.53 120.927C1195.2 125.989 1237.86 125.584 1259.2 125.483L1280.53 125.28V297.387H1259.2C1237.86 297.387 1195.2 297.387 1152.53 297.387C1109.86 297.387 1067.2 297.387 1024.53 297.387C981.865 297.387 939.198 297.387 896.531 297.387C853.865 297.387 811.198 297.387 768.531 297.387C725.865 297.387 683.198 297.387 640.531 297.387C597.865 297.387 555.198 297.387 512.531 297.387C469.865 297.387 427.198 297.387 384.531 297.387C341.865 297.387 299.198 297.387 256.531 297.387C213.865 297.387 171.198 297.387 128.531 297.387C85.8646 297.387 43.1979 297.387 21.8646 297.387H0.53125V75.6729Z"
          fill="#FAE7C0"
        />
        <path
          d="M0.53125 153.442L21.8646 146.651C43.1979 139.96 85.8646 126.377 128.531 126.579C171.198 126.782 213.865 140.568 256.531 143.508C299.198 146.347 341.865 138.237 384.531 136.209C427.198 134.182 469.865 138.237 512.531 133.675C555.198 129.114 597.865 115.935 640.531 117.253C683.198 118.672 725.865 134.486 768.531 136.209C811.198 137.933 853.865 125.363 896.531 120.294C939.198 115.226 981.865 117.659 1024.53 113.198C1067.2 108.84 1109.86 97.6888 1152.53 103.771C1195.2 109.853 1237.86 133.168 1259.2 144.826L1280.53 156.484V297.388H1259.2C1237.86 297.388 1195.2 297.388 1152.53 297.388C1109.86 297.388 1067.2 297.388 1024.53 297.388C981.865 297.388 939.198 297.388 896.531 297.388C853.865 297.388 811.198 297.388 768.531 297.388C725.865 297.388 683.198 297.388 640.531 297.388C597.865 297.388 555.198 297.388 512.531 297.388C469.865 297.388 427.198 297.388 384.531 297.388C341.865 297.388 299.198 297.388 256.531 297.388C213.865 297.388 171.198 297.388 128.531 297.388C85.8646 297.388 43.1979 297.388 21.8646 297.388H0.53125V153.442Z"
          fill="#F5DCA1"
        />
        <path
          d="M0.53125 175.9L21.8646 170.129C43.1979 164.46 85.8646 152.918 128.531 146.743C171.198 140.466 213.865 139.454 256.531 143.301C299.198 147.249 341.865 155.956 384.531 154.943C427.198 153.931 469.865 143.199 512.531 146.743C555.198 150.286 597.865 168.104 640.531 172.66C683.198 177.216 725.865 168.509 768.531 171.142C811.198 173.875 853.865 188.049 896.531 194.629C939.198 201.21 981.865 200.197 1024.53 198.375C1067.2 196.451 1109.86 193.819 1152.53 186.53C1195.2 179.241 1237.86 167.497 1259.2 161.524L1280.53 155.652V297.387H1259.2C1237.86 297.387 1195.2 297.387 1152.53 297.387C1109.86 297.387 1067.2 297.387 1024.53 297.387C981.865 297.387 939.198 297.387 896.531 297.387C853.865 297.387 811.198 297.387 768.531 297.387C725.865 297.387 683.198 297.387 640.531 297.387C597.865 297.387 555.198 297.387 512.531 297.387C469.865 297.387 427.198 297.387 384.531 297.387C341.865 297.387 299.198 297.387 256.531 297.387C213.865 297.387 171.198 297.387 128.531 297.387C85.8646 297.387 43.1979 297.387 21.8646 297.387H0.53125V175.9Z"
          fill="#EFD082"
        />
        <path
          d="M0.53125 209.309L21.8646 204.754C43.1979 200.198 85.8646 191.086 128.531 193.415C171.198 195.845 213.865 209.613 256.531 212.65C299.198 215.687 341.865 207.993 384.531 206.07C427.198 204.247 469.865 208.297 512.531 204.45C555.198 200.502 597.865 188.758 640.531 192.909C683.198 197.161 725.865 217.408 768.531 227.33C811.198 237.353 853.865 236.948 896.531 230.772C939.198 224.495 981.865 212.347 1024.53 204.754C1067.2 197.161 1109.86 194.123 1152.53 196.452C1195.2 198.882 1237.86 206.576 1259.2 210.524L1280.53 214.371V297.388H1259.2C1237.86 297.388 1195.2 297.388 1152.53 297.388C1109.86 297.388 1067.2 297.388 1024.53 297.388C981.865 297.388 939.198 297.388 896.531 297.388C853.865 297.388 811.198 297.388 768.531 297.388C725.865 297.388 683.198 297.388 640.531 297.388C597.865 297.388 555.198 297.388 512.531 297.388C469.865 297.388 427.198 297.388 384.531 297.388C341.865 297.388 299.198 297.388 256.531 297.388C213.865 297.388 171.198 297.388 128.531 297.388C85.8646 297.388 43.1979 297.388 21.8646 297.388H0.53125V209.309Z"
          fill="#d4af37"
        />
      </svg>

      <section className="relative bg-gradient-to-b from-gold-400 to-gold-600">
        {/* Diamond */}
        <img
          src={Diamond.src}
          alt="Diamond"
          className="hidden md:block absolute top-0 right-0 w-1/4 pointer-events-none"
          aria-hidden={true}
        />

        <div className="container">
          <div className="py-24">
            <div className="flex flex-col gap-y-8">
              {/* Title */}
              <h2 className="text-8xl font-bold text-center">Jak začít?</h2>

              {/* Vertical Lines */}
              <div className="flex justify-center">
                <svg
                  width="37"
                  height="125"
                  viewBox="0 0 37 125"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5312 14.6055V102.863"
                    stroke="#F8F3E1"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="12 12"
                  />
                </svg>
              </div>

              {/* Subtitle */}
              <div className="flex justify-center">
                <span className="text-2xl text-center">
                  Mám již nějakou předchozí zkušenost s{" "}
                  <span className="font-bold">Human Designem</span>?
                </span>
              </div>

              {/* Yes | No - Desktop */}
              <div className="hidden md:flex justify-center">
                <svg
                  width="560"
                  height="136"
                  viewBox="0 0 560 136"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M280 3.17188V24.1856C280 55.1808 259.964 76.1945 229.909 76.1945C225.337 76.1945 191.542 76.1363 178 76.1945M3 132.406V129.254C3.00009 97.2081 22.0346 76.7198 53.0907 76.7198C60.9895 76.7198 93.9044 76.7306 102 76.7198"
                    stroke="#F8F3E1"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="12 12"
                  />
                  <path
                    d="M126.391 86H121.875V63.4531H125.812L136.344 78.1406H136.469V63.4531H140.984V86H137.078L126.531 71.2344H126.391V86ZM151.875 72.2656C149.875 72.2656 148.438 73.7812 148.281 75.875H155.391C155.297 73.7344 153.906 72.2656 151.875 72.2656ZM155.453 80.875H159.641C159.141 84.1562 156.141 86.3594 152 86.3594C146.844 86.3594 143.75 83.0625 143.75 77.7031C143.75 72.3594 146.875 68.8906 151.828 68.8906C156.703 68.8906 159.781 72.1875 159.781 77.2812V78.6719H148.234V78.9531C148.234 81.3438 149.75 82.9844 152.078 82.9844C153.75 82.9844 155.031 82.1562 155.453 80.875Z"
                    fill="#F8F3E1"
                  />
                  <path
                    d="M410.641 86L408.922 80.5312H401L399.281 86H394.438L402.266 63.4531H407.812L415.656 86H410.641ZM404.906 67.7656L402.016 77H407.906L405.016 67.7656H404.906ZM417.578 86V69.25H421.984V72.2344H422.078C422.969 70.1562 424.734 68.9375 427.312 68.9375C431.031 68.9375 433.125 71.2812 433.125 75.2031V86H428.562V76.1562C428.562 73.9688 427.531 72.7188 425.484 72.7188C423.438 72.7188 422.141 74.2188 422.141 76.3906V86H417.578ZM443.703 86.3594C438.641 86.3594 435.406 83.1094 435.406 77.6094C435.406 72.1875 438.688 68.8906 443.703 68.8906C448.719 68.8906 452 72.1719 452 77.6094C452 83.125 448.766 86.3594 443.703 86.3594ZM443.703 82.875C445.938 82.875 447.359 80.9844 447.359 77.625C447.359 74.2969 445.922 72.375 443.703 72.375C441.484 72.375 440.031 74.2969 440.031 77.625C440.031 80.9844 441.453 82.875 443.703 82.875Z"
                    fill="#F8F3E1"
                  />
                  <path
                    d="M280 3.17188V24.1856C280 55.1808 300.036 76.1945 330.091 76.1945C334.663 76.1945 368.458 76.1363 382 76.1945M557 132.406V129.254C557 97.2081 537.965 76.7198 506.909 76.7198C499.01 76.7198 473.596 76.7306 465.5 76.7198"
                    stroke="#F8F3E1"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="12 12"
                  />
                </svg>
              </div>

              {/* Cards */}
              <div className="flex flex-col md:flex-row md:justify-evenly gap-8 text-center">
                {infographics.map((card, index) => (
                  <div key={index}>
                    {/* Yes | No - Mobile */}
                    {index === 0 && (
                      <div className="flex justify-center md:hidden">
                        <svg
                          width="283"
                          height="136"
                          viewBox="0 0 283 136"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M133.641 86L131.922 80.5312H124L122.281 86H117.438L125.266 63.4531H130.812L138.656 86H133.641ZM127.906 67.7656L125.016 77H130.906L128.016 67.7656H127.906ZM140.578 86V69.25H144.984V72.2344H145.078C145.969 70.1562 147.734 68.9375 150.312 68.9375C154.031 68.9375 156.125 71.2812 156.125 75.2031V86H151.562V76.1562C151.562 73.9688 150.531 72.7188 148.484 72.7188C146.438 72.7188 145.141 74.2188 145.141 76.3906V86H140.578ZM166.703 86.3594C161.641 86.3594 158.406 83.1094 158.406 77.6094C158.406 72.1875 161.688 68.8906 166.703 68.8906C171.719 68.8906 175 72.1719 175 77.6094C175 83.125 171.766 86.3594 166.703 86.3594ZM166.703 82.875C168.938 82.875 170.359 80.9844 170.359 77.625C170.359 74.2969 168.922 72.375 166.703 72.375C164.484 72.375 163.031 74.2969 163.031 77.625C163.031 80.9844 164.453 82.875 166.703 82.875Z"
                            fill="#F8F3E1"
                          />
                          <path
                            d="M3 3.17188V24.1856C3 55.1808 23.0361 76.1945 53.0905 76.1945C57.6625 76.1945 91.4579 76.1363 105 76.1945M280 132.406V129.254C280 97.2081 260.965 76.7198 229.909 76.7198C222.01 76.7198 196.596 76.7306 188.5 76.7198"
                            stroke="#F8F3E1"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray="12 12"
                          />
                        </svg>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="flex justify-center md:hidden">
                        <svg
                          width="283"
                          height="136"
                          viewBox="0 0 283 136"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M280 3.17188V24.1856C280 55.1808 259.964 76.1945 229.909 76.1945C225.337 76.1945 191.542 76.1363 178 76.1945M3 132.406V129.254C3.00009 97.2081 22.0346 76.7198 53.0907 76.7198C60.9895 76.7198 93.9044 76.7306 102 76.7198"
                            stroke="#F8F3E1"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray="12 12"
                          />
                          <path
                            d="M126.391 86H121.875V63.4531H125.812L136.344 78.1406H136.469V63.4531H140.984V86H137.078L126.531 71.2344H126.391V86ZM151.875 72.2656C149.875 72.2656 148.438 73.7812 148.281 75.875H155.391C155.297 73.7344 153.906 72.2656 151.875 72.2656ZM155.453 80.875H159.641C159.141 84.1562 156.141 86.3594 152 86.3594C146.844 86.3594 143.75 83.0625 143.75 77.7031C143.75 72.3594 146.875 68.8906 151.828 68.8906C156.703 68.8906 159.781 72.1875 159.781 77.2812V78.6719H148.234V78.9531C148.234 81.3438 149.75 82.9844 152.078 82.9844C153.75 82.9844 155.031 82.1562 155.453 80.875Z"
                            fill="#F8F3E1"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Desktop */}
                    <div className="card-gold max-w-96">
                      <div className="text-3xl">
                        <p className="font-bold">{card.title}</p>
                      </div>
                      <div className="grow flex items-center px-2">
                        <p className="text-sm font-medium">{card.text}</p>
                      </div>
                      <div className="">
                        <a
                          className="btn border-white hover:bg-white/10"
                          href="/kontakt"
                        >
                          {card.button}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Wave */}
      <svg
        viewBox="0 0 1281 251"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-screen -translate-y-"
      >
        <path
          d="M1280.53 191.028L1259.2 190.314C1237.86 189.511 1195.2 188.082 1152.53 188.797C1109.86 189.511 1067.2 192.546 1024.53 194.867C981.865 197.277 939.198 199.062 896.531 209.506C853.865 219.861 811.198 238.964 768.531 244.141C725.865 249.319 683.198 240.749 640.531 236.286C597.865 231.823 555.198 231.466 512.531 234.054C469.865 236.554 427.198 241.91 384.531 239.856C341.865 237.714 299.198 228.252 256.531 229.234C213.865 230.305 171.198 241.91 128.531 246.998C85.8645 251.997 43.1979 250.568 21.8645 249.765L0.53125 249.051V-0.8927L21.8645 -0.8927C43.1979 -0.8927 85.8645 -0.8927 128.531 -0.8927C171.198 -0.8927 213.865 -0.8927 256.531 -0.8927C299.198 -0.8927 341.865 -0.8927 384.531 -0.8927C427.198 -0.8927 469.865 -0.8927 512.531 -0.8927C555.198 -0.8927 597.865 -0.8927 640.531 -0.8927C683.198 -0.8927 725.865 -0.8927 768.531 -0.8927C811.198 -0.8927 853.865 -0.8927 896.531 -0.8927C939.198 -0.8927 981.865 -0.8927 1024.53 -0.8927C1067.2 -0.8927 1109.86 -0.8927 1152.53 -0.8927C1195.2 -0.8927 1237.86 -0.8927 1259.2 -0.8927H1280.53V191.028Z"
          fill="#FDF3DF"
        />
        <path
          d="M1280.53 205.31L1259.2 207.274C1237.86 209.148 1195.2 213.076 1152.53 215.754C1109.86 218.432 1067.2 219.86 1024.53 212.005C981.865 204.15 939.198 186.832 896.531 184.333C853.865 181.833 811.198 193.973 768.531 199.329C725.865 204.685 683.198 203.257 640.531 202.364C597.865 201.472 555.198 201.115 512.531 194.598C469.865 188.082 427.198 175.228 384.531 172.46C341.865 169.604 299.198 176.745 256.531 187.278C213.865 197.901 171.198 211.826 128.531 217.539C85.8645 223.163 43.1979 220.485 21.8645 219.146L0.53125 217.807V-0.893372L21.8645 -0.893372C43.1979 -0.893372 85.8645 -0.893372 128.531 -0.893372C171.198 -0.893372 213.865 -0.893372 256.531 -0.893372C299.198 -0.893372 341.865 -0.893372 384.531 -0.893372C427.198 -0.893372 469.865 -0.893372 512.531 -0.893372C555.198 -0.893372 597.865 -0.893372 640.531 -0.893372C683.198 -0.893372 725.865 -0.893372 768.531 -0.893372C811.198 -0.893372 853.865 -0.893372 896.531 -0.893372C939.198 -0.893372 981.865 -0.893372 1024.53 -0.893372C1067.2 -0.893372 1109.86 -0.893372 1152.53 -0.893372C1195.2 -0.893372 1237.86 -0.893372 1259.2 -0.893372H1280.53V205.31Z"
          fill="#FAE7C0"
        />
        <path
          d="M1280.53 160.677L1259.2 160.231C1237.86 159.784 1195.2 158.892 1152.53 155.589C1109.86 152.375 1067.2 146.662 1024.53 145.948C981.865 145.234 939.198 149.34 896.531 144.877C853.865 140.414 811.198 127.381 768.531 128.095C725.865 128.809 683.198 143.449 640.531 143.984C597.865 144.609 555.198 131.219 512.531 135.861C469.865 140.414 427.198 163.087 384.531 164.069C341.865 165.14 299.198 144.609 256.531 134.076C213.865 123.453 171.198 122.918 128.531 126.488C85.8645 130.059 43.1979 137.736 21.8645 141.663L0.53125 145.502V-0.893661L21.8645 -0.893661C43.1979 -0.893661 85.8645 -0.893661 128.531 -0.893661C171.198 -0.893661 213.865 -0.893661 256.531 -0.893661C299.198 -0.893661 341.865 -0.893661 384.531 -0.893661C427.198 -0.893661 469.865 -0.893661 512.531 -0.893661C555.198 -0.893661 597.865 -0.893661 640.531 -0.893661C683.198 -0.893661 725.865 -0.893661 768.531 -0.893661C811.198 -0.893661 853.865 -0.893661 896.531 -0.893661C939.198 -0.893661 981.865 -0.893661 1024.53 -0.893661C1067.2 -0.893661 1109.86 -0.893661 1152.53 -0.893661C1195.2 -0.893661 1237.86 -0.893661 1259.2 -0.893661H1280.53V160.677Z"
          fill="#F5DCA1"
        />
        <path
          d="M1280.53 126.757L1259.2 121.133C1237.86 115.42 1195.2 104.173 1152.53 102.477C1109.86 100.87 1067.2 108.904 1024.53 108.011C981.865 107.118 939.198 97.2992 896.531 102.209C853.865 107.118 811.198 126.757 768.531 134.166C725.865 141.664 683.198 136.844 640.531 135.416C597.865 133.898 555.198 135.683 512.531 129.703C469.865 123.811 427.198 110.064 384.531 109.796C341.865 109.529 299.198 122.561 256.531 120.33C213.865 118.098 171.198 100.602 128.531 97.1207C85.8645 93.7286 43.1979 104.44 21.8645 109.796L0.53125 115.152V-0.892853L21.8645 -0.892853C43.1979 -0.892853 85.8645 -0.892853 128.531 -0.892853C171.198 -0.892853 213.865 -0.892853 256.531 -0.892853C299.198 -0.892853 341.865 -0.892853 384.531 -0.892853C427.198 -0.892853 469.865 -0.892853 512.531 -0.892853C555.198 -0.892853 597.865 -0.892853 640.531 -0.892853C683.198 -0.892853 725.865 -0.892853 768.531 -0.892853C811.198 -0.892853 853.865 -0.892853 896.531 -0.892853C939.198 -0.892853 981.865 -0.892853 1024.53 -0.892853C1067.2 -0.892853 1109.86 -0.892853 1152.53 -0.892853C1195.2 -0.892853 1237.86 -0.892853 1259.2 -0.892853H1280.53V126.757Z"
          fill="#EFD082"
        />
        <path
          d="M1280.53 56.2385L1259.2 55.6136C1237.86 55.078 1195.2 53.8283 1152.53 57.5774C1109.86 61.3266 1067.2 69.8961 1024.53 77.8407C981.865 85.6961 939.198 92.8373 896.531 91.9447C853.865 91.052 811.198 82.1254 768.531 83.2859C725.865 84.5356 683.198 95.7831 640.531 98.8181C597.865 101.764 555.198 96.408 512.531 92.5695C469.865 88.6419 427.198 86.3209 384.531 86.1424C341.865 85.9639 299.198 88.1062 256.531 86.4102C213.865 84.8034 171.198 79.4475 128.531 74.0916C85.8645 68.7356 43.1979 63.3797 21.8645 60.7017L0.53125 58.0238V-0.891495H21.8645C43.1979 -0.891495 85.8645 -0.891495 128.531 -0.891495C171.198 -0.891495 213.865 -0.891495 256.531 -0.891495C299.198 -0.891495 341.865 -0.891495 384.531 -0.891495C427.198 -0.891495 469.865 -0.891495 512.531 -0.891495C555.198 -0.891495 597.865 -0.891495 640.531 -0.891495C683.198 -0.891495 725.865 -0.891495 768.531 -0.891495C811.198 -0.891495 853.865 -0.891495 896.531 -0.891495C939.198 -0.891495 981.865 -0.891495 1024.53 -0.891495C1067.2 -0.891495 1109.86 -0.891495 1152.53 -0.891495C1195.2 -0.891495 1237.86 -0.891495 1259.2 -0.891495H1280.53V56.2385Z"
          fill="#E7C562"
        />
        <path
          d="M1280.53 30.3507L1259.2 34.9925C1237.86 39.5451 1195.2 48.8287 1152.53 53.7383C1109.86 58.6479 1067.2 59.1835 1024.53 60.2547C981.865 61.3259 939.198 62.7541 896.531 60.8795C853.865 58.9157 811.198 53.5597 768.531 49.3643C725.865 45.258 683.198 42.223 640.531 43.2942C597.865 44.3654 555.198 49.3643 512.531 49.0965C469.865 48.8287 427.198 43.1157 384.531 44.3654C341.865 45.5259 299.198 53.5597 256.531 52.9349C213.865 52.3993 171.198 43.1157 128.531 39.0095C85.8645 34.814 43.1979 35.7066 21.8645 36.153L0.53125 36.5993V-0.89222H21.8645C43.1979 -0.89222 85.8645 -0.89222 128.531 -0.89222C171.198 -0.89222 213.865 -0.89222 256.531 -0.89222C299.198 -0.89222 341.865 -0.89222 384.531 -0.89222C427.198 -0.89222 469.865 -0.89222 512.531 -0.89222C555.198 -0.89222 597.865 -0.89222 640.531 -0.89222C683.198 -0.89222 725.865 -0.89222 768.531 -0.89222C811.198 -0.89222 853.865 -0.89222 896.531 -0.89222C939.198 -0.89222 981.865 -0.89222 1024.53 -0.89222C1067.2 -0.89222 1109.86 -0.89222 1152.53 -0.89222C1195.2 -0.89222 1237.86 -0.89222 1259.2 -0.89222H1280.53V30.3507Z"
          fill="#bb9417"
        />
      </svg>
    </div>
  );
}
