import instagramIcon from "../images/Instagram-Icon.png"
import githubIcon from "../images/GitHub-Icon.png"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://www.instagram.com/bhinneka12/">
                <img src={instagramIcon} />
            </a>
            <a href="https://github.com/tutuna9">
                <img src={githubIcon} />
            </a>
        </div>
    )
}