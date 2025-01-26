export function Skills() {
  return (
    <section className="my-16 border-b border-blue-200 pb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Languages
          </h3>
          <ul className="list-disc list-inside text-blue-600">
            <li>C</li>
            <li>C#</li>
            <li>C++</li>
            <li>Python</li>
            <li>TypeScript</li>
            <li>Java</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Frameworks
          </h3>
          <ul className="list-disc list-inside text-blue-600">
            <li>Spring (Java)</li>
            <li>Vue.js</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Infrastructure
          </h3>
          <ul className="list-disc list-inside text-blue-600">
            <li>AWS</li>
            <li>Concourse</li>
            <li>Kubernetes</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
