import styles from './chatButtons.module.css';

interface ChatButtonsProps {
  onAction: (type: 'help' | 'needHelp') => void;
}

export const ChatButtons = ({ onAction }: ChatButtonsProps) => {
  return (
    <div className={styles.container}>
      <button onClick={() => onAction('help')}>Хочу помочь</button>
      <button onClick={() => onAction('needHelp')}>Нужна помощь</button>
    </div>
  );
};