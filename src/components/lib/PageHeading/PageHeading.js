import style from './PageHeading.module.scss';

export default function PageHeading({ title, children }) {
  return (
    <div className={style.container}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
