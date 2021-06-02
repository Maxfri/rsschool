export class DataBase {
  public db: IDBDatabase;

  init(dbName: string, version?: number) {
    const iDB = window.indexedDB;
    const openRequest = iDB.open(dbName, version);

    openRequest.onupgradeneeded = () => {
      const database = openRequest.result;
      const store = database.createObjectStore('testCollection', { keyPath: 'id', autoIncrement: true });
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
    const transaction = this.db.transaction('testCollection', 'readwrite');
    const store = transaction.objectStore('testCollection');
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

  readAll(collection: string): void {
    const transaction = this.db.transaction(collection, 'readonly');
    const store = transaction.objectStore(collection);
    const result = store.getAll();
    transaction.oncomplete = () => {
      // console.log(result.result);
    };
  }

  readFiltere() {
    const transaction = this.db.transaction('testCollection', 'readonly');
    const store = transaction.objectStore('testCollection');
    const result = store.index('email').openCursor(null, 'prev');
    const resData: Array<any> = [];

    result.onsuccess = () => {
      const cursor = result.result;
      if (cursor) {
        // console.log(cursor.value);
        if (cursor.value.email[0] === 'a') {
          resData.push(cursor.value);
        }
        cursor?.continue();
      }
    };

    transaction.oncomplete = () => {
      // console.log(resData);
    };
  }
}

// const DB_NAME = 'maxfri';
// // const DB_VERSION = 1;
// const DB_STORE_NAME = 'users';
