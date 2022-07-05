import profilePic from '../images/profilePicture.jpg'

export default function Content() {
    return (
        <div className="content">
            <img className="profile-pic" src={profilePic} alt="profile picture" />
            <h1>M. Ichsan Nur Iman</h1>
            <h2>IT Student</h2>
            <h2 className="content-about">About</h2>
            <p>I am a final-year IT student at President University. I like to read books and play computer games.</p>
        </div>
    )
}