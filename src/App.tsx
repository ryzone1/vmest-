import './App.css'
import { Header } from './components/header/header'
import { ChatButtons } from './components/chat/chatButtons'
import { ArticlesSection } from './components/articlesSection/articlesSection';
import { Hero } from './components/hero/hero';
import { demoArticles, agreements, HeroText } from './demo/demoData';
import { Modal } from './components/modal/modal';
import { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState<'help' | 'needHelp' | null>(null);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const handleAction = (type: 'help' | 'needHelp') => {
    setCurrentAction(type);
    setModalOpen(true);
    setShowPlaceholder(false);
  };

  const handleClose = () => {
    setModalOpen(false);
    setShowPlaceholder(false);
  };

  const handleAccept = () => {
    setShowPlaceholder(true);
  };

  return (
    <section>
      <Header appName='Вместе' />
      <Hero {...HeroText}></Hero>
      <ChatButtons onAction={handleAction} />
      <ArticlesSection articles={demoArticles} />

      <Modal
        isOpen={modalOpen}
        onClose={handleClose}
        onAccept={handleAccept}
        agreementText={agreements[currentAction!]}
      >
        {showPlaceholder ? (
          <div>
            <h3>Заглушка компонента после принятия соглашения</h3>
            <p>Здесь будет отображаться следующий компонент.</p>
            <button onClick={handleClose}>Закрыть</button>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}


export default App
