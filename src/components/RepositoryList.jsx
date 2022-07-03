import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useEffect, useState } from "react";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    console.log('vamo fazer o get dos repos')
    fetch('https://api.github.com/users/jeffersontk/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositóros</h1>
      <ul>
        {repositories.map(repository => {
          return (
            <RepositoryItem
              key={repository.id}
              repository={repository}
            />
          )
        })}
      </ul>
    </section>
  )
}