export class DataBase {
  public db: IDBDatabase;

  init(dbName: string, version?: number) {
    const iDB = window.indexedDB;
    const openRequest = iDB.open(dbName, version);

    openRequest.onupgradeneeded = () => {
      const database = openRequest.result;
      const store = database.createObjectStore('maxfri', { keyPath: 'id', autoIncrement: true });
      store.createIndex('firstName', 'firstName');
      store.createIndex('secondName', 'secondName');
      store.createIndex('score', 'score');
      store.createIndex('image', 'image');
      store.createIndex('email', 'email', { unique: true });
      this.db = database;
    };

    openRequest.onsuccess = () => {
      this.db = openRequest.result;
    };
  }

  write(firstName: string, secondName: string, email: string, image: string) {
    const transaction = this.db.transaction('maxfri', 'readwrite');
    const store = transaction.objectStore('maxfri');
    const result = store.put({
      secondName, score: 0, firstName, image, email,
    });

    result.onsuccess = () => {
      // console.log('complite', result.result);
    };
    result.onerror = () => {
      // console.log('error', result.error);
    };
    transaction.onabort = () => {
      // console.log('abort');
    };
  }

  readAll(): void {
    const transaction = this.db.transaction('maxfri', 'readonly');
    const store = transaction.objectStore('maxfri');
    const result = store.getAll();
    transaction.oncomplete = () => {
      // console.log(result.result);
      // result.result;
    };
  }

  list() {
    const transaction = this.db.transaction('maxfri', 'readonly');
    const store = transaction.objectStore('maxfri');

    const players: any = store.getAll();
    const userPlace: HTMLDivElement = document.createElement('div');
    userPlace.classList.add('best-players-table');
    players.onsuccess = () => {
      // console.log(players.result);
      userPlace.innerHTML = players.result.map((player: any) => `<div class="best-players-place">
          <div class="best-players-photo">
            <img class="best-players-img" src="${player.image}" alt="photo">
          </div>
          <div class="best-players-name">
            ${player.firstName} ${player.secondName} ${player.email}
          </div>
          <div class="best-players-score">
          Score: ${player.score}
          </div>
        </div>`).join('');
      document.querySelector('.best-players')?.appendChild(userPlace);
    };
  }

  readFilter() {
    const transaction = this.db.transaction('maxfri', 'readonly');
    const store = transaction.objectStore('maxfri');
    const result = store.index('score').openCursor(null, 'next');
    const resData: Array<any> = [];

    result.onsuccess = () => {
      const cursor = result.result;
      if (cursor) {
        // console.log(cursor.value);
        // if (cursor.value.email[0] === 'a') {
        resData.push(cursor.value);
        // }
        cursor?.continue();
      }
    };

    transaction.oncomplete = () => {
      // console.log(resData);
      // return resData;
    };
  }
}

// const DB_NAME = 'maxfri';
// // const DB_VERSION = 1;
// const DB_STORE_NAME = 'users';
