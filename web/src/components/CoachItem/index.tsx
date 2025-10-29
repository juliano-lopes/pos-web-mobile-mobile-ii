import React from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Coach {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
  youtube_link: string;
  linkedin_link: string;
  tiktok_link: string;
  instagram_link: string;
}

interface CoachItemProps {
  coach: Coach;
}

const CoachItem: React.FC<CoachItemProps> = ({ coach }) => {
  function createNewConnection() {
    api.post('connections', {
      coach_id: coach.id,
    });
  }

  return (
    <article className="coach-item">
      <header>
        <img src={coach.avatar} alt='' />
        <div>
          <h2>{coach.name}</h2>
          <span>{coach.subject}</span>
        </div>
      </header>

      <p>{coach.bio}</p>

      <footer>
        <p>Preço/Hora
          <strong>R$ {coach.cost}</strong>
        </p>
        <ul className='social-medias' aria-label='Redes sociais'>
          <li><a
            target="_blank"
            onClick={createNewConnection}
            href={`https://wa.me/${coach.whatsapp}`}
          >
            <img src={whatsappIcon} alt="" />
            Entrar em contato
          </a></li>
          {coach.youtube_link && (<li><a href={coach.youtube_link} target='_blank'>Youtube</a></li>)}
          {coach.linkedin_link && (<li><a href={coach.linkedin_link} target='_blank'>LinkedIn</a></li>)}
          {coach.instagram_link && (<li><a href={coach.instagram_link} target='_blank'>Instagram</a></li>)}
          {coach.tiktok_link && (<li><a href={coach.tiktok_link} target='_blank'>Tiktok</a></li>)}
        </ul>
      </footer>
    </article>
  );
}

export default CoachItem;