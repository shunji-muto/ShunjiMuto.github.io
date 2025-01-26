import { motion } from "framer-motion";

export function Certification() {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      image: "/public/aws-certified-cloud-practitioner.png",
      link: "https://www.credly.com/badges/c9311b89-a783-4eb9-a77c-6f35d9fe9c31/public_url",
    },
    {
      name: "AWS Solutions Architect Associate",
      image: "/public/aws-certified-solutions-architect-associate.png",
      link: "https://www.credly.com/badges/7ad36d14-f10f-48c3-8821-4f1fbda17cfd/public_url",
    },
    {
      name: "GCP Cloud Digital Leader",
      image: "/public/cloud-digital-leader.png",
      link: "https://www.credly.com/badges/61d05202-e33c-4032-b92e-70d9a02a4d05/public_url",
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
    { name: "G検定", image: "/public/g-certification.png" },
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
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {[...certifications].map((cert, index) => (
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <div key={index} className="flex-shrink-0 text-center">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.name}
                  width={150}
                  height={150}
                  className="mx-auto rounded"
                />
                <p className="mt-2 font-semibold whitespace-nowrap ">
                  {cert.name}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
