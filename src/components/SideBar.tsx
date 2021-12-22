import { GenreResponseProps } from '@types-genre';
import { Button } from './Button';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenre: number;
  changeGenre: (id: number) => void;
}

export function SideBar(props: SideBarProps) {  
  const { genres, selectedGenre, changeGenre } = props;

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => changeGenre(genre.id)}
            selected={selectedGenre === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}