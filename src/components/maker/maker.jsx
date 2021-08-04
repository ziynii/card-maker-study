import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState([
		{
			id: '1',
			name: 'Ellie1',
			company: 'Samsung',
			theme: 'dark',
			email: 'ellie@gmail.com',
			title: 'Software Engineer',
			message: 'go for it',
			fileName: 'ellie',
			fileURL: null,
		},
		{
			id: '2',
			name: 'Ellie2',
			company: 'Samsung',
			theme: 'light',
			email: 'ellie@gmail.com',
			title: 'Software Engineer',
			message: 'go for it',
			fileName: 'ellie',
			fileURL: 'ellie.png'
		},
		{
			id: '3',
			name: 'Ellie3',
			company: 'Samsung',
			theme: 'colorful',
			email: 'ellie@gmail.com',
			title: 'Software Engineer',
			message: 'go for it',
			fileName: 'ellie',
			fileURL: null,
		},
	]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

	const addCard = card => {
		const update = [...cards, card];
		setCards(update);
	}

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
