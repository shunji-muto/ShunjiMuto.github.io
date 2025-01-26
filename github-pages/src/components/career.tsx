export function Career() {
  return (
    <section className="my-16 pb-16 border-b border-blue-200">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Career
      </h2>
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-blue-200 ">
        <div className="relative flex items-start group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-300 bg-white text-blue-500 shadow shrink-0 mr-4">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fillRule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          <div className="flex-grow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold ">2022/03</div>
            </div>
            <div>芝浦工業大学 大学院 電気電子情報工学専攻 卒業</div>
            <div>
              <a
                href="http://www.igl.ise.shibaura-it.ac.jp/"
                className="text-blue-500 underline"
              >
                Interactive Graphics Lab
              </a>
              に在籍し、研究を行う
            </div>
          </div>
        </div>
        <div className="relative flex items-start group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-300 bg-white text-blue-500 shadow shrink-0 mr-4">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fillRule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          <div className="flex-grow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold ">2022/04</div>
            </div>
            <div>通信事業会社へ入社</div>
          </div>
        </div>
      </div>
    </section>
  );
}
