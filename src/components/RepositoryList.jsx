import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'Github list',
  description: 'projeto de listagem de repositórios',
  link: 'https://github.com/jeffersontk/github-explorer'
}

export function RepositoryList() {
  return (
    <section className="respostiory-list">
      <h1>Lista de repositóros</h1>
      <ul>
        <RepositoryItem
          repository={repository}
        />
      </ul>
    </section>
  )
}