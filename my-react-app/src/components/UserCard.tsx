import './UserCard.css';

interface UserCardProps {
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

const UserCard = ({ name, email, role, avatar }: UserCardProps) => {
  return (
    <div className="user-card">
      <h2>Stateless Component: User Card</h2>
      <div className="user-card-content">
        <div className="avatar">
          {avatar ? (
            <img src={avatar} alt={name} />
          ) : (
            <div className="avatar-placeholder">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="user-info">
          <h3 className="user-name">{name}</h3>
          <p className="user-email">{email}</p>
          <span className="user-role">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;