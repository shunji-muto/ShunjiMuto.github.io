export function About() {
  return (
    <section className="my-16 py-8 pb-16 border-b border-blue-200">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
        About
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
          <img
            src="/public/img.jpg"
            alt="Shunji Muto"
            width={300}
            height={300}
            className="mx-auto object-cover w-full h-full rounded "
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <dl className="grid gap-4 text-base">
            <div>
              <dt className="font-semibold text-lg mb-1 ">Name</dt>
              <dd className="">武藤 駿嗣（Muto Shunji）</dd>
            </div>
            <div>
              <dt className="font-semibold text-lg mb-1 ">Date Of Birth</dt>
              <dd className="">1998/01/23</dd>
            </div>
            <div>
              <dt className="font-semibold text-lg mb-1 ">Job</dt>
              <dd>Web Engineer</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
