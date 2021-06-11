const DB_STORE_NAME = 'players';

type Player = { firstName: string, secondName: string, email: string, image: string, score: number };

export class DataBase {
  public db: IDBDatabase;

  init(dbName: string, version?: number): void {
    const iDB = window.indexedDB;
    const openRequest = iDB.open(dbName, version);

    openRequest.onupgradeneeded = () => {
      const database = openRequest.result;
      const store: IDBObjectStore = database.createObjectStore(DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });
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

  write(firstName: string, secondName: string, email: string, image: string): void {
    const transaction: IDBTransaction = this.db.transaction(DB_STORE_NAME, 'readwrite');
    const store: IDBObjectStore = transaction.objectStore(DB_STORE_NAME);
    const result: IDBRequest<IDBValidKey> = store.put({
      secondName, score: 0, firstName, image, email,
    });

    result.onsuccess = () => {
    };
    result.onerror = () => {
      throw new Error(`Error: ${result.error}`);
    };
    transaction.onabort = () => {
    };
  }

  readAll(): void {
    const transaction: IDBTransaction = this.db.transaction(DB_STORE_NAME, 'readonly');
    const store: IDBObjectStore = transaction.objectStore(DB_STORE_NAME);
    store.getAll();
    transaction.oncomplete = () => {
    };
  }

  list(): void {
    const transaction: IDBTransaction = this.db.transaction(DB_STORE_NAME, 'readonly');
    const store: IDBObjectStore = transaction.objectStore(DB_STORE_NAME);
    const players: IDBRequest = store.getAll();
    const userPlace: HTMLDivElement = document.createElement('div');
    userPlace.classList.add('best-players-table');
    players.onsuccess = () => {
      userPlace.innerHTML = players.result.map(
        (player: Player) => `<div class="best-players-place">
          <div class="best-players-photo">
            <img class="best-players-img" src="${player.image}" alt="photo">
          </div>
          <div class="best-players-name">
            ${player.firstName} ${player.secondName} ${player.email}
          </div>
          <div class="best-players-score">
          Score: ${player.score}
          </div>
        </div>`,
      ).join('');
      document.querySelector('.best-players')?.appendChild(userPlace);
    };
  }

  readFilter(): void {
    const transaction: IDBTransaction = this.db.transaction(DB_STORE_NAME, 'readonly');
    const store: IDBObjectStore = transaction.objectStore(DB_STORE_NAME);
    const result: IDBRequest<IDBCursorWithValue | null> = store.index('score').openCursor(null, 'next');
    const resData: Array<string> = [];

    result.onsuccess = () => {
      const cursor = result.result;
      if (cursor) {
        if (cursor.value.email[0] === 'a') {
          resData.push(cursor.value);
        }
        cursor?.continue();
      }
    };

    transaction.oncomplete = () => {
    };
  }
}
