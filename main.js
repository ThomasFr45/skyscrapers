const checkTable = (table) => {
  console.log("Check");
  let i = 1;
  let x = 1;
  let y = 1;
  let cell = 0;
  let count = 0;
  let people = "";
  while (i < table[0].length - 1) {
    people += table[0][i];
    i++;
  }
  console.log(people)
  while (y <= people.length) {
    while (x < 5 && x > 0) {
      if (table[x][y] > cell) {
        cell = table[x][y];
        count++;
      }
      x++;
    }
    if (parseInt(people[y - 1], 10) !== count) {
      console.log("premier");
      return false;
    }
    count = 0;
    cell = 0;
    x = 1;
    y++;
  }
  console.log("first good")
  people = "";
  cell = 0;
  i = 1;
  x = 4;
  y = 1;
  while (i < table[0].length - 1) {
    people += table[5][i];
    i++;
  }
  while (y <= people.length) {
    while (x < 5 && x > 0) {
      if (table[x][y] > cell) {
        cell = table[x][y];
        count++;
      }
      x--;
    }
    if (parseInt(people[y - 1], 10) !== count) {
      console.log("deuxieme");
      return false;
    }
    count = 0;
    cell = 0;
    x = 4;
    y++;
  }
console.log("sec good")
  people = "";
  cell = 0;
  i = 1;
  x = 1;
  y = 1;
  while (i < table[0].length - 1) {
    people += table[i][0];
    i++;
  }
  while (x <= people.length) {
    while (y < 5 && y > 0) {
      if (table[x][y] > cell) {
        cell = table[x][y];
        count++;
      }
      y++;
    }
    if (parseInt(people[x - 1], 10) !== count) {
      console.log("troisieme");
      return false;
    }
    count = 0;
    cell = 0;
    y = 1;
    x++;
  }
  console.log("third good")
  people = "";
  cell = 0;
  i = 1;
  x = 1;
  y = 4;
  while (i < table[0].length - 1) {
    people += table[i][5];
    i++;
  }
  while (x <= people.length) {
    while (y < 5 && y > 0) {
      if (table[x][y] > cell) {
        cell = table[x][y];
        count++;
      }
      y--;
    }
    if (parseInt(people[x - 1], 10) !== count) {
      console.log("dernier");
      return false;
    }
    count = 0;
    cell = 0;
    y = 4;
    x++;
  }
  console.log("last good")
  return true;
};

const initTable = () => {
  let table = [];
  for (let i = 0; i < 6; i++) {
    table.push([]);
    for (let y = 0; y < 6; y++) {
      table[i].push(0);
    }
  }
  table[0][0] = "";
  table[0][5] = "";
  table[5][0] = "";
  table[5][5] = "";
  return table;
};

const placePeople = (table) => {
  const people = "1233232112323321";
  let person = 0;
    for (let i = 1; i < 5; i++) {
      table[0][i] = parseInt(people[person], 10);
      table[5][i] = parseInt(people[person + 4], 10);
      table[i][0] = parseInt(people[person + 8], 10);
      table[i][5] = parseInt(people[person + 12], 10);
      person++;
    };
  return table;
};

const	isPossible = (tab, col, row, place) => {
	let col_down;
	let row_left;

	col_down = col - 1;
	row_left = row - 1;
	if (row !== 0 && row !== 1 && row !== 5 && col !== 0 && col !== 5)
	{
		while (row_left > 0)
		{
			if (tab[col][row_left] === place) return (0);
			row_left--;
		}
	}
	if (col !== 0 && col !== 1 && col !== 5 && row !== 0 && row !== 5)
	{
		while (col_down > 0)
		{
			if (tab[col_down][row] === place) return (0);
			col_down--;
		}
	}
	return (1);
}

const changeValue = (table, x, y, place) => {
    table[x][y] = place;
};

const table = placePeople(initTable());

const solvePuzzle = (x = 1, y = 1, place = 1) => {
  if (x === 4 && y === 5) {
    if(checkTable(table)) {
      console.log("allgood")
      return true;
    }
  }
  if (y === 5) {
    x++;
    y = 1;
  }
  while(place < 5 && y < 5 && x < 5) {
    if (isPossible(table, x, y, place)) {
      console.log("isPossible")
      changeValue(table, x, y, place);
      if(solvePuzzle(x, y + 1)) {
        console.log("End of call")
        return true;
      }
    }
    place ++;
  }
  return false;
};
if(solvePuzzle()){
  console.table(table);
}
else {
  console.log("Can't be solved.")
}
