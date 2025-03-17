//mapper items i resources etter de er filtrert i app.jsx. Filteren er basert på useParams
export default function Resources({ resources }) {
    return (
      <ul>
        {resources.map((ressurs, index) => (
          <li key={index}>
            <a href={ressurs.url}>{ressurs.title}</a>
          </li>
        ))}
      </ul>
    );
  }