const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (_request, _h) => 'Homepage',
  },
  {
    method: '*',
    path: '/',
    handler: (_request, _h) => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: 'GET',
    path: '/about',
    handler: (_request, _h) => 'About Page',
  },
  {
    method: '*',
    path: '/about',
    handler: (_request, _h) => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, _h) => {
      const { name = 'stranger' } = request.params;
      const { lang } = request.query;
      if (lang === 'id') {
        return `Hai, ${name}!`;
      }
      return `Hello, ${name}`;
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (_request, _h) => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
