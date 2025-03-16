export default function Resources ({ title, url }){
    return (
        <article>
            <li>
        <ul>
        <a href={url}>{title}</a>
        </ul>
        </li>
        </article>
    );
}