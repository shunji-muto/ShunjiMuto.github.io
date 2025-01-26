import { Github, Linkedin, Twitter } from "lucide-react";

export function SocialLinks() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Connect with Me
      </h2>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Github size={32} />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Linkedin size={32} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Twitter size={32} />
          <span className="sr-only">Twitter</span>
        </a>
      </div>
    </section>
  );
}
