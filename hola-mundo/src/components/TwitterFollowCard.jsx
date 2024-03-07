import PropTypes from 'prop-types';
import './TwitterFollowCard.css';
function TwitterFollowCard({ userName, name, isFollowing }) {
	const imageSrc = `https://unavatar.io/${userName}`;
	return (
		<>
			<article className="article">
				<h1>A quién seguir</h1>
				<div className="card">
					<header className="header">
						<img className="avatar" alt="avatar" src={imageSrc}></img>
						<div className="info">
							<strong>{name}</strong>
							<span>@{userName}</span>
						</div>
					</header>
					<aside>
						<button>{isFollowing ? 'Seguir' : 'Siguiendo'}</button>
					</aside>
				</div>
				<div className="show-more">
					<a href="/">Mostrar más</a>
				</div>
			</article>
		</>
	);
} TwitterFollowCard.propTypes = {
	userName: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isFollowing: PropTypes.bool,
};

export { TwitterFollowCard };
