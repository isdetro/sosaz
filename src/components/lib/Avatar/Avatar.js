import { Avatar as AntAvatar } from 'antd';

export default function Avatar({ src, ...rest }) {
  return (
    <AntAvatar
      {...rest}
      src={'https://s.hs-data.com/bilder/spieler/gross/11212.jpg?fallback=png'}
    />
  );
}
