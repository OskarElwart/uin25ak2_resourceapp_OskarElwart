export default function Resources ({ title, url }){
    return (
        <article>
            <li>

        <a href={url}>{title}</a>

        </li>
        </article>
    );
}