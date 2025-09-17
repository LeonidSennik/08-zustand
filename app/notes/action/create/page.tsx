import NoteForm from '../../../../components/NoteForm/NoteForm';
import css from './CreateNote.module.css';

export const metadata = {
  title: 'Створити нотатку — NoteHub',
  description: 'Сторінка для створення нової нотатки у застосунку NoteHub.',
  openGraph: {
    title: 'Створити нотатку — NoteHub',
    description: 'Створіть нову нотатку з тегом, заголовком і контентом.',
    url: 'https://notehub.goit.global/notes/action/create',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
