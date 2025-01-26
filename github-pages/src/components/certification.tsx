import { motion } from "framer-motion";

export function Certification() {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "AWS Solutions Architect Associate",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "GCP Cloud Digital Leader",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "GCP Associate Cloud Engineer",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "GCP Professional Cloud Develope",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "JSTQB Foundation Level",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "応用情報技術者試験",
      image: "/placeholder.svg?height=150&width=150",
    },
    { name: "G検定 (G-test)", image: "/placeholder.svg?height=150&width=150" },
  ];

  return (
    <section className="my-16 pb-16 border-b border-blue-200">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Certifications
      </h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: [0, -1200] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
        >
          {[...certifications].map((cert, index) => (
            <div key={index} className="flex-shrink-0 text-center">
              <img
                src={cert.image || "/placeholder.svg"}
                alt={cert.name}
                width={150}
                height={150}
                className="mx-auto border-2 border-blue-200 rounded"
              />
              <p className="mt-2 font-semibold whitespace-nowrap ">
                {cert.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
