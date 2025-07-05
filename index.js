export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Natan Rios</h1>
      <p className="mb-6">
        Desenvolvedor Full Stack com 3 anos de experiência. Trabalho com LAMP Stack, React, Node.js, e criação de APIs,
        bots e sistemas web. Experiência com UX/UI Design e certificação em cibersegurança pela TryHackMe.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Stacks & Ferramentas</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm mb-6">
        <li>JavaScript</li><li>TypeScript</li><li>Python</li><li>PHP</li>
        <li>HTML</li><li>CSS</li><li>React</li><li>Next.js</li>
        <li>Node.js</li><li>MongoDB</li><li>MySQL</li><li>Docker</li>
        <li>Figma</li><li>Adobe XD</li><li>WordPress</li><li>Tailwind CSS</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Experiências</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Desenvolvimento de sites como freelancer</li>
        <li>Criação e manutenção de apps</li>
        <li>Engenharia de Software (ADS)</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Contato</h2>
      <p>Email: <a href="mailto:natanaelrios.contato@gmail.com" className="text-blue-400 underline">natanaelrios.contato@gmail.com</a></p>
      <div className="mt-4">
        <a href="https://instagram.com/nnatanzn" className="mr-4 text-pink-400 underline" target="_blank">Instagram</a>
        <a href="https://www.linkedin.com/in/natanael-rios-811a55324" className="text-blue-400 underline" target="_blank">LinkedIn</a>
      </div>
    </main>
  )
}