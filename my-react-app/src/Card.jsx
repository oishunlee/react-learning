import profilePic from './assets/Carol-profile.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Charlotte</h2>
            <p className="card-text">I am a Software Engineer who love to climb and play with my cats.</p>
        </div>
    );
}
export default Card