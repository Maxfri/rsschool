// export class Router {
//   routes: string[] = [];

//   mode: unknown;

//   root = '/';

//   constructor(options) {
//     this.mode = window.history.pushState ? 'history' : 'hash';
//     if (options.mode) this.mode = options.mode;
//     if (options.root) this.root = options.root;
//     this.listen();
//   }

//   add = (path, cb): string[] => {
//     this.routes.push({ path, cb });
//     return this;
//   };

//   remove = path => {
//     for (let i = 0; i < this.routes.length; i += 1) {
//       if (this.routes[i].path === path) {
//         this.routes.slice(i, 1);
//         return this;
//       }
//     }
//     return this;
//   };

//   flush = () => {
//     this.routes = [];
//     return this;
//   };

//   clearSlashes = path =>
//     path
//       .toString()
//       .replace(/\/$/, '')
//       .replace(/^\//, '');

//   getFragment = () => {
//     let fragment = '';
//     if (this.mode === 'history') {
//       fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
//       fragment = fragment.replace(/\?(.*)$/, '');
//       fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
//     } else {
//       const match = window.location.href.match(/#(.*)$/);
//       fragment = match ? match[1] : '';
//     }
//     return this.clearSlashes(fragment);
//   };

//   navigate = (path = '') => {
//     if (this.mode === 'history') {
//       window.history.pushState(null, null, this.root + this.clearSlashes(path));
//     } else {
//       window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
//     }
//     return this;
//   };

//   listen = () => {
//     clearInterval(this.interval);
//     this.interval = setInterval(this.interval, 50);
//   };

//   interval = () => {
//     if (this.current === this.getFragment()) return;
//     this.current = this.getFragment();

//     this.routes.some(route => {
//       const match = this.current.match(route.path);
//       if (match) {
//         match.shift();
//         route.cb.apply({}, match);
//         return match;
//       }
//       return false;
//     });
//   };
// }

/////////////////////////

 // `класс` роутера
export class Router {

  // маршруты и соответствующие им обработчики
  routes = {
      "/": "index",
      "/article/:id/:author": "article",
      "/company/:name/post/:id": "company_blog",
  };


  // метод проходиться по массиву routes и создает
  // создает объект на каждый маршрут
  init() {
     
      // объявляем свойство _routes
      this._routes = [];
      for( let route in this.routes ) {
 
          // имя метода-обрботчика
          let method = this.routes[route];
         
          // добавляем в массив роутов объект
          this._routes.push({
             
              // регулярное выражение с которым будет сопоставляться ссылка
              // ее надо преобразовать из формата :tag в RegEx
              // модификатор g обязателен
              pattern: new RegExp('^' + route.replace(/:\w+/g,'(\\w+)') + '$'),
             
              // метод-обработчик
              // определяется в объекте Route
              // для удобства
              callback: this[method]
          });

      }

  }
 
  dispatch(path) {
     
      // количество маршрутов в массиве
      var i = this._routes.length;
     
      // цикл до конца
      while( i-- ) {
         
          // если запрошенный путь соответствует какому-либо
          // маршруту, смотрим есть ли маршруты
          var args = path.match(this._routes[i].pattern);
         
          // если есть аргументы
          if( args ) {
             
              // вызываем обработчик из объекта, передавая ему аргументы
              // args.slice(1) отрезает всю найденную строку
              this._routes[i].callback.apply(this,args.slice(1))
          }
      }
  }

  // обработчик
  // главной страницы
  index() {
      console.log("Main page");
  }

  // контроллер статей
  article(id,author) {
      console.log(`Article #${id} Author: ${author}`);
  }
 
  // контроллер блога компаний
  company_blog(name,id) {
      console.log(`Artwork #${name}, comment #${id}`)
  }
}