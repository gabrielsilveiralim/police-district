export interface Info {
    id: number;
    name: string;
    description: string;
    icon: string;
}

export const infoDados : Info[] = [
    {
        id: 1,
        name: "Node.js",
        description: "AMBIENTE DE EXECUÇÃO",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
        id: 2,
        name: "Fastify / Express",
        description: "FRAMEWORKS PARA DESENVOLVIMENTO DE API",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
        id: 3,
        name: "Javascript /Typescript",
        description: "JS RODA, TS TIPIFICA",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
        id: 4,
        name: "PostgreSQL",
        description: "ARMAZENAMENTO RELACIONAL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
        id: 5,
        name: "Prisma / Drizzle",
        description: "ORMs PARA MODELAGEM DE BANCO DE DADOS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    }
];