export function TodoList(props) {
  const { children } = props;

  if (!children.every(item => item.type.name === 'TodoListItem')) {
    console.warn('TodoList should only receive TodoListItem as children');
  }

  return (
    <ul className='notes-list'>
      {children}
    </ul>
  );
}