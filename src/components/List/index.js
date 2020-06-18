import React, { useContext } from 'react';
import { MdAdd } from 'react-icons/md';

import { useDrop } from 'react-dnd';

import BoardContext from '../Board/context';
import Card from '../Card';

import { Container } from './styles';

export default ({ data, index: listIndex }) => {
  const { move } = useContext(BoardContext);

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover: (item, monitor) => {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = data.cards.length;
      if (targetListIndex === draggedListIndex) return null;

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      item.index = targetIndex; // eslint-disable-line no-param-reassign
      item.listIndex = targetListIndex; // eslint-disable-line no-param-reassign
      return null;
    },
  });

  return (
    <Container done={data.done} ref={dropRef}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, i) => (
          <Card key={card.id} index={i} listIndex={listIndex} data={card} />
        ))}
      </ul>
    </Container>
  );
};
