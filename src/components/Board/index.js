import React, { useState } from 'react';
import immer from 'immer';

import { loadLists } from '../../services/api';
import List from '../List';
import { Container } from './styles';
import BoardContext from './context';

const data = loadLists();

function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(immer(lists, (draft) => {
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }));
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, i) => (<List index={i} key={list.title} data={list} />))}
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;
